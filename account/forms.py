from django import forms
from django.contrib.auth.forms import AuthenticationForm
from .models import UsersRegistrModel


class CustomAuthenticationForm(forms.ModelForm):
  class Meta:
    model = UsersRegistrModel
    fields = ['username', 'password', 'repassword', 'email' ]
    
  def save(self, commit=True):
    user = super(CustomAuthenticationForm, self).save(commit=False)
    user.email = self.cleaned_data['email']
    if commit:
      user.save()
    return user

  
