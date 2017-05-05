import requests
from django.conf import settings
from django.core.mail import send_mail
from django.template.loader import render_to_string
from food.serializers import FoodItemMetaSerializer, FoodItem


def shifthash(n):
    n = int(n)
    return int(((0x000FFF & n) << 12) + ((0xFFF000 & n) >> 12))


def send_templated_email(params):
    template = params.get('template')
    msg_plain = render_to_string('{}.txt'.format(template), params.get('template_params'))
    msg_html = render_to_string('{}.html'.format(template), params.get('template_params'))
    send_mail(
        subject=params.get('subject'),
        message=msg_plain,
        from_email=params.get('from_email'),
        recipient_list=params.get('recipient_list'),
        html_message=msg_html,
    )


def telegram_api(method, **params):
    url = 'https://api.telegram.org/bot{}/{}'.format(settings.TELEGRAM_BOT_API_TOKEN, method)
    return requests.get(url, params=params).json()


def telegram_notify_channel(text):
    telegram_api('sendMessage', chat_id=settings.TELEGRAM_BOT_NOTIFICATION_CHANNEL_ID, text=text)


class CartMeta(object):
    def __init__(self, cart_items, cart_item_ids=(), subtotal=0):
        super(CartMeta, self).__init__()
        self.cart_items = cart_items
        self.cart_item_ids = cart_item_ids or cart_items.items()
        self.subtotal = subtotal or sum(map(lambda x: x.price, cart_items))

    @classmethod
    def from_cart_data(cls, cart_data):
        cart_items = {}
        cart_item_ids = []
        subtotal = 0
        for food_item_id, quantity in cart_data:
            try:
                food_item = FoodItem.objects.get(id=int(food_item_id))
            except FoodItem.DoesNotExist:
                continue
            food_item_serialized = FoodItemMetaSerializer(food_item).data
            food_item_serialized['quantity'] = quantity
            cart_items[food_item.id] = food_item_serialized
            cart_item_ids.append(food_item.id)
            subtotal += quantity * food_item.price
        return cls(cart_items, cart_item_ids, subtotal)

    @property
    def as_dict(self):
        return {
            'cart_items': self.cart_items,
            'cart_item_ids': self.cart_item_ids,
            'subtotal': self.subtotal,
        }
