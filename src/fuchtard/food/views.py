from django.views.generic import TemplateView
from rest_framework import mixins, viewsets

from .models import FoodCategory, FoodItem
from .serializers import FoodCategorySerializer, FoodItemSerializer


class FoodItemsViewSet(mixins.RetrieveModelMixin,
                       mixins.ListModelMixin,
                       viewsets.GenericViewSet):
    queryset = FoodItem.objects.prefetch_related('discount',
                                                 'category__discount',
                                                 'tags__discount', )
    serializer_class = FoodItemSerializer

    def get_serializer_context(self):
        return {'request': self.request}


class FoodCategoriesViewSet(mixins.RetrieveModelMixin,
                            mixins.ListModelMixin,
                            viewsets.GenericViewSet):
    queryset = FoodCategory.objects.all()
    serializer_class = FoodCategorySerializer

    def get_serializer_context(self):
        return {'request': self.request}


class AppView(TemplateView):
    template_name = 'food/app.html'