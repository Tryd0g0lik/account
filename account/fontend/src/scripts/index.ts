import handlerRegistration from './handler/Registration';
import handlerAuthorisation from './handler/Athorisation';
import { APP_PAGE_AUTHORIZSTION } from './env';
// export const reAuthorPage = /\/account\/[0-9]+\//;

const handlerLoadPage = (): void => {
  const pathname = location.pathname;
  const bodyHtml = document.querySelectorAll('body');
  if (bodyHtml === null) {
    return;
  }
  const match = (pathname).match('account/registration/'); // /form
  if (match !== null) {
    // there is page for user registration
    (bodyHtml[0] as HTMLElement).removeEventListener('click', handlerRegistration);
    (bodyHtml[0] as HTMLElement).addEventListener('click', handlerRegistration);
  } else if ((pathname).includes(APP_PAGE_AUTHORIZSTION)) {
    // there is page for uthorization
    (bodyHtml[0] as HTMLElement).removeEventListener('click', handlerAuthorisation);
    (bodyHtml[0] as HTMLElement).addEventListener('click', handlerAuthorisation);
  };
};

// document.removeEventListener('DOMContentLoaded', handlerLoadPage);
document.addEventListener('DOMContentLoaded', handlerLoadPage);
