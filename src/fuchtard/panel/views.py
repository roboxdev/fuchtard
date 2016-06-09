from django.contrib.auth.mixins import PermissionRequiredMixin
from django.core.urlresolvers import reverse
from django.views.generic import TemplateView, ListView, DetailView

from order.models import Order
from order.helpers import shifthash


class CanEditOrderPermissionRequiredMixin(PermissionRequiredMixin):
    permission_required = 'order.can_edit'

    def get_login_url(self):
        return reverse('admin:login')


class DashboardView(CanEditOrderPermissionRequiredMixin, TemplateView):
    template_name = 'panel/dashboard.html'


class OrdersView(CanEditOrderPermissionRequiredMixin, ListView):
    template_name = 'panel/orders.html'
    model = Order
    queryset = Order.objects.order_by('-order_created_timestamp')[:100]


class OrderDetailView(CanEditOrderPermissionRequiredMixin, DetailView):
    template_name = 'panel/order_detail.html'
    model = Order

    def get_object(self, queryset=None):
        pk = shifthash(self.kwargs.get('hashed_id'))
        self.kwargs['pk'] = pk
        return super(OrderDetailView, self).get_object(queryset)
