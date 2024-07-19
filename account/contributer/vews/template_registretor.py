from django.shortcuts import render
import os
from account.forms import CustomAuthenticationForm
def get_registration(request):
    '''
    TODO: There page loading for user registration.
    :param request:
    :return:
    '''
    template_name_ = 'users/authorization.html'
    if request.method != 'GET':
        return
    authentication_form = CustomAuthenticationForm()
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    last_part = BASE_DIR.split(os.sep)[-2]
    print(f'[LAST_PART]:  {last_part}')
    file_static_css = os.listdir(os.path.join(last_part, '..\\..\\static\\account\\css'))[-1]
    file_static_js = os.listdir(os.path.join(last_part, '\\account\\static\\account\\javascripts'))[-1]
    context_ = {
        'form': authentication_form,
        'title': 'The User Account registration',
        'account_styles': file_static_css,
        'account_js': file_static_js
    }
    return render(request, template_name = template_name_, context=context_)
