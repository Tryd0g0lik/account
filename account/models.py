from django.contrib import admin
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, AbstractUser, User, Group
from django.utils.translation import gettext_lazy as _
from django.core.validators import EmailValidator
from django.db import models
from django.core import validators
from django.contrib.auth.validators import  UnicodeUsernameValidator as UnicodeName

import uuid
from account.dacorators import decorators_min_length_validators
from .validators import no_special_chars_validators, min_length_validators

passw_min_quantity_len: int = 10  # This's min int length of password


# Create your models here.
# class AccaountUsersAdmin(models.Model):
#   pass

def update_min_length_validators(value: str):
		kwarg = { 'text': value, 'quantity': passw_min_quantity_len }
		response = decorators_min_length_validators( min_length_validators );
		return response

class AccountUser(User):
		class Meta:
				proxy=True
'''
щаблон регистрации
проверить блоки и прописать пути статистики
Подключить js для сохранения данных в bd
api содхранение данных в бд
'''
class UsersRegistrModel(User):
		'''
		TODO:
		:param password: do not has a '"%}][{ and more symbol \
		 which not has to the unicode.
		 
		'''
		
		class Meta:
				proxy=True
		