import re

from django.utils.log import AdminEmailHandler


# ugly workaround of sparkpost bans: masking urls
class CustomAdminEmailHandler(AdminEmailHandler):
    def send_mail(self, subject, message, *args, **kwargs):
        message = self.modify_message(message)
        super(CustomAdminEmailHandler, self).send_mail(subject, message, *args, connection=self.connection(), **kwargs)

    def modify_message(self, message):
        message = re.sub(r'(Request URL:.+//.+\.)(.+/)', r'\1 \2', message)
        return message
