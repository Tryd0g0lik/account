from django.contrib.auth.models import User
from account.dacorators import decorators_min_length_validators
from .validators import min_length_validators

# This's min int length of password
passw_min_quantity_len: int = 10

def update_min_length_validators(value: str):
  response = decorators_min_length_validators(min_length_validators)
  return response


class AccountUser(User):
  class Meta:
    proxy=True


class UsersRegistrModel(User):
  '''
  :param password: do not has a '"%}][{ and more symbol \
   which not has to the unicode.
  '''
  
  class Meta:
    proxy = True
