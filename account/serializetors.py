from rest_framework import serializers
from rest_framework.renderers import JSONRenderer

from account.models import UsersRegistrModel


class Users_serializers(serializers.ModelSerializer):
		
		class Meta:
				model = UsersRegistrModel
				fields = '__all__'
				depth = 1
