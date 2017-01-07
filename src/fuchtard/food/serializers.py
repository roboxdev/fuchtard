from rest_framework import serializers
from .models import FoodCategory, FoodItem


class FoodItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodItem


class FoodCategorySerializer(serializers.ModelSerializer):
    food_itemsy = FoodItemSerializer(many=True, source='fooditem_set')

    class Meta:
        model = FoodCategory
