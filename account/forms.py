from django import forms
from django.contrib.auth.forms import AuthenticationForm
from .models import UsersRegistrModel


class CustomAuthenticationForm(forms.ModelForm):
  class Meta:
    model = UsersRegistrModel
    fields = ['username', 'password', 'repassword', 'email' ]
    

  
