from django.conf.urls import url
from .views import FoodMenuView

urlpatterns = [
    url(r'^menu/', FoodMenuView.as_view(), name='food-menu-view'),
    url(r'^menu/465', FoodMenuView.as_view(), name='food-menu-view-food-item'),
]

