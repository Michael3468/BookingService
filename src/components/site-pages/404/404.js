import Header from '../../ui-kit/headers-and-footers/header/header';
import '../../ui-kit/headers-and-footers/footer/footer';
import './404.scss';

new Header();

setTimeout(() => {
  window.location.href = '/landing-page.html';
}, 3000);
