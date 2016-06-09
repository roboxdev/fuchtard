from django.conf.urls import url
from .views import FoodMenuView

urlpatterns = [
    url(r'^$', FoodMenuView.as_view(), name='food-menu-view'),
]

