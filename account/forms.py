from django import forms
from django.contrib.auth.forms import AuthenticationForm
from .models import UsersRegistrModel


class CustomAuthorisationForm( forms.ModelForm ):
  class Meta:
    model = UsersRegistrModel
    fields = ['username', 'password', 'repassword', 'email' ]
    
  def save(self, commit=True):
    user = super( CustomAuthorisationForm, self ).save( commit=False )
    user.email = self.cleaned_data['email']
    if commit:
      user.save()
    return user
  

  
class CastomAuthenticationForm(forms.Form):
  email = forms.CharField(label = 'Your email', max_length = 50)
  password = forms.CharField(
    empty_value = "Your password",
    min_length = 10,
    max_length = 30
  )
  
