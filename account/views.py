from django.contrib.auth import authenticate, login
from django.contrib.auth.views import LoginView
from django.shortcuts import render, redirect
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from rest_framework.viewsets import ModelViewSet

from .models import UsersRegistrModel
from .serializers import Users_serializers
from account.contributer.vews.template_authorizator import *
from account.contributer.vews.template_registretor import *


# That is API db- User ['GET/list', 'CREATE', 'PUT', 'DELETE']
class UsersAccountViews(ModelViewSet):
    queryset = UsersRegistrModel.objects.all()
    serializer_class = Users_serializers

    @action(detail=True, methods=['DELETE'])
    def remove(self):
        try:
            user = self.get_object()
            user.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except UsersAccountViews.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

# def form_authorisation_onPage(request):
#     '''
#     TODO: There page loading for user registration.
#     :param request:
#     :return:
#     '''
#     template_name_ = 'users/registration.html'
#     if request.method != 'GET':
#         return
#
#     authentication_form = CustomRegistrationForm()
#     BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
#     file_static_css = \
#         os.listdir(os.path.join(BASE_DIR, 'account\\static\\account\\css'))[-1]
#     file_static_js = \
#         os.listdir(os.path.join(BASE_DIR,
#                                 'account\\static\\account\\javascripts'))[-1]
#     context_ = {
#         'form': authentication_form,
#         'title': 'The User Account registration',
#         'account_styles': file_static_css,
#         'account_js': file_static_js
#     }
#     return render(request, template_name=template_name_, context=context_)

# def register(request):
#     if request.method == 'POST':
#         form = UsersAccountViews(request.POST)
#         if form.is_valid():
#             form.save()
#             username = form.cleaned_data.get('username')
#             password = form.cleaned_data.get('password')
#             user = authenticate(username=username,
#                                 password=password)
#             login(request, user)
#             return redirect('home')
#         else:
#             form = UsersAccountViews()
#             template_name_ = 'users/registration.html'
#         return render(request,
#                       template_name_,
#                       {'form', form})


# Create your views here.
# class CustomAuthenticationView(LoginView):
#   template_name = 'users/authorization.html'
#   authentication_form = CustomRegistrationForm
#   def from_valid(self, form):
#     # Add your authentication logic
#     return super().form_valid(form)



