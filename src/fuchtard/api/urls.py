# from food.views import FoodCategoryViewSet
from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter

from order.views import OrdersViewSet
from food.views import FoodCategoriesViewSet, FoodItemsViewSet

router = DefaultRouter()
router.register(r'orders', OrdersViewSet)
router.register(r'food_categories', FoodCategoriesViewSet)
router.register(r'food_items', FoodItemsViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
