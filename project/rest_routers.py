from rest_framework.routers import DefaultRouter

from account.views import UsersAccaountViews

router = DefaultRouter()


router.register('^account', UsersAccaountViews, basename= 'register' )
