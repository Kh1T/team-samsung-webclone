export class ProductSeriesCard extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = '<h1>Product Series Card</h2>'
    }
}

customElements.define('product-series-card', ProductSeriesCard)
