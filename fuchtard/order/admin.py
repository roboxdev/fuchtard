from django.contrib import admin
from .models import Order, Gift



@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    readonly_fields = ['cart']



@admin.register(Gift)
class GiftAdmin(admin.ModelAdmin):
    list_display = ['food_item', 'requirement']
