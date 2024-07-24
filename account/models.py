from django.contrib.auth.models import User, AbstractUser
from django.db import models

from account.dacorators import decorators_min_length_validators
from .validators import min_length_validators

# This's min int length of password
passw_min_quantity_len: int = 10

def update_min_length_validators(value: str):
  response = decorators_min_length_validators(min_length_validators)
  return response

# class AdvUser(AbstractUser):
#   is_activeted = models.BooleanField(default=True,
#                                      verbose_name='Прошел активацию')
#   send_messages = models.BooleanField(default=True,
#                                       verbose_name='Слать оповещение')
#   class Meta(AbstractUser.Meta):
#     indexes = [
#       models.Index(fields=["is_activated"], name="activated_indx")
#     ]


# class AccountUser(User):
#
#   class Meta:
#     pass


class UsersRegistrModel(AbstractUser):
  '''
  :param password: do not has a '"%}][{ and more symbol \
   which not has to the unicode.
  '''
  is_activated = models.BooleanField(
    default=True,
    verbose_name='Прошел активацию'
    )
  send_messages = models.BooleanField(
    default=True,
    verbose_name='Слать оповещение'
    )

  class Meta(AbstractUser.Meta):
    indexes = [
      models.Index(fields=["is_activated"], name="activated_indx")
    ]
  

