from django.views.generic.base import TemplateView
from django.views.generic.edit import CreateView
from django.urls import reverse_lazy
from account.contribute.vews_new_users.form_registrations import \
  RegisterUserForm
from account.models import UsersRegistrModel


class RegisterUserView(CreateView):
  model = UsersRegistrModel
  template_name = 'users/register_user.html'
  form_class = RegisterUserForm
  success_url = reverse_lazy('accounts:register:register_done')


class RegisterDoneView(TemplateView):
  template_name = 'users/register_done.html'
