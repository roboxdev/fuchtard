# from food.views import FoodCategoryViewSet
from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter

from food.views import FoodMenuViewSet
from main.views import BannerViewSet

router = DefaultRouter()
router.register(r'foodmenu', FoodMenuViewSet)
router.register(r'banners', BannerViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
