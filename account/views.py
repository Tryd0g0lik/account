from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from  rest_framework import status
from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

import os
from .forms import CustomAuthenticationForm
from .models import UsersRegistrModel
from .serializetors import Users_serializers

def form_authorisation_onPage(request):
    template_name_ = 'users/registration.html'
    authentication_form = CustomAuthenticationForm()
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    file_static_css = os.listdir(os.path.join(BASE_DIR, 'account\\static\\account\\css'))[-1]
    context_ = {
        'form': authentication_form,
        'title': 'The User Account registration',
        'account_styles': file_static_css
    }
    # json_ = JSONRenderer().render( context_ )
    # return Response( data = json_, status = status.HTTP_200_OK )
    return render(request, template_name = template_name_, context=context_)
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
    
    
        