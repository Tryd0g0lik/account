from django.core.signing import BadSignature
from django.shortcuts import render, get_object_or_404

from account.contribute.utilites import signer
from account.models import UsersRegistrModel


# страницы активации пользователей
def user_activate(request, sign):
  try:
    username_ = signer.unsign(sign)
  except BadSignature:
    return render(request, 'users/bad_signature.html')
  user = get_object_or_404(UsersRegistrModel, username=username_)
  if user.is_activated:
    template = 'users/user_is_activated.html'
  else:
    template = 'users/activation_done.html'
    user.is_active = True
    user.is_activated = True
    user.save()
  return render(request, template)
