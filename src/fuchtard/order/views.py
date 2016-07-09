import datetime
from urllib.parse import urljoin

from django.conf import settings
from django.core.urlresolvers import reverse
from django.shortcuts import redirect
from django.views.generic import View, TemplateView, CreateView

from .forms import GiftForm
from .models import Cart, Order, Gift
from .helpers import send_templated_email, telegram_notify_channel


class OrderCheckoutView(CreateView):
    template_name = 'order/order_checkout.html'
    model = Order
    form_class = GiftForm

    def dispatch(self, request, *args, **kwargs):
        cart_id = self.request.session.get('cart_id', None)
        if cart_id:
            cart_object = Cart.objects.filter(id__exact=cart_id, order__isnull=True)
            if cart_object.exists():
                self.cart_object = self.get_cart_object()
                self.cart_object_total_price = self.cart_object.total_price
                return super(OrderCheckoutView, self).dispatch(request, *args, **kwargs)
        return redirect('food:food-menu-view')

    def get_form_kwargs(self):
        kwargs = super(OrderCheckoutView, self).get_form_kwargs()
        kwargs['cart_object_total_price'] = self.cart_object_total_price
        return kwargs

    def get_cart_object(self):
        cart_id = self.request.session.get('cart_id')
        cart_qs = Cart.objects.filter(id__exact=cart_id).prefetch_related(
            'cartitem_set__product__category__discount',
            'cartitem_set__product__tags__discount',
            'cartitem_set__product__discount',
            # 'cartitem_set__product',
        )
        cart_object = cart_qs.first()
        return cart_object

    def get_unavailable_gifts_list(self):
        gifts_qs = Gift.objects.filter(requirement__gt=self.cart_object_total_price).select_related('food_item')
        return gifts_qs

    @staticmethod
    def get_deferred_delivery_dates():
        humanized = (
            'Сегодня',
            'Завтра',
            'Послезавтра',
        )
        return [(humanized[td], datetime.date.today() + datetime.timedelta(days=td),) for td in range(3)]

    @staticmethod
    def _next_timestamp(current_timestamp):
        return (datetime.datetime.combine(datetime.datetime.today(), current_timestamp) +
                datetime.timedelta(minutes=30)).time()

    def get_deferred_delivery_hours(self):
        import datetime
        working_hours_start = datetime.time(hour=11, minute=12)
        working_hours_end = datetime.time(hour=23, minute=11)
        if working_hours_start < working_hours_end:
            result = [datetime.time(hour=working_hours_start.hour)]
            while True:
                dt = self._next_timestamp(result[-1])
                if dt > working_hours_end:
                    break
                result.append(dt)
        else:
            result = [datetime.time(hour=0)]
            while True:
                dt = self._next_timestamp(result[-1])
                if dt > working_hours_end:
                    break
                result.append(dt)
            result.append(datetime.time(hour=working_hours_start.hour))
            while True:
                dt = self._next_timestamp(result[-1])
                if dt < working_hours_end:
                    break
                result.append(dt)

    def get_success_url(self):
        return reverse('order:thank-you-view', kwargs={'hashed_id': self.object.hashed_id})

    def get_context_data(self, **kwargs):
        return super(OrderCheckoutView, self).get_context_data(**kwargs)

    def form_valid(self, form):
        form = super(OrderCheckoutView, self).form_valid(form)
        self.request.session.pop('cart_id')
        order_hashed_id = self.object.hashed_id
        order_absolute_url = urljoin(
            'http://{}'.format(settings.SITE_DOMAIN),
            reverse('panel:order-detail-view', kwargs={'hashed_id': order_hashed_id}),
        )
        email_params = {
            'template': 'order/email_new_order',
            'template_params': {
                'order_url': order_absolute_url,
                'order': self.object,
            },
            'subject': 'Новый заказ №{}'.format(order_hashed_id),
            'from_email': settings.FUCHTARD_NOREPLY_EMAIL,
            'recipient_list': [settings.FUCHTARD_ORDERS_EMAIL]
        }
        send_templated_email(email_params)
        telegram_notify_channel('Новый заказ №{}\n{}'.format(order_hashed_id, order_absolute_url))
        return form

    def form_invalid(self, form):
        return super(OrderCheckoutView, self).form_invalid(form)


class CartUpdateView(View):
    def post(self, request, *args, **kwargs):
        cart_id = self.request.session.get('cart_id', None)
        cart = Cart.objects.get_or_create(id__exact=cart_id, order__isnull=True)[0]
        self.request.session.set_expiry(int(datetime.timedelta(days=5).total_seconds()))
        self.request.session['cart_id'] = cart.id
        json_cart = request.POST.get('cart_data')
        cart.json_update(json_cart=json_cart)
        return redirect('order:order-checkout-view')


# TODO: permission
class ThankYouView(TemplateView):
    template_name = 'order/thank_you.html'

    def get_context_data(self, **kwargs):
        context = super(ThankYouView, self).get_context_data(**kwargs)
        context['order_hashed_id'] = kwargs.get('hashed_id')
        return context
