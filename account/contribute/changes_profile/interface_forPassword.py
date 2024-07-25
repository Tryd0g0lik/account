from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.views import PasswordChangeView
from django.contrib.messages.views import SuccessMessageMixin
from django.urls import reverse_lazy


# Меняем пароль

class APasswordChangeView(SuccessMessageMixin,
                          LoginRequiredMixin,
                          PasswordChangeView):
  template_name = 'users/password_change.html'
  success_url = reverse_lazy('accounts:profile')
  success_message = 'Пароль пользователя изменен'