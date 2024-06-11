// Star List Component 

// Using 
// <review-star data-rate="4.5"></review-star>
export class StarList extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        const rate = this.dataset.rate

        let halfStar = parseFloat(rate) - parseInt(rate) // 0.5
        let intRate = parseInt(rate)
        console.log('intRate', intRate)
        for (let i = 1; i <= 5; i++) {
            let contentHtml
            // check how many rate
            if (i <= intRate ){
                contentHtml = `<img src="/assets/images/product-detail/star-icon.svg" alt="star" />`
            }
            else if(halfStar!=0 && i === intRate+1 ){
                contentHtml = `
                <img src="/assets/images/product-detail/half-star-icon.svg" alt="star" />
                `
            }
            else if (i > intRate){
                contentHtml = `<img src="/assets/images/product-detail/star-no-fill.svg" alt="star" />`
            }
            //if (i == intRate && halfStar > 0) 
            
            console.log(contentHtml);
            this.innerHTML += contentHtml
        }
        console.log(this.innerHTML);
        this.classList.add('block')
        this.classList += " my-2 flex gap-0.5 pt-1"
    }
}
