from django import forms
from .models import UsersRegistrModel
from django.utils.translation import gettext_lazy as _

class CustomRegistrationForm(forms.ModelForm):
  
  password2 = forms.CharField(
    label='password2',
    min_length=10,
    max_length=30,
    error_messages=({"message":_('Проверьте корректность пароля.')}),
    help_text='Повторите пароль.'
    )
  
  
  class Meta:
    model = UsersRegistrModel
    fields = ['username', 'email', 'password', 'password2']  #
    
  def save(self, commit=True):
    user = UsersRegistrModel()
    user.email = self.cleaned_data['email']
    user.password1 = self.cleaned_data['password1']
    
    if commit:
      user.save()
    return user
