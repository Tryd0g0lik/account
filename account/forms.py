from django import forms
from django.contrib.auth.models import AbstractBaseUser, AbstractUser, User
from django.contrib.auth.forms import AuthenticationForm

from .models import UsersRegistrModel
from .contributer.forms import UsercreationForm


class CustomRegistrationForm( forms.ModelForm ):
  class Meta:
    
    model = UsersRegistrModel
    fields = ['username', 'password',  'email' ]
    
  def save(self, commit=True):
    user = UsersRegistrModel()
    user.email = self.cleaned_data['email']
    user.password1 = self.cleaned_data['password1']
    user.password2 = self.cleaned_data['password2']
    if commit:
      user.save()
    return user

  
