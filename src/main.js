// import Swup from 'swup';
// import swupMergeHeadPlugin from 'swup/plugins/swupMergeHeadPlugin';
// import AOS from 'aos';
// Import css
import './scss/index.scss';

if (typeof window.Steenify === 'undefined') {
  window.Steenify = {};
}

import './js/home';

// const clickOrTouch = 'ontouchend' in window ? 'touchend' : 'click';

window.Steenify.common = {
  init: function() {
    this.init__page();
  },
  init__page: function() {
    const view = $('.steenify__page').data('view');
    switch (view) {
      case 'home':
        Steenify.home.init__home();
        break;
      default:
        console.log(view);
    }
  },
};

//***************************************
//      Main program
//***************************************

$(document).ready(function(event) {
  Steenify.common.init();
});
