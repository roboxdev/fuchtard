from django.views.generic import TemplateView, ListView, DetailView

from order.models import Order
from order.helpers import shifthash


class DashboardView(TemplateView):
    template_name = 'panel/dashboard.html'


class OrdersView(ListView):
    template_name = 'panel/orders.html'
    model = Order


class OrderDetailView(DetailView):
    template_name = 'panel/order_detail.html'
    model = Order

    def get_object(self, queryset=None):
        pk = shifthash(self.kwargs.get('hashed_id'))
        self.kwargs['pk'] = pk
        return super(OrderDetailView, self).get_object(queryset)
