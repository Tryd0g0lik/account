from django import forms
from django.contrib.auth.forms import AuthenticationForm
from django.forms import ModelForm
from .models import UsersRegistrModel


class CustomAuthenticationForm(forms.ModelForm, AuthenticationForm):
  class Metta:
    model = UsersRegistrModel
    fields = ['username', 'password', 'repassword']
    

  
