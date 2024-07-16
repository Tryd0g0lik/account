import getCookie from '@cookies';
import targetValidater from '@Validaors/index.ts';
import { APP_SERVER_HOST, APP_SERVER_PORT, APP_ACCOUNTS_PATHNAME, APP_INFO_FORM_REGIST_USER } from '../../env';
import { Context, RequstsView, PostmansRequest } from '@interfaces';
import Postman from '@Postman';

export default async function handlerAuthorisation (e: MouseEvent | KeyboardEvent): Promise<undefined|boolean> {
  e.preventDefault();
  const target = e.target as HTMLButtonElement;
  const resp = targetValidater(target, 'Авторизоваться');
  if (resp !== true) {
    return false;
  }

  if ((APP_SERVER_HOST === null) || (APP_SERVER_HOST === undefined) ||
    (APP_SERVER_PORT === null) ||
    (APP_ACCOUNTS_PATHNAME === null)) {
    return false;
  };
  const host = APP_SERVER_HOST as string;
  const pathnames = APP_ACCOUNTS_PATHNAME as string;
  const port = APP_SERVER_PORT as string;
  const urls: string = host + ':' + port + 'profile/page/';

  // There data of forms will geting
  const formHtml = target.parentElement as HTMLFormElement;
  const emailForms = formHtml.querySelector('input[name="email"]') as HTMLInputElement;
  const passwordForms = formHtml.querySelector('input[name="password"]') as HTMLInputElement;
  let props: Context | PostmansRequest = {
    repassword: passwordForms.value,
    email: emailForms.value
  };

  const postman = new Postman({ ...props });
  props = {
    url: urls,
    requestsView: RequstsView.post
  };
  postman.request(props);
}
