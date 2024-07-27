from django import forms
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.messages.views import SuccessMessageMixin
from django.shortcuts import get_object_or_404
from django.urls import reverse_lazy
from django.views.generic import UpdateView

from account.models import UsersRegistrModel


# Основных сведений пользователя
class ChangeUserInfoForm(forms.ModelForm):
  email = forms.EmailField(
    required=True,
    label="Адрес электронной почты"
  )

  class Meta:
    model = UsersRegistrModel
    fields = ('username', 'email', 'first_name', 'last_name', 'send_messages')


class ChangeInfoView(
  SuccessMessageMixin, LoginRequiredMixin,
  UpdateView):
  model = UsersRegistrModel
  template_name = 'users/change_user_info.html'
  form_class = ChangeUserInfoForm
  success_url = reverse_lazy('accounts:profile')
  success_message = 'Данные пользователя изменены'

  def setup(self, request, *args, **kwargs):
    self.user_id = request.user.pk
    return super().setup(request, *args, **kwargs)

  def get_object(self, queryset=None):
    if not queryset:
      queryset = self.get_queryset()
    return get_object_or_404(queryset, pk=self.user_id)
