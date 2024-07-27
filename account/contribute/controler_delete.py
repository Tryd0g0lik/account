from django.contrib.auth import logout
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib import messages
from django.shortcuts import get_object_or_404
from django.urls import reverse_lazy
from django.views.generic.edit import DeleteView

from account.models import UsersRegistrModel


class DeleteUserView(LoginRequiredMixin,
                     DeleteView):
  model = UsersRegistrModel
  template_name = 'users/delete_user.html'
  success_url = reverse_lazy("index")

  def setup(self, request, *args, **kwargs):
    self.user_id = request.user.pk
    return super().setup(request, *args, **kwargs)

  def post(self, request, *args, **kwargs):
    logout(request)
    messages.add_message(request, messages.SUCCESS, 'Пользователь удалён')
    return super().post(request, *args, **kwargs)

  def get_object(self, queryset=None):
    if not queryset:
      queryset = self.get_queryset()
    return get_object_or_404(queryset, pk=self.user_id)
  