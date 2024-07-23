import targetValidater from '@Validaors/index.ts';
import {
  APP_SERVER_HOST, APP_SERVER_PORT, APP_API_REGISTRATION,
  APP_REGEX_EMAIL, APP_REGEX_USERNAME,
  APP_INFO_FORM_REGIST_USER
} from '../../env';
import { Context, RequstsView, PostmansRequest } from '@interfaces';
import Postman from '@Postman';
import getEmailPassfordHtml from '@FieldsOfForm';

export default async function handlerAuthorisation (e: MouseEvent | KeyboardEvent): Promise<undefined|boolean> {
  const target = e.target as HTMLButtonElement;
  const resp = targetValidater(target, 'Авторизоваться');
  if (!resp) {
    return false;
  }

  e.preventDefault();
  if ((APP_SERVER_HOST === null) || (APP_SERVER_HOST === undefined) ||
    (APP_SERVER_PORT === null) ||
    (APP_API_REGISTRATION === null)) {
    return false;
  };
  const host = APP_SERVER_HOST.substring(0);
  const port = APP_SERVER_PORT.substring(0);
  const urls: string = host + ':' + port + '/account/authorization/';

  // There data of forms will geting
  const formHtml = (target.parentElement as HTMLElement).parentElement as HTMLFormElement;
  const { emailHtml, password1Html } = getEmailPassfordHtml(formHtml);

  if ((password1Html.value === null ||
    emailHtml.value == null) ||
    ((!(typeof emailHtml.value).includes('string')) ||
      ((typeof emailHtml.value).includes('string') &&
        (emailHtml.value).match(APP_REGEX_EMAIL) === null)) ||
    (!(typeof password1Html.value).includes('string'))) {
    /* Check the form! */
    return false;
  }

  let props: Context | PostmansRequest = {
    password: password1Html.value,
    email: emailHtml.value
  };

  const postman = new Postman({ ...props });
  const urlParams = new URL('http://127.0.0.1:8000/account/form/');
  // urlParams.searchParams.set('password', props.password as string);
  // urlParams.searchParams.set('email', props.email as string);
  props = {
    url: urlParams.toString(),
    requestsView: RequstsView.post
  };
  // const result = await postman.request({ ...props });
}
