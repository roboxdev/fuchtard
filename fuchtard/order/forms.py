from django import forms
from food.models import FoodItem
from order.models import Order, CartItem


class GiftForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        cart_object_total_price = kwargs.pop('cart_object_total_price')
        super(GiftForm, self).__init__(*args, **kwargs)
        qs = FoodItem.objects.filter(gift__requirement__lte=cart_object_total_price).order_by('gift__requirement')
        self.fields['gift_food_item'].queryset = qs
        self.fields['gift_food_item'].empty_label = None
        self.fields['gift_food_item'].initial = qs.last()

    class Meta:
        model = Order
        fields = [
            'email',
            'user',
            'phone',
            'address',
            'cart',
            'deliver_at',
            'comment',
            'gift_food_item',
        ]
        widgets = {
            'gift_food_item': forms.RadioSelect,
        }
