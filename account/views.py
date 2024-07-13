from django.shortcuts import render, redirect
from django.contrib.auth.views import LoginView
from .forms import CustomAuthenticationForm

# Create your views here.
class CustomAuthenticationView(LoginView):
  template_name = 'users/authorization.html'
  authentication_form = CustomAuthenticationForm
  def from_valid(self, form):
	# Add your authentication logic
	return super().form_valid(form)

	
