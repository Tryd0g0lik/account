from django.contrib import admin
from django.contrib.admin import AdminSite
from .models import AccountUsersModel
# Register your models here.


class AccountUsersSiteAdmin(AdminSite):
  login_template = 'users/authorization.html'
  site_header = 'User Account'
  site_title = 'User Account Portal'
  index_title = 'Welcom to the User Account Portal'
  
  
account_users_site = AccountUsersSiteAdmin(name = 'account_user')
account_users_site.register(AccountUsersModel)

