from django.shortcuts import render, redirect
from django.contrib.auth.views import LoginView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.viewsets import ModelViewSet

from .forms import CustomAuthenticationForm
from .models import UsersRegistrModel
from .serializetors import Users_serializers


# Create your views here.
# class CustomAuthenticationView(LoginView):
#   template_name = 'users/authorization.html'
#   authentication_form = CustomAuthenticationForm
#   def from_valid(self, form):
#     # Add your authentication logic
#     return super().form_valid(form)

class UsersAutorizationViews(ModelViewSet):
    queryset = UsersRegistrModel.objects.all()
    serializer_class = Users_serializers
    def create(self, request, *args, **kwargs):
      serializer = Users_serializers(data = request.data)
      
      if serializer.is_valid():
        return Response(serializer.data, status = status.HTTP_201_CREATED)
      return Response( serializer.errors, status = status.HTTP_400_BAD_REQUEST)

    def list(self, request):
        queryset = UsersRegistrModel.objects.all()
        serializer = Users_serializers(queryset, many = True)
        return Response(serializer.data, status = status.HTTP_200_OK)
        # if serializer.is_valid():
        #     return Response( serializer.data, status = status.HTTP_201_CREATED )
        # return Response( serializer.errors, status = status.HTTP_400_BAD_REQUEST )