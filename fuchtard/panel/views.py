from django.views.generic import TemplateView


class DashboardView(TemplateView):
    template_name = 'panel/dashboard.html'


class OrdersView(TemplateView):
    template_name = 'panel/orders.html'
