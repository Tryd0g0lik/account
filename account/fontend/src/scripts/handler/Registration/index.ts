import getCookie from '@cookies';

import {
  APP_SERVER_HOST, APP_SERVER_PORT,
  APP_API_REGISTRATION, APP_INFO_FORM_REGIST_USER,
  APP_LOGIN_URL
} from '../../env';
import targetValidater from '@Validaors/index.ts';
import { Context } from '@interfaces';
// const dotenv = require('dotenv');
// require(dotenv).config();
export default async function handlerRegistration (e: MouseEvent | KeyboardEvent): Promise<undefined | boolean> {
  const target = e.target as HTMLButtonElement;

  const resp = targetValidater(target, 'Зарегистрироваться');
  if (!resp) {
    return false;
  }
  e.preventDefault();
  // There data of forms will geting
  const formHtml = target.parentElement as HTMLFormElement;
  const emailForms = formHtml.querySelector('input[name="email"]') as HTMLInputElement;
  const password1 = formHtml.querySelector('input[name="password1"]') as HTMLInputElement;
  const password2 = formHtml.querySelector('input[name="password2"]') as HTMLInputElement;

  if ((password1.value == null || password2.value == null || emailForms.value == null) ||
    !(typeof emailForms.value).includes('string') ||
    ((typeof emailForms.value).includes('string') && ('@').includes(emailForms.value)) ||
    ((typeof password1.value).includes('string') &&
      (typeof password2.value).includes('string') &&
      !(password1.value).includes(password2.value))) {
    return false;
  }
  if ((APP_SERVER_HOST === null) || (APP_SERVER_HOST === undefined) ||
    (APP_SERVER_PORT === null) ||
    (APP_API_REGISTRATION === null)) {
    return false;
  };

  const host = APP_SERVER_HOST as string;
  const pathnames = APP_API_REGISTRATION as string;
  const port = APP_SERVER_PORT as string;
  const url: string = host + ':' + port + pathnames;
  const h = {
    'X-CSRFToken': getCookie('csrftoken') as string,
    'Content-Type': 'application/json' // contentType
  };
  const context = {
    username: 'Boris',
    password: password1.value,
    email: emailForms.value
  };

  fetch(url, {
    method: 'POST',
    headers: h,
    body: JSON.stringify(context)
  })
    .then((resp_): object => {
      if (!resp_.ok) {
        return { data: 'NOT OK' };
      }
      return { data: 'OK' }; // await resp_.json();
    });
  //   .catch(() => {
  //     target.insertAdjacentElement('beforebegin', APP_INFO_FORM_REGIST_USER);
  //     console.log('[handlerRegistration > post]: POST-request is a FALSE');
  //     return false;
  //   })
  //   .then((resppon) => {
  //     if (
  //       (resppon === false) ||
  //       ((typeof resppon).includes('object') &&
  //         (typeof resppon.username).includes('object') &&
  //         (typeof resppon.username[0]).includes(String(undefined))) ||
  //       ((typeof resppon).includes('object') &&
  //         (typeof resppon.username).includes('object') &&
  //         !(typeof resppon.username[0]).includes(String(undefined)) &&
  //         String(resppon.username[0]).includes('invalid'))
  //     ) {
  //       // The check has no passed and 'resp=false'
  //       return false;
  //     }
  //     console.log(resppon);
  //     const pathname = 'account/form/'; // ${resppon.id}
  //     const url_ = window.location.href.replace('account/registration/', pathname);
  //     const urlRelocztion = new URL(url_);
  //     urlRelocztion.search = window.location.search;
  //     urlRelocztion.hash = window.location.hash;
  //     window.location.assign(urlRelocztion.toString());
  //     // location.assign(urlRelocztion.toString());
  //   });
  // return true;
}
