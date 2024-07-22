from rest_framework.routers import DefaultRouter

from account.views import UsersAccountViews

router = DefaultRouter()


router.register('^account', UsersAccountViews, basename= 'register' )
