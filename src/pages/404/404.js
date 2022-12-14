import Header from '../../components/ui-kit/headers-and-footers/header/header';
import '../../components/ui-kit/headers-and-footers/footer/footer';
import './404.scss';

new Header();

setTimeout(() => {
  window.location.href = '/landing-page.html';
}, 3000);
