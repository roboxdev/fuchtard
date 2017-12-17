# from food.views import FoodCategoryViewSet
from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter

from order.views import CheckoutViewset, GiftsViewSet, OrdersViewSet
from food.views import FoodCategoriesViewSet, FoodItemsViewSet

router = DefaultRouter()
router.register(r'checkout', CheckoutViewset, base_name='checkout')
router.register(r'orders', OrdersViewSet, base_name='order')
router.register(r'gifts', GiftsViewSet, base_name='gift')
router.register(r'food_categories', FoodCategoriesViewSet, base_name='foodcategory')
router.register(r'food_items', FoodItemsViewSet, base_name='fooditem')

urlpatterns = [
    url(r'^', include(router.urls)),
]
