# from django.urls import path, re_path

from django.urls import path, re_path

from account.contribute.vews_new_users.controler_activate import user_activate
from account.contribute.vews_new_users.controler_registrations import \
  RegisterDoneView, RegisterUserView

urlpatterns = [
        path('activate/<str:sign>/', user_activate,
             name='register_activate'),
        path('', RegisterUserView.as_view(), name='register'),
        re_path(r'^done/', RegisterDoneView.as_view(),
                name='register_done'),
]