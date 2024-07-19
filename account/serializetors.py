from rest_framework import serializers, status
from account.models import UsersRegistrModel


class Users_serializers(serializers.ModelSerializer):
		
		class Meta:
				model = UsersRegistrModel
				fields = '__all__'
				depth = 1
