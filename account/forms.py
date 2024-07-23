from django import forms
from .models import UsersRegistrModel
from django.utils.translation import gettext_lazy as _

class CustomRegistrationForm(forms.ModelForm):
  
  
  class Meta:
    model = UsersRegistrModel
    fields = ['username', 'email', 'password']  #
    
  def save(self, commit=True):
    user = UsersRegistrModel()
    user.email = self.cleaned_data['email']
    user.password1 = self.cleaned_data['password1']
    
    if commit:
      user.save()
    return user
