import getCookie from '@cookies';

import { APP_SERVER_HOST, APP_SERVER_PORT, APP_ACCOUNTS_PATHNAME, APP_INFO_FORM_REGIST_USER } from '../../env';
// const dotenv = require('dotenv');
// require(dotenv).config();
export default async function handlerRegistration(e: MouseEvent): Promise<boolean> {
  e.preventDefault();
  const target = e.target as HTMLButtonElement;
  if (!(target.localName).includes('button') &&
    ((target.lastChild === null) ||
      ((target.lastChild !== null)) ||
      ((!(typeof (target.innerText)).includes('string')) ||
        ((typeof (target.innerText)).includes('string') &&
          !(target.innerText).includes('Зарегистрироваться'))))) {
    return false;
  }

  // There data of forms will geting
  const formHtml = target.parentElement as HTMLFormElement;
  const usernameForms = formHtml.querySelector('input[name="username"]') as HTMLInputElement;
  const passwordForms = formHtml.querySelector('input[name="password"]') as HTMLInputElement;
  const repasswordForms = formHtml.querySelector('input[name="repassword"]') as HTMLInputElement;
  const emailForms = formHtml.querySelector('input[name="email"]') as HTMLInputElement;

  // const { APP_SERVER_HOST, APP_SERVER_PORT, APP_ACCOUNTS_PATHNAME } = process.env;
  if ((APP_SERVER_HOST === null) || (APP_SERVER_HOST === undefined) ||
    (APP_SERVER_PORT === null) ||
    (APP_ACCOUNTS_PATHNAME === null)) {
    return false;
  };

  const host = APP_SERVER_HOST as string;
  const pathnames = APP_ACCOUNTS_PATHNAME as string;
  const port = APP_SERVER_PORT as string;
  let url: string = host + ':' + port + pathnames;
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
    .then((resp) => {
      return resp.json();
    })
    .catch(() => {
      target.insertAdjacentElement('beforebegin', APP_INFO_FORM_REGIST_USER);
      console.log('[handlerRegistration > post]: POST-request is a False');
      return false;
    })
    .then((resp) => {
      console.log(resp);
      // const urlRelocation = `http://127.0.0.1:8000/api/v1/accounts/${resp.id}`;// `http://${host}':'${port}/profile/`;
      const urlRelocation = `http://${host}:${port}/profile/${resp.id}/`;
      // url = host + ':' + port + pathnames;
      // request = await fetch(urlRelocation, {
      //   method: 'POST',
      //   headers: h,
      //   body: JSON.stringify(context)
      // });
      location.assign(urlRelocation);
    });
  // if (!request.ok) {
  //   target.insertAdjacentElement('beforebegin', APP_INFO_FORM_REGIST_USER);
  //   console.log('[handlerRegistration > post]: POST-request is a False');
  //   return false;
  // }
  // const responseBody = await request.json();
  // try {
  //   const dataJson = JSON.parse(responseBody);
  //   const url_relocation = `http://127.0.0.1:8000/api/v1/accounts/${dataJson.id}`;// `http://${host}':'${port}/profile/`;
  // } catch (er) {
  //   console.error(`[handlerRegistration >> fetch ]Error ${er as string}`);
  // };

  // if (request.ok) {
  //   return false;
  // }
  // location.assign(url_relocation);
  return true;
}
