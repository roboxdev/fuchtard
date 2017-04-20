from rest_framework import serializers
from .models import FoodCategory, FoodItem


class FoodItemSerializer(serializers.HyperlinkedModelSerializer):
    price = serializers.SerializerMethodField()

    class Meta:
        model = FoodItem
        fields = (
            'id',
            'url',
            'slug',
            'visible',
            'enabled',
            'position',
            'title',
            'photo',
            'description',
            'raw_price',
            'category',
            # 'tags',
            'price',
            'amount',
        )

    def get_price(self, obj):
        return obj.price


class FoodCategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FoodCategory
        fields = (
            'id',
            'url',
            'slug',
            'visible',
            'enabled',
            'position',
            'expanded',
            'title',
        )
