import { PostUI } from './js/post-ui';
import { handleNavOnScroll } from './js/helper'
import './styles.scss';

(function() {
  new PostUI().init();
  handleNavOnScroll();
})()