from django.contrib import admin
from django.contrib.contenttypes.admin import GenericStackedInline
from adminsortable.admin import SortableAdmin, SortableTabularInline

from .models import FoodTag, FoodCategory, FoodItem, Discount


class FoodItemInline(SortableTabularInline):
    model = FoodItem
    extra = 1
    fields = ['title', ]
    readonly_fields = ['title', ]
    can_delete = False


class FoodItemM2MInline(admin.StackedInline):
    model = FoodItem.tags.through
    extra = 1


class DiscountInline(GenericStackedInline):
    model = Discount
    extra = 1


@admin.register(FoodTag)
class FoodTagAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title', ), }
    inlines = [DiscountInline, FoodItemM2MInline]


@admin.register(FoodCategory)
class FoodCategoryAdmin(SortableAdmin):
    prepopulated_fields = {'slug': ('title', ), }
    list_display = ['title', ]
    inlines = [DiscountInline, FoodItemInline]


@admin.register(FoodItem)
class FoodItemAdmin(admin.ModelAdmin):
    list_display = ['title', 'raw_price']
    inlines = [DiscountInline]
    filter_horizontal = ['tags']


@admin.register(Discount)
class DiscountAdmin(admin.ModelAdmin):
    list_display = [
        'amount',
        'content_type',
        'object_id',
    ]
