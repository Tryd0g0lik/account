from django.contrib.auth import authenticate, login
from django.contrib.auth.views import LoginView, redirect_to_login
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login
from django.http import HttpResponse
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from  rest_framework import status
from django.shortcuts import render, redirect
from rest_framework.viewsets import ModelViewSet

import os
import json
from .admin import account_users_site

from .forms import CustomAuthorisationForm, CastomAuthenticationForm
from .interfaces import CustomAuthBackend as CAB
from .models import UsersRegistrModel
from .serializetors import Users_serializers

def form_authorisation_onPage(request):
    '''
    TODO: There page loading for user registration.
    :param request:
    :return:
    '''
    template_name_ = 'users/registration.html'
    if request.method != 'GET':
        return
    authentication_form = CustomAuthorisationForm()
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    file_static_css = os.listdir(os.path.join(BASE_DIR, 'account\\static\\account\\css'))[-1]
    file_static_js = os.listdir(os.path.join(BASE_DIR, 'account\\static\\account\\javascripts'))[-1]
    context_ = {
        'form': authentication_form,
        'title': 'The User Account registration',
        'account_styles': file_static_css,
        'account_js': file_static_js
    }
		
		
    # json_ = JSONRenderer().render( context_ )
    # return Response( data = json_, status = status.HTTP_200_OK )
    return render(request, template_name = template_name_, context=context_)


# User authentication
def rubrics(reguest):
		if reguest.useer.has_perms(('account.change_rubric',
																'account.delete_rubric')):
				# There is all good
				print('HERE IS ALL GOOD')
				pass
		else:
				return redirect('login')

def user_get_checking_andRegistration(request, *args, **kwargs):
		'''
		TODO: There will be checking user into the db by id.
			If it not founded was, returns a status=400, and text "User not founded".
			Or has relocation to the '/profile/< id >/' pathname page.
		:param request:
		:param args:
		:param kwargs: {id: < int:number >}
		:return: redirect to the page form authorisation.
		'''
		cab = CAB()
		
		response = cab.authenticate(request=request, kwargs=kwargs)
		user_obj_list = response if type(response) != bool else []
		if len(user_obj_list) <= 0:
				return HttpResponse(content = "User not founded", status=400)
		
    # return render(request, account_users_site)
		# return  redirect_to_login('profile/<int:id>/', )
    # return  HttpResponse(headers = object_dict, status = 200)
		forms = CastomAuthenticationForm()
		BASE_DIR = os.path.dirname( os.path.dirname( os.path.abspath( __file__ ) ) )
		file_static_css = os.listdir( os.path.join( BASE_DIR, 'account\\static\\account\\css' ) )[-1]
		file_static_js = os.listdir( os.path.join( BASE_DIR, 'account\\static\\account\\javascripts' ) )[-1]
		# "email":user_obj_list[0].email,
		# "username":user_obj_list[0].username,
		context = {
				'title': 'The User Account registration',
				'account_styles': file_static_css,
				'account_js': file_static_js,
				"form":forms
		}
		return render(request, template_name = 'users/registration.html', context = context)

# @login_required
def user_get_uthorization(request, *ergs, **kwargs):
		if (request.method != 'GET'):
				return
		# data_ofBody_json = json.loads(request.body)
		if( dict(request.GET).get('email') == None ) \
				or (dict(request.GET).get['password'] == None):
				return HttpResponse(content = "There 'emai' or 'password not founded was",
														status=400)
				
		user_list = UsersRegistrModel.objects.filter(email=request.GET['email'])
		if len(user_list) <= 0:
				return  HttpResponse(content = "User not founded", status=400)
		# if data_ofBody_json['repassword'] == user_list[0].password:
		if request.GET['password'] == user_list[0].password:
				BASE_DIR = os.path.dirname( os.path.dirname( os.path.abspath( __file__ ) ) )
				file_static_css = os.listdir( os.path.join( BASE_DIR, 'account\\static\\account\\css' ) )[-1]
				file_static_js = os.listdir( os.path.join( BASE_DIR, 'account\\static\\account\\javascripts' ) )[-1]
				# context = {"id":user_list[0].id}
				context_ = {
						'title': 'The User Good',
						'account_styles': file_static_css,
						'account_js': file_static_js,
						"id": user_list[0].id
				}
				request.GET = dict( request.GET ).clear()
				# return render( request=request,
				# 							 template_name = 'users/accounts.html',
				# 							 context = context_ )
				''''
				
Ошибка
делаю fetch запросы на адресс "profile/page/" . отправляю данные и на выходе
жду render  на этот же путь  "profile/page/" но уже без параметров.

Заменить render на JSONResponse чтоб отправить результат проверки
 Получение результата проверки вызвать принудительную релокацию в админку (уточнить путь .)
	Уже  релокация вызывает rende
	return render(request=request, template_name = 'users/accounts.html', context = context)

JsonResponse
	return HttpResponse(content = )
				'''
				
				
			# не хватает return
				# return render(request=request, template_name = 'users/accounts.html', context = context)
		return HttpResponse(content = "User not founded", status = 400 )
		
		
class CustomAuthenticationView(LoginView):
		'''
		TODO: Страница с формой
		'''
		template_name = 'users/authorization.html'
		authentication_form = CustomAuthorisationForm
		def from_valid(self, form):
		# Add your authentication logic
			return super().form_valid(form)


class UsersAutorizationViews(ModelViewSet):
		queryset = UsersRegistrModel.objects.all()
		serializer_class = Users_serializers
    
    
