from django.urls import path, re_path
from account.contributer.vews.template_authorizator import \
        get_form_authorization
from account.contributer.vews.template_registretor import get_registration

urlpatterns = [
        path('', get_form_authorization, name='account'),
        re_path(r'^form/', get_form_authorization, name='account'),
        re_path(r'^registration/', get_registration, name='registration')
]
