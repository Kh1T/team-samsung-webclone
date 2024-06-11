import { ColorButton } from "./colorbutton.js"
import { StarBox } from "./starbox.js";
import { ReviewBar } from "./reviewbar.js";
import { DashBar } from "./dashbar.js";
import { StarList } from "./star-list.js";

customElements.define('color-button', ColorButton);
customElements.define('star-box', StarBox);
customElements.define('review-bar', ReviewBar)
customElements.define('dash-bar', DashBar)
customElements.define('review-star', StarList)
 
const modalContainer = document.getElementById('modal-container')

const innerHtml = `
    <div class="modal-container">
      <div
        id="backdrop"
        class="bg-black/50 fixed w-full h-full bottom-0 left-0 z-30 hidden"
      ></div>
      <div
        class="modal hidden fixed z-30 bg-white rounded-lg w-[380px] md:w-[660px] h-[400px] top-1/3 left-1/2 -translate-x-1/2"
        id="add-modal"
      >
        <div class="modal-content text-center pt-8 px-10 md:px-20 font-bold">
          <h3 class="text-4xl font-bold py-10">Create your wishlist</h3>
          <p class="">
            Don’t miss out on the products you love Sign in/Sign up now to
            access your wishlist on all your devices and get updates on great
            promotions.
          </p>
        </div>
        <div class="flex mt-6 gap-5 justify-center font-bold">
          <button class="btn" id="btn-cancel">Keep Browsing</button>
          <button
            class="btn bg-blue-800 text-white py-2 px-10 rounded-full uppercase"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
`
modalContainer.innerHTML += innerHtml

