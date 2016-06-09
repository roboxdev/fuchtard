from django.conf.urls import url, include
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^contacts/$', TemplateView.as_view(template_name='main/contacts.html'), name='contacts-view'),
    url(r'^eula/$', TemplateView.as_view(template_name='main/eula.html'), name='eula-view'),
    url(r'^faq/$', TemplateView.as_view(template_name='main/faq.html'), name='faq-view'),
]
