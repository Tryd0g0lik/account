from django.apps import AppConfig
from django.dispatch import Signal
from account.contribute.utilites import send_activation_notification

class UsersConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'account'
    verbose_name="Профиль пользователя"

# отправка писем при регистрации
user_registered = Signal(use_caching=False)
def user_registered_dispatcher(sender, **kwargs):

    send_activation_notification(kwargs['instance'])

user_registered.connect(weak=False,
                        receiver=user_registered_dispatcher)
