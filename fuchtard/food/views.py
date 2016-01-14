from django.views.generic import ListView

from order.models import Cart
from .models import FoodItem, FoodCategory


class FoodMenuView(ListView):
    model = FoodCategory
    template_name = 'food/food-menu.html'

    def get(self, request, *args, **kwargs):
        # request.session['cartid'] = 1
        # print(request.session)
        # print(request.session['cart_id'])
        # cart_id = request.session.get('cart_id', None)
        # if cart_id:
        #     cart = Cart.objects.get(id=cart_id)

        return super(FoodMenuView, self).get(request, args, kwargs)

    def get_queryset(self):
        qs = super(FoodMenuView, self).get_queryset()
        qs = qs.prefetch_related('fooditem_set', 'fooditem_set__tags')
        return qs
