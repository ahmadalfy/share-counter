// @flow

import FacebookCounter from './channels/facebook';

function ready(fn) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function parseLinks() {
  // https://stackoverflow.com/a/40053682/497828
  const links = ((document.querySelectorAll('a[data-counter]'): any): NodeList<HTMLAnchorElement>);
  links.forEach((link:HTMLAnchorElement) => {
    switch (link.hostname) {
      case 'www.facebook.com':
      case 'facebook.com':
        FacebookCounter(link);
        break;
      default:
        break;
    }
  });
}

ready(parseLinks);
