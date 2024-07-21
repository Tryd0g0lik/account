from rest_framework import serializers, status
from rest_framework.serializers import raise_errors_on_nested_writes
from rest_framework.utils import model_meta

import traceback
from account.models import UsersRegistrModel
from django.utils.translation import gettext_lazy as _
from datetime import datetime, timezone


class Users_serializers(serializers.ModelSerializer):
		date_joined = serializers.DateTimeField(format="%Y-%m-%dT%H:%M:%S.855512", required=False )
		username = serializers.CharField(
				min_length = 3,
				max_length = 30,
				help_text = _(f"Длина логина не меньше 3 и не больше 30 символов.")
		)
		
		class Meta:
				pass
				model = UsersRegistrModel
				fields = ['email', 'username', 'password', 'date_joined']# '__all__'
				extra_kwargs = { 'password': { 'write_only': True } }
				
		def validate_username(self, value):
				username_list = UsersRegistrModel.objects.filter( username__startswith = value )
				if len( list( username_list ) ) > 0:
						raise ValueError( _( f'Пользователь с таким именем {value} уже существует в базе данных!' ) )
				return value
		def validated_email(self, value):
				email_list = UsersRegistrModel.objects.filter( username__startswith = value )
				if len( list( email_list ) ) > 0:
						raise ValueError( _( f'Пользователь с таким email: {value} уже существует в базе данных!' ) )
				return value
				
		def validate_date_joined(self, value):
				if not value:
						import datetime
						value = datetime.datetime.now()
				return value
		
		def create(self, validated_data):
				validated_data['date_joined'] = datetime.now()
				return super().create( validated_data )
		#
