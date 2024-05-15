export class CarouselTab extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {

    
        this.innerHTML =
            `    <section class="mobile max-w-screen-2xl w-screen ">

            <div class="mobile-container relative">
            <div class="flex overflow-hidden gap-4 ">
                <div id="mobile-container" class="flex transition-transform duration-500">
                    <div class="item w-[100%] h-full relative flex-none ">
                       <img class="hidden sm:block w-full" src="assets/images/home/mobile/s24_ultra_big.avif" alt="">
                       <img class="  sm:hidden w-full" src="assets/images/home/mobile/s24_ultra_small.avif" alt="">
                       <div class="info flex flex-col sm:gap-2 text-center items-center justify-center pb-6 absolute bottom-8 sm:bottom-0 left-24 right-24">
                        <h1 class="text-[6vw] sm:text-[3vw]   lg:text-3xl pb-2">Galaxy S24 Ultra</h1>
                        <p class="text-[2vw] sm:text-[1vw] lg:text-xl">Get up to $750 trade-in credit and $75 instant Samsung Credit with
                            participating carriers. Try it for 30 Days or get a full refund.</p>
                        <button class="btn bg-black p-2 rounded-full text-white font-semibold text-[1.5vw] sm:text-lg ">Buy
                            Now</button>
                    </div>
                    </div>
                    <div class="item w-[100%] h-full relative flex-none">
                       <img class="hidden sm:block w-full" src="assets/images/home/mobile/s24_big.jpeg" alt="">
                       <img class="  sm:hidden w-full" src="assets/images/home/mobile/s24_small.jpeg" alt="">
                       <div class="info flex flex-col  text-center items-center justify-center pb-6 absolute bottom-8 sm:bottom-0  left-24 right-24">
                        <h1 class="text-[6vw] sm:text-[3vw]   lg:text-3xl pb-2">Galaxy S24 Ultra</h1>
                        <p class="text-[2vw] sm:text-[1vw] lg:text-xl">Get up to $750 trade-in credit and $75 instant Samsung Credit with
                            participating carriers. Try it for 30 Days or get a full refund.</p>
                        <button class="btn bg-black p-2 rounded-full text-white font-semibold text-[1.5vw] sm:text-lg ">Buy
                            Now</button>
                    </div>
                    </div>
                    <div class="item w-[100%] h-full relative flex-none">
                       <img class="hidden sm:block w-full" src="assets/images/home/mobile/laptop_big.png" alt="">
                       <img class="  sm:hidden w-full" src="assets/images/home/mobile/laptop_small.png" alt="">
                       <div class="info flex flex-col  text-center items-center justify-center pb-6 absolute bottom-8 sm:bottom-0  left-24 right-24">
                           <h1 class="text-[6vw] sm:text-[3vw]   lg:text-3xl pb-2">Ultra performance, boosted by AI</h1>
                           <p class="text-[2vw] sm:text-[1vw] lg:text-xl">Get $500 of select Galaxy Book4 Ultra and more.</p>
                           <button class="btn bg-black p-2 rounded-full text-white font-semibold text-[1.5vw] sm:text-lg ">Buy
                               Now</button>
                       </div>
                    </div>
                    <div class="item w-[100%] h-full relative flex-none">
                       <img class="hidden sm:block w-full" src="assets/images/home/mobile/tablet_big.jpeg" alt="">
                       <img class="  sm:hidden w-full" src="assets/images/home/mobile/tablet_small.jpeg" alt="">
                       <div class="info flex flex-col  text-center items-center justify-center pb-6 absolute bottom-8 sm:bottom-0  left-24 right-24">
                           <h1 class="text-[6vw] sm:text-[3vw]   lg:text-3xl pb-2">Inspire and unleash greatness</h1>
                           <p class="text-[2vw] sm:text-[1vw] lg:text-xl">Get up to $800 instant trade-in credit. Plus, get 50% off Book Cover Keyword Slim.</p>
                           <div class="flex gap-6">
                            <button class="btn border-b-2 border-black  text-black font-semibold text-[1.5vw] sm:text-lg ">Learn more</button>
                            <button class="btn bg-black p-2 rounded-full text-white font-semibold text-[1.5vw] sm:text-lg ">Buy
                                Now</button>
                        </div>
                       </div>
                    </div>
                    <div class="item w-[100%] h-full relative flex-none">
                       <img class="hidden sm:block w-full" src="assets/images/home/mobile/watch_big.jpeg" alt="">
                       <img class="  sm:hidden w-full" src="assets/images/home/mobile/watch_small.jpeg" alt="">
                       <div class="info flex flex-col  text-center items-center justify-center pb-6 absolute bottom-8 sm:bottom-0  left-24 right-24">
                           <h1 class="text-[6vw] sm:text-[3vw]   lg:text-3xl pb-2">Unlock a healthier you</h1>
                           <p class="text-[2vw] sm:text-[1vw] lg:text-xl">Get up to $80 off and up to $250 instant trade-in credit.</p>
                               <div class="flex gap-6">
                                <button class="btn border-b-2 border-black  text-black font-semibold text-[1.5vw] sm:text-lg ">Learn more</button>
                                <button class="btn bg-black p-2 rounded-full text-white font-semibold text-[1.5vw] sm:text-lg ">Buy
                                    Now</button>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
            <div class="header mt-8 absolute top-0 left-1/2 transform -translate-x-1/2 overflow-auto">
                   <h2 class="text-3xl sm:text-[3vw] lg:text-5xl font-[600] text-center">Mobile & Computing</h2>
                   <div class=" flex flex-col  items-center gap-4  " style="scrollbar-width: none;">
                       <div class="flex  text-nowrap justify-center space-x-10 mt-5 font-bold  sm:text-[1.5vw] lg:text-xl  ">
                           <div id="btn-mobile" class=" overflow-auto sm:justify-center flex gap-12  px-4 w-screen" style="scrollbar-width: none;">
                               <button class="btn-mobile">Galaxy S24 Ultra</button>
                               <button class="btn-mobile">Galaxy S24+</button>
                               <button class="btn-mobile">Galaxy Book4 Ultra</button>
                               <button class="btn-mobile">Galaxy Tab S9 Series</button>
                               <button class="btn-mobile">Galaxy Watch6 Series</button>
                           </div>
                       </div>
                   </div>
            </div>
    
              
           </div> 
            </div>
            
    
        </section>
    
        `

    }
}

customElements.define('carousel-tab', CarouselTab)





export class CustomCarousel extends HTMLElement {
    constructor() {
        super();
        // Default data
        this.data = {
            header: "Mobile & Computing",
            items: [
                {
                    title: "Galaxy S24 Ultra",
                    description: "Get up to $750 trade-in credit and $75 instant Samsung Credit with participating carriers. Try it for 30 Days or get a full refund.",
                    buttonLabel: "Buy Now",
                    images: {
                        small: "assets/images/home/mobile/s24_ultra_small.avif",
                        large: "assets/images/home/mobile/s24_ultra_big.avif"
                    }
                },
                // Add more items here with similar structure
            ]
        };
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = this.getTemplate(this.data);
    }

    getTemplate(data) {
        return `
            <section class="mobile max-w-screen-2xl w-screen">
                <div class="mobile-container relative">
                    <div class="flex overflow-hidden gap-4 ">
                        <div id="mobile-container" class="flex transition-transform duration-500">
                            ${data.items.map(item => `
                                <div class="item w-[100%] h-full relative flex-none">
                                    <img class="hidden sm:block w-full" src="${item.images.large}" alt="">
                                    <img class="sm:hidden w-full" src="${item.images.small}" alt="">
                                    <div class="info flex flex-col text-center items-center justify-center pb-6 absolute bottom-8 sm:bottom-0 left-24 right-24">
                                        <h2 class="text-[6vw] sm:text-[3vw] lg:text-3xl pb-2">${item.title}</h2>
                                        <p class="text-[2vw] sm:text-[1vw] lg:text-xl">${item.description}</p>
                                        <button class="btn bg-black p-2 rounded-full text-white font-semibold text-[1.5vw] sm:text-lg">${item.buttonLabel}</button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="header mt-8 absolute top-0 left-1/2 transform -translate-x-1/2 overflow-auto">
                        <h2 class="text-3xl sm:text-[3vw] lg:text-5xl font-[600] text-center">${data.header}</h2>
                        <div class="flex flex-col items-center gap-4" style="scrollbar-width: none;">
                            <div class="flex text-nowrap justify-center space-x-10 mt-5 font-bold sm:text-[1.5vw] lg:text-xl">
                                <div id="btn-mobile" class="overflow-auto sm:justify-center flex gap-12 px-4 w-screen" style="scrollbar-width: none;">
                                    ${data.items.map(item => `
                                        <button class="btn-mobile">${item.title}</button>
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

customElements.define('custom-carousel', CustomCarousel);
