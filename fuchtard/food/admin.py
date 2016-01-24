from django.contrib import admin
from .models import FoodTag, FoodCategory, FoodItem, Discount


@admin.register(FoodTag)
class FoodTagAdmin(admin.ModelAdmin):
    pass


@admin.register(FoodCategory)
class FoodCategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(FoodItem)
class FoodItemAdmin(admin.ModelAdmin):
    pass


@admin.register(Discount)
class DiscountAdmin(admin.ModelAdmin):
    list_display = [
        'amount',
        'content_type',
        'object_id',
    ]
