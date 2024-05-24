import { NavBar } from './components/navbar.js';
import { Footer } from './components/footer.js';
<<<<<<< HEAD
import { Chat } from './components/chat.js';
import { Feedback } from './components/feedback.js'
// import { CarouselTab } from '../pages/home/components/carousel-homepage.js';

customElements.define("navbar-component", NavBar);
customElements.define("footer-component", Footer);

customElements.define("chat-component", Chat);
customElements.define("feedback-component", Feedback);

// customElements.define('carousel-tab', CarouselTab);
=======
import { Feedback } from './components/feedback.js'
import { CarouselMobile } from './components/carousel-mobile.js';

customElements.define("navbar-component", NavBar);
customElements.define("footer-component", Footer);
customElements.define("feedback-component", Feedback);
customElements.define("carousel-mobile", CarouselMobile);
>>>>>>> develop
