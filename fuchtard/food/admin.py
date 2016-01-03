from django.contrib import admin
from .models import FoodTag, FoodCategory, FoodItem


@admin.register(FoodTag)
class FoodTagAdmin(admin.ModelAdmin):
    pass


@admin.register(FoodCategory)
class FoodCategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(FoodItem)
class FoodItemAdmin(admin.ModelAdmin):
    pass
