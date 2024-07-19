from django.contrib.auth.backends import BaseBackend, ModelBackend
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from django.shortcuts import redirect, render
from django.contrib.auth import authenticate, login
from account.models import UsersRegistrModel


# class CustomAuthBackend(BaseBackend):
from django.shortcuts import redirect, render
from django.contrib.auth import authenticate, login
# from .models import UsersRegistrModel


# class CustomAuthBackend(BaseBackend):
class CustomUserModelBackend( ModelBackend ):
		'''
		TODO: Переопределяем default авторизацию на самописную модель
		'''

		# def authenticate_(self, request, *args, **kwargs) -> [list, bool]:
		def authenticate_(self, request, useremail = None, password = None, **kwargs):
				try:
						useremail = useremail[0 : len(useremail)] # request.POST['email']
						userpassword = password[0 : len(password)] # request.POST['password']
						
						# Checking from the account.models
						user_email_list = UsersRegistrModel.objects.filter( email__exact= useremail)
						wser_passw_list = UsersRegistrModel.objects.filter( password__exact= userpassword )
						# get_user_model(User)
						
						try:
								if len( list( user_email_list ) ) > 0 and len( list( wser_passw_list ) ) > 0:
										return user_email_list[0]
								
								# Checking from the admin.models
								user_email_list = User.objects.filter( email__inexact = useremail )
								user_passw_list = User.objects.filter( password__exact = userpassword )
								# user_name = user_email_list[0]['username']
								# user_passw_list = UserModel.objects.filter(password__exact = userpassword)
								#
								if len(list(user_email_list) > 0) and len(list(user_passw_list) > 0):
										return user_email_list[0]
								#
								# user = UserModel.objects.get( username = username)
								
								if len(list(user_email_list) > 0) \
									and user_email_list[0].check_password( userpassword ):
									return user_email_list[0]

						except Exception as er:
								print(f'[authenticate]: Something what wrong! {er}')
								return None
		
				except Exception as e:
					print( f'[authenticate >> UsersRegistrModel]: Error {e}' )
					return None

