export class FeaturedCard extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = '<h1>Featured Card</h2>'
    }
}

customElements.define('featured-card', FeaturedCard)
