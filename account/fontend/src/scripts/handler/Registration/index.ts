import getCookie from '@cookies';

import {
  APP_SERVER_HOST, APP_SERVER_PORT,
  APP_API_REGISTRATION, APP_INFO_FORM_REGIST_USER,
  APP_API_AUTHORIZSTION,
  APP_REGEX_EMAIL,
  APP_REGEX_USERNAME,
  APP_LOGIN_URL
} from '../../env';
import targetValidater from '@Validaors/index.ts';
import { Context } from '@interfaces';
import getEmailPassfordHtml from '@FieldsOfForm';
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
  const { emailHtml, password1Html } = getEmailPassfordHtml(formHtml);
  const usernameHtml = formHtml.querySelector('input[name="username"]') as HTMLInputElement;
  const password2Html = formHtml.querySelector('input[name="password2"]') as HTMLInputElement;

  if ((password1Html.value === null || password2Html.value == null ||
    emailHtml.value === null || usernameHtml.value === null) ||
    ((!(typeof emailHtml.value).includes('string')) ||
    ((typeof emailHtml.value).includes('string') && (emailHtml.value).match(APP_REGEX_EMAIL) === null)) ||
    ((!(typeof usernameHtml.value).includes('string')) || ((usernameHtml.value).match(APP_REGEX_USERNAME) === null) ||
      ((typeof usernameHtml.value).includes('string') && ((usernameHtml.value).length < 3 ||
    (usernameHtml.value).length > 30))) ||
    ((typeof password1Html.value).includes('string') &&
      (typeof password2Html.value).includes('string') &&
      !(password1Html.value).includes(password2Html.value))) {
    /* Check the form! */
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
    username: usernameHtml.value,
    password: password1Html.value,
    email: emailHtml.value
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
    })
    .catch(() => {
      target.insertAdjacentElement('beforebegin', APP_INFO_FORM_REGIST_USER);
      console.log('[handlerRegistration > post]: POST-request is a FALSE');
      return false;
    })
    .then(() => {
      (emailHtml.value).replace(/[*]+/g, '');
      (usernameHtml.value).replace(/\w+/g, '');
      (password1Html.value).replace(/[\w\-_\\%][)('"@]+/, '');
      (password2Html.value).replace(/[\w\-_\\%][)('"@]+/, '');
    })
    .then(() => {
      //     const pathname = 'account/form/'; // ${resppon.id}
      const url_ = window.location.href.replace('account/registration/', APP_API_AUTHORIZSTION);
      const urlRelocztion = new URL(url_);
      urlRelocztion.search = window.location.search;
      urlRelocztion.hash = window.location.hash;
      window.location.assign(urlRelocztion.toString());
      //     // location.assign(urlRelocztion.toString());
    });

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

  //   });
  // return true;
}
