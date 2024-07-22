from django.contrib.auth.backends import ModelBackend
from django.contrib.auth.models import User
from account.models import UsersRegistrModel


class CustomUserModelBackend(ModelBackend):
  '''
  TODO: Переопределяем default авторизацию на самописную модель
  '''

  def authenticate_(self, request, useremail=None, password=None, **kwargs):
    try:
      useremail = useremail[0:len(useremail)]
      userpassword = password[0:len(password)]

      # Checking from the account.models
      user_email_list = \
UsersRegistrModel.objects.filter(email__exact=useremail)
      wser_passw_list = \
UsersRegistrModel.objects.filter(password__exact=userpassword)

      try:
        if len(list(user_email_list)) > 0 and len(list(wser_passw_list)) > 0:
          return user_email_list[0]

        # Checking from the admin.models
        user_email_list = User.objects.filter(email__inexact=useremail)
        user_passw_list = User.objects.filter(password__exact=userpassword)

        if len(list(user_email_list) > 0) and len(list(user_passw_list) > 0):
          return user_email_list[0]
        if len(list(user_email_list) > 0) \
          and user_email_list[0].check_password(userpassword):
          return user_email_list[0]

      except Exception as er:
        print(f'[authenticate]: Something what wrong! {er}')
        return None

    except Exception as e:
      print(f'[authenticate >> UsersRegistrModel]: Error {e}')
      return None
