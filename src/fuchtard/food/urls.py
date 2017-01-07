from django.conf.urls import url

from .views import FoodMenuView, AppView

urlpatterns = [
    url(r'^$', FoodMenuView.as_view(), name='food-menu-view'),
    url(r'^app/$', AppView.as_view(), name='app-view')
]

