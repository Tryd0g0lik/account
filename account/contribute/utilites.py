from django.core.signing import Signer
from django.template.loader import render_to_string

import datetime
import os
from project.settings import ALLOWED_HOSTS

APP_SERVER_HOST = str(os.getenv('APP_SERVER_HOST'))
APP_SERVER_PORT = str(os.getenv('APP_SERVER_PORT'))

# цифровая подпись
signer = Signer()


def send_activation_notification(user):
  if ALLOWED_HOSTS:
    host = 'http://' + f'{ALLOWED_HOSTS[0]}:{APP_SERVER_PORT}'
  else:
    host = f'{APP_SERVER_HOST}:{APP_SERVER_PORT}'

  context_ = {"user": user, "host": host,
              "sign": signer.sign(user.username)}
  # request_ = {"path":r'^register/activate/<str:sign>/'}
  subject = render_to_string(template_name='email/activation_letter_subject.txt',
    context=context_)

  body_text = render_to_string('email/activation_letter_body.txt',
    context=context_)

  user.email_user(subject, body_text)
  
