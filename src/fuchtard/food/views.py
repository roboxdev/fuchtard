import json

from django.views.generic import ListView
from django.views.generic import TemplateView

from main.models import Banner
from order.models import Cart, Gift
from .models import FoodCategory
from .serializers import FoodCategorySerializer
from order.serializers import GiftSerializer
from main.serializers import BannerSerializer


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

    @staticmethod
    def get_gift_breakpoints():
        gifts = Gift.objects.all()
        gift_breakpoints = [gift.requirement for gift in gifts]
        return json.dumps(gift_breakpoints)

    @staticmethod
    def get_gifts():
        gifts = Gift.objects.select_related('food_item').all()
        return gifts

    @staticmethod
    def get_banners():
        return Banner.objects.all()


class AppView(TemplateView):
    template_name = 'food/app.html'

    def get_context_data(self, **kwargs):
        context = super(AppView, self).get_context_data(**kwargs)
        context['initial_data'] = self.get_initial_data()
        return context

    def get_initial_data(self):
        return json.dumps({
            'foodMenu': self.get_food_menu(),
            'banners': self.get_banners(),
            'gifts': self.get_gifts(),
        })

    def get_food_menu(self):
        categories = FoodCategory.objects.prefetch_related('fooditem_set__discount',
                                                           'fooditem_set__category__discount',
                                                           'fooditem_set__tags__discount',)
        serialized = FoodCategorySerializer(categories,
                                            # context={},
                                            many=True).data
        return serialized

    def get_banners(self):
        banners = Banner.objects.all()
        serialized = BannerSerializer(banners, many=True).data
        return serialized

    def get_gifts(self):
        gifts = Gift.objects.all()
        serialized = GiftSerializer(gifts, many=True).data
        return serialized
