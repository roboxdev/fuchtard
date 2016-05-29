import json

from django.views.generic import ListView

from main.models import Banner
from order.models import Cart, Gift
from .models import FoodCategory


class FoodMenuView(ListView):
    model = FoodCategory
    template_name = 'food/food-menu.html'

    def get_context_data(self, **kwargs):
        context = super(FoodMenuView, self).get_context_data(**kwargs)
        cart_id = self.request.session.get('cart_id', None)
        cart_qs = Cart.objects.filter(id=cart_id)
        if cart_id and cart_qs:
            cart = cart_qs.first()
            context['cart'] = cart
        return context

    def get_queryset(self):
        qs = super(FoodMenuView, self).get_queryset()
        qs = qs.prefetch_related(
                'fooditem_set__discount',
                'fooditem_set__category__discount',
                'fooditem_set__tags__discount',
        )
        return qs

    def get_gift_breakpoints(self):
        gifts = Gift.objects.order_by('requirement')
        gift_breakpoints = [gift.requirement for gift in gifts]
        gift_breakpoints.insert(0, 3000)
        return json.dumps(gift_breakpoints)

    def get_banners(self):
        qs = Banner.objects.all()
        return qs
