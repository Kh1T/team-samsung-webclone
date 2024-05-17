import { homepage } from './carouselHero-data.js';

export class Hero extends HTMLElement {
    connectedCallback() {
        const items = homepage.items;
        console.log(items);

        this.innerHTML = `
        <section class="hero max-w-screen-2xl w-screen mb-12">
            <div class="hero-small-screen flex max-w-screen-sm sm:hidden">
                <div class="card-container flex overflow-hidden relative">
                    <div class="flex">
                        <ul id="hero-container" class="flex transition-transform duration-300">
                            ${items.map(item => `
                            <li class="object-cover w-screen relative">
                                <img class="rounded-2xl object-cover w-[640px]" src="${item.smallImage}" alt="">
                                <div class="absolute top-[15%] flex flex-col left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-4 items-center text-center">
                                    <p class="text-[1.5vw] font-semibold">${item.par}</p>
                                    <h2 class="text-[2.5vw] font-bold">${item.title}</h2>
                                    <p>${item.description}</p>
                                    <button class="btn bg-black p-2 w-32 rounded-full text-white font-semibold sm:text-[1vw]">Buy Now</button>
                                </div>
                            </li>
                            `).join('')}
                        </ul>
                    </div>
                    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div id="hero-btn-container" class="flex bg-white opacity-80 rounded-full">
                            <button class="btn-1 py-2">
                                <div class="hero-btn size-4 bg-gray-500 rounded-full mx-4"></div>
                            </button>
                            <button class="btn-2 py-2">
                                <div class="hero-btn size-4 bg-gray-500 rounded-full mx-4"></div>
                            </button>
                            <button class="btn-3 py-2">
                                <div class="hero-btn size-4 bg-gray-500 rounded-full mx-4"></div>
                            </button>
                            <button class="btn-4 py-2">
                                <div class="hero-btn size-4 bg-gray-500 rounded-full mx-4"></div>
                            </button>
                            <button class="btn-5 py-2">
                                <div class="hero-btn size-4 bg-gray-500 rounded-full mx-4"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-big-screen hidden sm:block">
                <div class="card-container flex overflow-hidden relative">
                    <div class="flex">
                        <ul class="img-container flex transition-transform duration-500">
                            ${items.map(item => `
                            <li class="object-cover w-screen relative">
                                <img class="object-cover w-[1540px]" src="${item.largeImage}" alt="">
                                <div class="absolute top-[25%] flex flex-col left-[10%] gap-4">
                                    <p class="text-[1.5vw] font-semibold">${item.par}</p>
                                    <h2 class="text-[2.5vw] font-bold">${item.title}</h2>
                                    <p>${item.description}</p>
                                    <button class="btn bg-black p-2 w-32 rounded-full text-white font-semibold text-[1vw]">Buy Now</button>
                                </div>
                            </li>
                            `).join('')}
                        </ul>
                    </div>
                    <div class="btn absolute flex justify-between w-full top-1/2 px-12">
                        <button id="left" class="bg-black/50 size-10 rounded-full flex items-center justify-center">
                            <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="28" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                            </svg>
                        </button>
                        <button id="right" class="bg-black/50 size-10 rounded-full flex items-center justify-center">
                            <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="28" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('hero-carousel', Hero);
