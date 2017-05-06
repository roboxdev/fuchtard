# from food.views import FoodCategoryViewSet
from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter

from order.views import CheckoutViewset, GiftsViewSet, OrdersViewSet, DashGiftsViewSet, DashOrdersViewSet
from food.views import FoodCategoriesViewSet, FoodItemsViewSet, DashFoodCategoriesViewSet, DashFoodItemsViewSet

router = DefaultRouter()
router.register(r'checkout', CheckoutViewset, base_name='checkout')
router.register(r'orders', OrdersViewSet, base_name='order')
router.register(r'gifts', GiftsViewSet, base_name='gift')
router.register(r'food_categories', FoodCategoriesViewSet, base_name='foodcategory')
router.register(r'food_items', FoodItemsViewSet, base_name='fooditem')

dashboard_router = DefaultRouter()
dashboard_router.register(r'orders', DashOrdersViewSet, base_name='dash-order')
dashboard_router.register(r'gifts', DashGiftsViewSet, base_name='dash-gift')
dashboard_router.register(r'food_categories', DashFoodCategoriesViewSet, base_name='dash-foodcategory')
dashboard_router.register(r'food_items', DashFoodItemsViewSet, base_name='dash-fooditem')

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^dashboard/', include(dashboard_router.urls, namespace='dashboard')),

]
