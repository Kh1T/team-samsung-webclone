export class InfluencerCard extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        const image = this.dataset.image
        this.innerHTML = `
        <div class="flex flex-col gap-4 h-fit items-center">
        <img src="${image}" alt="">
        <a href="#" class="flex gap-2 bg-black w-fit text-white px-6 py-3 rounded-full text-sm">Watch now 
            <img src="../../assets/images/galaxy-ai/icon/redirect.svg" >
        </a>
        </div>`
    }
}

customElements.define('influencer-card', InfluencerCard)
