from rest_framework import serializers
from .models import FoodCategory, FoodItem


class FoodItemSerializer(serializers.ModelSerializer):
    price = serializers.SerializerMethodField()

    class Meta:
        model = FoodItem
        fields = (
            'id',
            'visible',
            'enabled',
            'position',
            'title',
            'photo',
            'description',
            'raw_price',
            'category',
            'tags',
            'price',
        )

    def get_price(self, obj):
        return obj.price


class FoodCategorySerializer(serializers.ModelSerializer):
    food = FoodItemSerializer(many=True, source='fooditem_set')

    class Meta:
        model = FoodCategory
