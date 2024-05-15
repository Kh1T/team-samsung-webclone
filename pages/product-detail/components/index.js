// Color Component
class ColorButton extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        const title = this.dataset.title
        const textColor = this.dataset.color

        this.innerHTML = `
            <span
                class="w-8 h-8 rounded-full border block border-black bg-${textColor}"
                ></span>
                <p>${title}</p>
                <p>$189.99</p> 
        `
        this.classList = "flex flex-col justify-center items-center border-2 w-[49%] border-[#ddd] rounded-md mt-2 p-3 cursor-pointer"
    }
}


//Star Box Component

class StarBox extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = `            
            <img class="h-full w-6 m-auto" src="/assets/images/product-detail/star-no-fill.svg" alt="star">
        `
        this.classList = "rate-star size-12 border-2 border-orange-300 rounded-lg cursor-pointer"
    }
}

// Review Bar Component
class ReviewBar extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        const title = this.dataset.title
        const percent = this.dataset.percent
        const count = this.dataset.count
        this.innerHTML = `
            <p class="flex-none w-12">${title}</p>
            <div
            class="ml-4 relative h-3 w-[100%] rounded-md bg-gray-400">
                <div
                class="left-0 absolute h-3 w-[${percent}%] rounded-l-md bg-orange-400"
                ></div>
            </div>
            
            <p class="w-12 ml-2">${count}</p>
        `
        this.classList = "flex items-center relative cursor-pointer hover:opacity-80"
    }
}
// Review Dash Bar Compoinent
class DashBar extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML=`
            <p class="mb-2">Feature</p>
            <div class=relative>
                <div class="flex gap-1 items-center">
                <div class="bar-present h-2.5 w-14 md:w-8 bg-orange-400"></div>
                <div class="bar-present h-2.5 w-14 md:w-8 bg-orange-400"></div>
                <div class="bar-present h-2.5 w-14 md:w-8 bg-orange-400"></div>
                <div class="bar-present h-2.5 w-14 md:w-8 bg-orange-400"></div>
                <div class="bar-present h-2.5 w-14 md:w-8 bg-orange-400"></div>
                <div class="absolute left-0 top-0">
                    <div class="bar-present h-2.5 w-14 md:w-8 bg-gray-400 relative">
                </div>

            </div>
            </div>
              <p class="pl-2">4.2</p>
            </div>
        `        
    }
}


function dashBar(){
    const dashContainer = document.getElementById('dash-container')
    console.log(dashContainer);
    for (let i = 0; i <=4 ; i++){
        const contentHtml = `
            <div class="bar-present h-2.5 w-14 md:w-8 bg-gray-400"></div>
        `
        dashContainer.innerHTML += contentHtml
        // dashContainer.classList = "flex gap-0.5"
    }
    for (let i = 0; i <=3; i++){

    }

}
dashBar()

customElements.define('color-button', ColorButton);
customElements.define('star-box', StarBox);
customElements.define('review-bar', ReviewBar)
customElements.define('dash-bar', DashBar)