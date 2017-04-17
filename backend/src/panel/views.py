from django.contrib.auth.mixins import UserPassesTestMixin
from django.urls.base import reverse_lazy
from django.views.generic import DetailView

from order.models import Order


class OrderDetailView(UserPassesTestMixin, DetailView):
    template_name = 'panel/order_detail.html'
    model = Order
    login_url = reverse_lazy('admin:login')

    def test_func(self):
        return self.request.user.is_staff

    def get_object(self, queryset=None):
        return Order.objects.get_by_hash(self.kwargs.get('hashed_id'))
