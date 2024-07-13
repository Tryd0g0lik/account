from django import forms
from django.contrib.auth.forms import AuthenticationForm


class CustomAuthenticationForm(AuthenticationForm):
  tenant_identifiar = forms.CharField(
	max_length=108,
	widget = forms.TextInput( attrs = { 'class': 'form-control', 'placeholder': 'Enter your tenant identifier' } )
  )