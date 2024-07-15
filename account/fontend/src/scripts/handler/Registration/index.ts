import getCookie from '@cookies';

import { APP_SERVER_HOST, APP_SERVER_PORT, APP_ACCOUNTS_PATHNAME } from '../../env';
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
  // const { APP_SERVER_HOST, APP_SERVER_PORT, APP_ACCOUNTS_PATHNAME } = process.env;
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
    username: 'Boris',
    password: '1234567896',
    repassword: '1234567896',
    email: 'user_test@test.ru'
  };

  const request = await fetch(url, {
    method: 'POST',
    headers: h,
    body: JSON.stringify(context)
  });
  if (!request.ok) {
    console.log('[handlerRegistration > post]: POST-request is a False');
  }
  // location.assign(host + ':' + port + 'account');
  return true;
}
