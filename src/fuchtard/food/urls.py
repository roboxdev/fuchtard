from django.conf.urls import url

from .views import FoodMenuView, AppView

urlpatterns = [
    url(r'^old/$', FoodMenuView.as_view(), name='food-menu-view'),
    url(r'(^$|^cart/|^checkout/)', AppView.as_view(), name='app-view')
]

