from .base import *

DEBUG = True

DEBUG_TOOLBAR_CONFIG = {
    # 'SHOW_TOOLBAR_CALLBACK': lambda r: False,
    'SHOW_COLLAPSED': True,
    'DISABLE_PANELS': {
        'debug_toolbar.panels.sql.SQLPanel',
        'debug_toolbar.panels.staticfiles.StaticFilesPanel',
        'debug_toolbar.panels.templates.TemplatesPanel',
        'debug_toolbar.panels.cache.CachePanel',
        'debug_toolbar.panels.signals.SignalsPanel',
        'debug_toolbar.panels.logging.LoggingPanel',
        'debug_toolbar.panels.redirects.RedirectsPanel',
    }
}


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