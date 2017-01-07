from django.conf.urls import url
from django.views.generic import TemplateView

from .views import FoodMenuView

urlpatterns = [
    url(r'^$', FoodMenuView.as_view(), name='food-menu-view'),
    url(r'^test/$', TemplateView.as_view(template_name='food/test.html'))
]

