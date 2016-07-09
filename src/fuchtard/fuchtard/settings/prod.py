from .base import *

DEBUG = False

ALLOWED_HOSTS = [
    'maxisushi.kz',
    'www.maxisushi.kz',
    'mechanar.maxisushi.kz',
]

SPARKPOST_API_KEY = 'fc52712a253df3d28d69fdb10fd521271c36eb09'
FUCHTARD_ORDERS_EMAIL = 'order@maxisushi.kz'
FUCHTARD_NOREPLY_EMAIL = 'Maxi Sushi <noreply@maxisushi.kz>'

# TELEGRAM BOT
TELEGRAM_BOT_API_TOKEN = '248042210:AAF7O2ryYuhxIvqegx3U0pEPrPTUrgPmvFA'
TELEGRAM_BOT_NOTIFICATION_CHANNEL_ID = '-1001067984566'

# LOGGING
LOGGING = {
    'version': 1,
    'handlers': {
        'mail_admins': {
            'class': 'main.utils.CustomAdminEmailHandler',
            'level': 'ERROR',
            # 'filters': ['special']
        }
    },
    'loggers': {
        'django': {
            'handlers': ['mail_admins'],
            'level': 'ERROR',
            # 'propagate': True,
        },
    },
}