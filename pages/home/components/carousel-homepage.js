
import { mobileData } from './carousel-data.js';
import { tvData } from './carousel-data.js';
import { homeData } from './carousel-data.js';



export class CarouselTab extends HTMLElement {
    connectedCallback() {

                // Get the data type from the attribute
        const dataType = this.getAttribute('data-type');
        let data;
        
        // Choose the data based on the data-type attribute
        if (dataType === 'mobile') {
                data = mobileData;
            } else if (dataType === 'tv'){
                data = tvData;
            } else if (dataType === 'home') {
                data = homeData;
            }
        

        const { items, headerText, buttons } = data;
        


        this.innerHTML = `
            <section class="mobile max-w-screen-2xl w-screen">
                <div class="mobile-container relative">
                    <div class="flex overflow-auto gap-4 ">
                        <div id="mobile-container" class="flex transition-transform duration-500">
                            ${items.map(item => `
                                <div class="item w-full h-full relative flex-none">
                                    <img class="hidden sm:block w-full" src="${item.largeImage}" alt="">
                                    <img class="sm:hidden w-full" src="${item.smallImage}" alt="">
                                    <div class="info flex flex-col sm:gap-2 text-center items-center justify-center pb-6 absolute bottom-8 sm:bottom-0 left-24 right-24">
                                        <h1 class="text-[6vw] sm:text-[3vw] lg:text-3xl pb-2">${item.title}</h1>
                                        <p class="text-[2vw] sm:text-[1vw] lg:text-xl">${item.description}</p>
                                        <button class="btn bg-black p-2 rounded-full text-white font-semibold text-[1.5vw] sm:text-lg">Buy Now</button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="header mt-8 absolute top-0 left-1/2 transform -translate-x-1/2 overflow-auto">
                        <h2 class="text-3xl sm:text-[3vw] lg:text-5xl font-semibold text-center">${headerText}</h2>
                        <div class="flex flex-col items-center gap-4 scrollbar-none" >
                            <div class="flex text-nowrap justify-center space-x-10 mt-5 font-bold sm:text-[1.5vw] lg:text-xl">
                                <div id="btn-mobile" class="overflow-auto sm:justify-center flex gap-12 px-4 w-screen scrollbar-none" >
                                    ${buttons.map(button => `
                                        <button class="btn-mobile">${button}</button>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

customElements.define('carousel-tab', CarouselTab);

