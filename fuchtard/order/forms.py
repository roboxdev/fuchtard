from django import forms
from food.models import FoodItem
from order.models import Order


class GiftForm(forms.ModelForm):
    gift_food_item = forms.ModelChoiceField(FoodItem.objects.none(), widget=forms.RadioSelect, empty_label=None)

    def __init__(self, *args, **kwargs):
        qs = kwargs.pop('cart_object_total_price')
        super(GiftForm, self).__init__(*args, **kwargs)
        qs = FoodItem.objects.filter(gift__requirement__lte=qs).order_by('gift__requirement')
        self.fields['gift_food_item'].queryset = qs

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
