from django.contrib.auth import authenticate, login
from django.contrib.auth.views import LoginView, redirect_to_login
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
from .forms import CustomAuthenticationForm
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
    authentication_form = CustomAuthenticationForm()
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
def user_authirization(request, *args, **kwargs):
		# object_list = UsersRegistrModel.objects.filter(pk=kwargs['id'])
		cab = CAB()
		response = cab.authenticate(request=request, kwargs=kwargs)
		user_obj_list = response if type(response) != bool else []
		if len(user_obj_list) <= 0:
				return HttpResponse(content = "User not founded", status=400)
		
		# render(request, template_name = template_name_, context=context_)
		# login(user_obj_list[0])
    # return render(request, account_users_site)
		# return  redirect_to_login('profile/<int:id>/', )
    # return  HttpResponse(headers = object_dict, status = 200)

		context = {
				"email":user_obj_list[0].email,
				"username":user_obj_list[0].username
		}
		return render(request, template_name = 'users/registration.html', context = context)
class CustomAuthenticationView(LoginView):
  template_name = 'users/authorization.html'
  authentication_form = CustomAuthenticationForm
  def from_valid(self, form):
    # Add your authentication logic
    return super().form_valid(form)

class UsersAutorizationViews(ModelViewSet):
    queryset = UsersRegistrModel.objects.all()
    serializer_class = Users_serializers
    
    
