from django.urls import path, re_path

from account.contributer.vews.template_authorizator import get_form_authorization
from account.contributer.vews.template_registretor import get_registration


urlpatterns = [
		path('', get_form_authorization, name='account'),
		re_path(r'^form/', get_form_authorization, name='account'),
		re_path(r'^registration/', get_registration, 	name= 'registration' ), # account_users_site.urls),

  	# re_path(r'^form/', LoginView.as_view(
		# 	template_name='users/authorization.html',
		# 	authentication_form=CustomAuthenticationForm
		# 	), name= 'authorization' ), # account_users_site.urls),
  # re_path(r'^authorization/', get_authorization, name= 'login'), # account_users_site.urls), # user_get_uthorization LoginView.as_view()
]