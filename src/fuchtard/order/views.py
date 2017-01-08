import datetime

from django.core.urlresolvers import reverse
from django.shortcuts import redirect
from django.views.generic import View, TemplateView, CreateView
from rest_framework import viewsets, mixins

from .forms import GiftForm
from .models import Cart, Order, Gift
from .serializers import OrderSerializer


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

    def get_success_url(self):
        return reverse('order:thank-you-view', kwargs={'hashed_id': self.object.hashed_id})

    def get_context_data(self, **kwargs):
        return super(OrderCheckoutView, self).get_context_data(**kwargs)

    def form_valid(self, form):
        form = super(OrderCheckoutView, self).form_valid(form)
        self.request.session.pop('cart_id')
        self.object.notify_restaurant()
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


class OrdersViewSet(mixins.CreateModelMixin,
                    viewsets.GenericViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = []

    def perform_create(self, serializer):
        super(OrdersViewSet, self).perform_create(serializer)
        # TODO: fire notifications self.object.notify_restaurant()
