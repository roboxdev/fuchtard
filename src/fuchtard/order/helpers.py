import requests
from django.conf import settings
from django.core.mail import send_mail
from django.template.loader import render_to_string


def shifthash(n):
    n = int(n)
    return ((0x000FFF & n) << 12) + ((0xFFF000 & n) >> 12)


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
