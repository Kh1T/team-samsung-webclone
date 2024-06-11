import { NavBar } from './components/navbar.js';
import { Footer } from './components/footer.js';
import { Feedback } from './components/feedback.js'
import { CarouselMobile } from './components/carousel-mobile.js';
import { TopNavItem } from './components/top-nav-item.js';
import { SubNavItem } from './components/sub-nav-item.js';
import { SubNavCategory } from './components/sub-nav-category.js';
import { DrawerItem } from './components/drawer-item.js';
import { DrawerCategory } from './components/drawer-category.js';


customElements.define("navbar-component", NavBar);
customElements.define("footer-component", Footer);
customElements.define("feedback-component", Feedback);
customElements.define("carousel-mobile", CarouselMobile);
