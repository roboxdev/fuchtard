# from food.views import FoodCategoryViewSet
from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter

from order.views import OrdersViewSet

router = DefaultRouter()
router.register(r'orders', OrdersViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
