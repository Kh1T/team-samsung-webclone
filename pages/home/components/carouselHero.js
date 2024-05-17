

class Hero extends HTMLElement {
    connectedCallback() {
                
        const dataType = this.getAttribute('data-type');
        let data;
        
        // Checking Which Data to use
        if (dataType === 'mobile') {
                data = mobileData;
            } else if (dataType === 'tv'){
                data = tvData;
            } else if (dataType === 'home') {
                data = homeData;
            } else if (dataType === 'sus') {
                data = susData;
            }

        const { items, headerText, buttons } = data; // Unpacking Data
        
        this.innerHTML = `
        <section class="carousel max-w-screen-2xl w-screen">
            <div class="carousel-container relative">
                <div class="flex overflow-hidden gap-4">
                    <div id="carousel-inner-container" class="flex transition-transform duration-500">
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
                    <div class="flex flex-col items-center gap-4 scrollbar-none">
                        <div class="flex text-nowrap justify-center space-x-10 mt-5 font-bold sm:text-[1.5vw] lg:text-xl">
                            <div id="btn-carousel" class="overflow-auto sm:justify-center flex gap-12 px-4 w-screen scrollbar-none">
                                ${buttons.map((button, index) => `
                                    <button data-index="${index}" class="carousel-btn">${button}</button>
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

<section class="hero max-w-screen-2xl w-screen mb-12">
        <div class="hero-small-screen flex  max-w-screen-sm  sm:hidden">

            <div class="card-container flex overflow-hidden  relative ">
                <div class=" flex">
                    <ul id="hero-container" class=" flex  transition-transform duration-300  ">
                        <li class="object-cover w-screen relative">
                            <img class="rounded-2xl object-cover  w-[640px]" src="assets/images/home/hero/img-1-small.webp" alt="">
                            <dsm:iv class="absolute top-[15%] flex flex-col left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-4 items-center text-center">
                                <p class="text-[1.5vw] font-semibold">Limited time offer</p>
                                <h2 class="text-[2.5vw] font-bold">Intelligent design, <br> smart savings</h2>
                                <p>Save up to $2,700 on an 85" Class Samsung Neo <br> QLED 8K QN800C,</p>
                                <butsm:ton
                                    class="btn bg-black p-2 w-32 rounded-full text-white font-semibold sm:text-[1vw]  ">Buy
                                    Now</butsm:ton>
                            </dsm:iv>
                        </li>
                        <li class="object-cover w-screen relative">
                            <img class="rounded-2xl object-cover w-[640px]" src="assets/images/home/hero/img-2-small.webp" alt="">
                            <div
                                class="absolute text-white top-[15%] flex flex-col left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-4  items-center text-center">
                                <p class="text-[1.5vw] font-semibold">Save $1,040</p>
                                <h2 class="text-[2.5vw] font-bold">Meet your new Galaxy <br> family</h2>
                                <p>Bundle and save up to $1,040 with Galaxy S24 Ultra, Watch6 <br> and Buds2 Pro.</p>
                                <button
                                    class="btn bg-white p-2 w-32 rounded-full text-black font-semibold text-[1vw]  ">Buy
                                    Now</button>
                            </div>
                        </li>
                        <li class="object-cover w-screen relative">
                            <img class="rounded-2xl object-cover w-[640px]" src="assets/images/home/hero/img-3-small.webp" alt="">
                            <div
                                class="absolute top-[15%] flex flex-col left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-4  items-center text-center">
                                <p class="text-[1.5vw] font-semibold">Limited time offer</p>
                                <h2 class="text-[2.5vw] font-bold">Intelligent design, <br> smart savings</h2>
                                <p>Save up to $2,700 on an 85" Class Samsung Neo <br> QLED 8K QN800C,</p>
                                <button
                                    class="btn bg-black p-2 w-32 rounded-full text-white font-semibold text-[1vw]  ">Buy
                                    Now</button>
                            </div>
                        </li>
                        <li class="object-cover w-screen relative">
                            <img class="rounded-2xl object-cover w-[640px]" src="assets/images/home/hero/img-4-small.webp" alt="">
                            <div
                                class="absolute top-[15%] flex flex-col left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-4  items-center text-center">
                                <p class="text-[1.5vw] font-semibold">Limited time offer</p>
                                <h2 class="text-[2.5vw] font-bold">Intelligent design, <br> smart savings</h2>
                                <p>Save up to $2,700 on an 85" Class Samsung Neo <br> QLED 8K QN800C,</p>
                                <button
                                    class="btn bg-black p-2 w-32 rounded-full text-white font-semibold text-[1vw]  ">Buy
                                    Now</button>
                            </div>
                        </li>
                        <li class="object-cover w-screen relative">
                            <img class="rounded-2xl object-cover w-[640px]" src="assets/images/home/hero/img-5-small.webp" alt="">
                            <div
                                class="absolute top-[15%] flex flex-col left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-4  items-center text-center text-white">
                                <p class="text-[1.5vw] font-semibold">Save $800</p>
                                <h2 class="text-[2.5vw] font-bold">New Bespoke AI Laundry <br> Combo<sup>TM</sup></h2>
                                <p>Get $800 off.Plus, enjoy free installation, hual alway and more.</p>
                                <button
                                    class="btn bg-white p-2 w-32 rounded-full text-black  font-semibold text-[1vw]  ">Buy
                                    Now</button>
                            </div>
                        </li>

                    </ul>
                </div>

                <div class="absolute bottom-0  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div id="hero-btn-container" class=" flex bg-white  opacity-80 rounded-full">
                        <button class="btn-1 py-2 ">
                            <div class="hero-btn size-4 bg-gray-500 rounded-full mx-4" >
                            </div>
                        </button>
                        <button class="btn-2 py-2">
                            <div class="hero-btn size-4 bg-gray-500 rounded-full mx-4" >
                            </div>
                        </button>
                        <button class="btn-3 py-2">
                            <div class="hero-btn size-4 bg-gray-500 rounded-full mx-4" >
                            </div>
                        </button>
                        <button class="btn-4 py-2">
                            <div class="hero-btn size-4 bg-gray-500 rounded-full mx-4" >
                            </div>
                        </button>
                        <button class="btn-5 py-2">
                            <div class="hero-btn size-4 bg-gray-500 rounded-full mx-4" >
                            </div>
                        </button>
                    </div>
                </div>
            </div>


        </div>

        <div class="hero-big-screen hidden sm:block ">
            <div class="card-container flex overflow-hidden  relative ">
                <div class=" flex">
                    <ul class="img-container flex  transition-transform duration-500">
                        <li class="object-cover w-screen relative">
                            <img class="object-cover w-[1540px]" src="assets/images/home/hero/img-1-big.webp" alt="">
                            <div class="absolute top-[25%] flex flex-col left-[10%] gap-4">
                                <p class="text-[1.5vw] font-semibold">Limited time offer</p>
                                <h2 class="text-[2.5vw] font-bold">Intelligent design, <br> smart savings</h2>
                                <p>Save up to $2,700 on an 85" Class Samsung Neo <br> QLED 8K QN800C,</p>
                                <button
                                    class="btn bg-black p-2 w-32 rounded-full text-white font-semibold text-[1vw]  ">Buy
                                    Now</button>
                            </div>
                        </li>
                        <li class="object-cover w-screen relative">
                            <img class="object-cover w-[1540px]" src="assets/images/home/hero/img-2-big.webp" alt="">
                            <div class="absolute text-white top-[25%] flex flex-col left-[10%] gap-4">
                                <p class="text-[1.5vw] font-semibold">Save $1,040</p>
                                <h2 class="text-[2.5vw] font-bold">Meet your new Galaxy <br> family</h2>
                                <p>Bundle and save up to $1,040 with Galaxy S24 Ultra, Watch6 <br> and Buds2 Pro.</p>
                                <button
                                    class="btn bg-white p-2 w-32 rounded-full text-black font-semibold text-[1vw]  ">Buy
                                    Now</button>
                            </div>
                        </li>
                        <li class="object-cover w-screen relative">
                            <img class="object-cover w-[1540px]" src="assets/images/home/hero/img-3-big.webp" alt="">
                            <div class="absolute top-[25%] flex flex-col left-[10%] gap-4">
                                <p class="text-[1.5vw] font-semibold">Limited time offer</p>
                                <h2 class="text-[2.5vw] font-bold">Intelligent design, <br> smart savings</h2>
                                <p>Save up to $2,700 on an 85" Class Samsung Neo <br> QLED 8K QN800C,</p>
                                <button
                                    class="btn bg-black p-2 w-32 rounded-full text-white font-semibold text-[1vw]  ">Buy
                                    Now</button>
                            </div>
                        </li>
                        <li class="object-cover w-screen relative">
                            <img class="object-cover w-[1540px]" src="assets/images/home/hero/img-4-big.webp" alt="">
                            <div class="absolute top-[25%] flex flex-col left-[10%] gap-4">
                                <p class="text-[1.5vw] font-semibold">Limited time offer</p>
                                <h2 class="text-[2.5vw] font-bold">Intelligent design, <br> smart savings</h2>
                                <p>Save up to $2,700 on an 85" Class Samsung Neo <br> QLED 8K QN800C,</p>
                                <button
                                    class="btn bg-black p-2 w-32 rounded-full text-white font-semibold text-[1vw]  ">Buy
                                    Now</button>
                            </div>
                        </li>
                        <li class="object-cover w-screen relative">
                            <img class="object-cover w-[1540px]" src="assets/images/home/hero/img-5-big.webp" alt="">
                            <div class="absolute top-[25%] flex flex-col left-[10%] gap-4 text-white">
                                <p class="text-[1.5vw] font-semibold">Save $800</p>
                                <h2 class="text-[2.5vw] font-bold">New Bespoke AI Laundry <br> Combo<sup>TM</sup></h2>
                                <p>Get $800 off.Plus, enjoy free installation, hual alway and more.</p>
                                <button
                                    class="btn bg-white p-2 w-32 rounded-full text-black  font-semibold text-[1vw]  ">Buy
                                    Now</button>
                            </div>
                        </li>

                    </ul>
                </div>
                <div class="btn absolute flex justify-between w-full top-1/2 px-12">
                    <button id="left" class="bg-black/50 size-10 rounded-full flex items-center justify-center">
                        <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="28"
                            fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                        </svg>
                    </button>
                    <button id="right" class="bg-black/50 size-10 rounded-full flex items-center justify-center"
                        onclick="transition()">
                        <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" width="32" height="28"
                            fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </button>
                </div>


            </div>
        </div>
        </div>
        </div>

      
    </section>