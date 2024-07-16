import handlerRegistration from './handler/Registration';

const handlerLoadPage = (): void => {
  // setTimeout(() => {
  const bodyHtml = document.querySelectorAll('body');
  if (bodyHtml === null) {
    return;
  }

  (bodyHtml[0] as HTMLElement).removeEventListener('click', handlerRegistration);
  (bodyHtml[0] as HTMLElement).addEventListener('click', handlerRegistration);
  // }, 300);
};

// document.removeEventListener('DOMContentLoaded', handlerLoadPage);
document.addEventListener('DOMContentLoaded', handlerLoadPage);
