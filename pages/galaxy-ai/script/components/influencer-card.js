export class InfluencerCard extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = '<h1>Influencer Card</h2>'
    }
}

customElements.define('influencer-card', InfluencerCard)
