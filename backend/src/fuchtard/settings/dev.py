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

DATABASES['default']['host'] = 'localhost'

FUCHTARD_ORDERS_EMAIL = 'roboxv+fuchtardorder@gmail.com'

# TELEGRAM BOT
TELEGRAM_BOT_NOTIFICATION_CHANNEL_ID = '119702721'

CORS_ORIGIN_ALLOW_ALL = True
