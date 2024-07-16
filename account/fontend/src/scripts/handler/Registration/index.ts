import getCookie from '@cookies';

import { APP_SERVER_HOST, APP_SERVER_PORT, APP_ACCOUNTS_PATHNAME, APP_INFO_FORM_REGIST_USER } from '../../env';
import targetValidater from '@Validaors/index.ts';
import { Context } from '@interfaces';
// const dotenv = require('dotenv');
// require(dotenv).config();
export default async function handlerRegistration (e: MouseEvent|KeyboardEvent): Promise<undefined | boolean> {
  e.preventDefault();
  const target = e.target as HTMLButtonElement;
  const resp = targetValidater(target, 'Зарегистрироваться');
  if (resp !== true) {
    return false;
  }
  // There data of forms will geting
  const formHtml = target.parentElement as HTMLFormElement;
  const usernameForms = formHtml.querySelector('input[name="username"]') as HTMLInputElement;
  const passwordForms = formHtml.querySelector('input[name="password"]') as HTMLInputElement;
  const repasswordForms = formHtml.querySelector('input[name="repassword"]') as HTMLInputElement;
  const emailForms = formHtml.querySelector('input[name="email"]') as HTMLInputElement;

  if ((APP_SERVER_HOST === null) || (APP_SERVER_HOST === undefined) ||
    (APP_SERVER_PORT === null) ||
    (APP_ACCOUNTS_PATHNAME === null)) {
    return false;
  };

  const host = APP_SERVER_HOST as string;
  const pathnames = APP_ACCOUNTS_PATHNAME as string;
  const port = APP_SERVER_PORT as string;
  const url: string = host + ':' + port + pathnames;
  const h = {
    'X-CSRFToken': getCookie('csrftoken') as string,
    'Content-Type': 'application/json' // contentType
  };
  const context = {
    username: usernameForms.value,
    password: passwordForms.value,
    repassword: repasswordForms.value,
    email: emailForms.value,
    is_superuser: false
  };

  fetch(url, {
    method: 'POST',
    headers: h,
    body: JSON.stringify(context)
  })
    .then(async (resp) => {
      return await resp.json();
    })
    .catch(() => {
      target.insertAdjacentElement('beforebegin', APP_INFO_FORM_REGIST_USER);
      console.log('[handlerRegistration > post]: POST-request is a FALSE');
      return false;
    })
    .then((resp) => {
      console.log(resp);
      const urlRelocation = `http://${host}:${port}/profile/${resp.id}/`;
      location.assign(urlRelocation);
    });
  return true;
}
