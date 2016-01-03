from django.views.generic import ListView
from .models import FoodItem, FoodCategory


class FoodMenuView(ListView):
    model = FoodCategory
    template_name = 'food/food-menu.html'

    def get_queryset(self):
        qs = super(FoodMenuView, self).get_queryset()
        qs = qs.prefetch_related('fooditem_set', 'fooditem_set__tags')
        return qs
