from .base import *

DEBUG = True

ALLOWED_HOSTS = [
    '*',
]

SPARKPOST_API_KEY = 'fc52712a253df3d28d69fdb10fd521271c36eb09'
FUCHTARD_ORDERS_EMAIL = 'roboxv+fuchtardorder@gmail.com'
FUCHTARD_NOREPLY_EMAIL = 'Maxi Sushi <noreply@maxisushi.kz>'

# TELEGRAM BOT
TELEGRAM_BOT_API_TOKEN = '248042210:AAF7O2ryYuhxIvqegx3U0pEPrPTUrgPmvFA'
TELEGRAM_BOT_NOTIFICATION_CHANNEL_ID = '119702721'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'fuchtard',
        'USER': 'fuchtard',
        'PASSWORD': 'fuchtard',
        'HOST': 'localhost',
        'PORT': '',
    }
}