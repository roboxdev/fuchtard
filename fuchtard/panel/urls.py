from django.conf.urls import url
from django.views.generic import TemplateView

from .views import DashboardView, OrdersView

urlpatterns = [
    url(r'^$', DashboardView.as_view(), name='dashboard-view'),
    url(r'^orders/', OrdersView.as_view(), name='orders-view'),
]
