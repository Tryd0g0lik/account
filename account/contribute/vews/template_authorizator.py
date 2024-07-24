import os
from django.shortcuts import render
from account.forms import CustomRegistrationForm, CustomAutorisationsForm


def get_form_authorization(request, *args, **kwargs):
    '''
    TODO: There will be checking user into the db by id.
     If it not founded was, returns a status=400, and text "User not founded".
     Or has relocation to the '/profile/< id >/' pathname page.
    :param request:
    :param args:
    :param kwargs: {id: < int:number >}
    :return: redirect to the page form authorisation.
    '''
    forms = CustomAutorisationsForm() # account.forms к странице не подключен СТАТИК
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    last_part = BASE_DIR.split(os.sep)
    first_part: str = last_part[0] + '/'
    first_part += '/'.join(last_part[1:-1])

    file_static_css = \
os.listdir(os.path.join(first_part + '/static/account/css'))[-1]
    file_static_js = \
os.listdir(os.path.join(first_part + \
'/static/account/javascripts'))[-1]

    context = {
        'title': 'The User Account registration',
        'account_styles': file_static_css,
        'account_js': file_static_js,
        "form": forms
    }
    
    return render(request,
                   template_name='users/authorization.html',
                   context=context)
