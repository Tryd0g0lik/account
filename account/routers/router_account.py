from django.urls import path, re_path

from account.contribute.vews.other_page import other_page, account_other_page
from account.contribute.vews.template_authorizator import \
        get_form_authorization
from account.contribute.vews.template_done import RegisterDoneView
from account.contribute.vews.template_registretor import get_registration
from account.views import ALoginView

urlpatterns = [
        path('', get_form_authorization, name='account'),
        re_path(r'^form/', get_form_authorization, name='account'),
        re_path(r'^login', ALoginView.as_view(), name="login"), #template_name='users/login.html'
        re_path(r'^registration/', get_registration, name='registration'),
        re_path(r'^registration/done/$', RegisterDoneView.as_view(),
                name='register_done'),
        path('<str:page>/', account_other_page, name='accountOther'),
        
]
