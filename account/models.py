from django.contrib import admin
from django.contrib.auth.models import AbstractBaseUser, AbstractUser
from django.core.validators import EmailValidator
from django.db import models
from django.core import validators

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


class UsersRegistrModel( models.Model ):
		'''
		TODO:
		:param password: do not has a '"%}][{ and more symbol \
		 which not has to the unicode.
		 Min. = `passw_min_quantity_len`.
		 Max. = 30
	
		'''
		
		name_max_quantity: int = 30
		name_min_quantity = 3  # min quantity
		username = models.CharField(
				max_length = name_max_quantity,
				validators = [
						validators.MaxLengthValidator(
								limit_value = name_max_quantity,
								message = f"Проверьте количество символов. Длина логина не больше {name_max_quantity} символов."
						),
						validators.MinLengthValidator(
								limit_value = name_min_quantity,
								message = f"Проверьте количество символов. Минимальная длина \
         логина от {name_min_quantity} символов."
						),
						no_special_chars_validators,
						min_length_validators
				]
		)
		
		passw_max_quantity: int = 30
		password = models.CharField(
				max_length = passw_max_quantity,
				help_text = "Min - 10 символов. Max - 30 символов",
				validators = [
						validators.MaxLengthValidator(
								limit_value = passw_max_quantity,
								message = f"Проверьте количество символов. Длина логина \
         не больше {passw_max_quantity} символов."
						),
						validators.validate_unicode_slug,
						update_min_length_validators
				]
		)
		
		repassword = models.CharField(
				max_length = passw_max_quantity,
				validators = [
						validators.MaxLengthValidator(
								limit_value = passw_max_quantity,
								message = f"Проверьте количество символов или равен содержимому строке выше."
						),
						validators.validate_unicode_slug,
						update_min_length_validators
				]
		)
		
		email = models.EmailField(
				unique = True,
				help_text = "that_your@email.adress",
				validators = [
						EmailValidator(
								message = "Проверьте email-адрес."
						)
				]
		)
		
		datetime = models.DateTimeField( auto_now_add = True )
		
		def __str__(self):
				return f"There user {self.username} was added of: {self.datetime}"
		
		@admin.display
		def password_display(self):
				return "*****"