from django import forms
from django.core.exceptions import ValidationError
from account.models import UsersRegistrModel


class UsercreationForm(forms.ModelForm):
		'''
		TODO: A form for creating new users (registration a new user)
		`https://docs.djangoproject.com/en/5.0/topics/auth/customizing/#a-full-example`
		'''
		
		password1 = forms.CharField(label = 'Password', widget=forms.PasswordInput)
		password2 = forms.CharField(label = 'Password configuration', widget = forms.PasswordInput)
		
		class Meta:
				model = UsersRegistrModel
				fields = ["email"]
				
		def clean_password2(self):
				'''
				TODO: Check that the two password entries match
				:return:
				'''
				
				password1 = self.cleaned_data.get('password1')
				password2 = self.cleaned_data.get('password2')
				
				if password1 and password2 and password1 != password2:
						raise ValidationError('Пароль не сходится')
				return password2[0:]
		
		def save(self, commit=True):
				'''
				TODO: Save the provided password  in hashed format
				:param commit:
				:return:
				'''
				
				user = super().save(commit = False)
				user.set_password(self.cleaned_data['password1'])
				if commit:
						user.save()
				return user
				