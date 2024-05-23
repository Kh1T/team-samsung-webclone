
export class CarouselMobile extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        const carosuelData = this.featureData

        const carouselContainer = document.createElement('div')
        console.log(carosuelData);

        console.log(carosuelData);
        carosuelData.forEach(data =>{
            const cardHTML = `
            <div class="slide flex min-w-full flex-col items-center">
                <img
                class="w-10/12"
                src="${data.imgSrc}"
                alt="feature"
                />
                
                <div class="flex flex-col gap-4 items-center mt-8">
                  <h3 class="text-xl font-bold">${data.title}</h3>
                  <p class="w-10/12 mx-auto text-center">${data.desc}</p>
                  <button class="border-b-2 border-black font-bold">Learn more</button>
                </div>
            </div>
            `;

            this.innerHTML += cardHTML;
        })
        

        this.classList.add("fav-container-mobile", "flex", "md:hidden", "flex", "transition-transform", "duration-500")
        this.classList.add("block")
        
    }
    featureData = [
        {
            title : "Galaxy AI",
            imgSrc : "../../assets/images/smartphone/feat-1.jpg",
            desc : "Unleash astounding new ways to create and connect."
        },
        {
            title : "Galaxy AI",
            imgSrc : "../../assets/images/smartphone/feat-2.jpg",
            desc : "Crystal-clear content. Stunning details. True-to-life color. With Galaxy S24 Series cameras, what you see is what you get.",
        },
        {
            title : "Galaxy AI",
            imgSrc : "../../assets/images/smartphone/feat-3.jpg",
            desc : "The Galaxy S24 Series is an absolute marvel of design with bigger displays, ultra-slim bezels and unique colors inspired by nature."
        },
        {
            title : "Galaxy AI",
            imgSrc : "../../assets/images/smartphone/feat-4.jpg",
            desc : "Blazing-fast processors and a new heat dissipation system gives you all the power you need for all the gameplay you want."
        },
        {
            title : "Galaxy AI",
            imgSrc : "../../assets/images/smartphone/feat-5.jpg",
            desc : "Switch phone numbers, travel stress-free and more with Galaxy eSIM and Dual SIM capabilities."
        },
    ]
}

function createButtonIndicator(indicatorContainer){
    const slideLength = favContainer.querySelectorAll('.slide').length
    
    for (let i = 0; i < slideLength; i++){
        const btnIndicator = document.createElement('button')
        btnIndicator.classList += ` btn-slide mx-3 size-3 rounded-full bg-gray-500`
        indicatorContainer.append(btnIndicator)
    }
    indicatorContainer.classList += " w-fit mx-auto flex rounded-full border border-gray-300 bg-white opacity-80 py-2"
    
}
// createButtonIndicator(indicatorContainer)

customElements.define("carousel-mobile", CarouselMobile);