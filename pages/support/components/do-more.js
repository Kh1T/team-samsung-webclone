class DoMore extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const image = this.dataset.image;
        const text = this.dataset.text;
        const colspan = this.dataset.colspan;
        const width = this.dataset.width;
        const height = this.dataset.height;

        this.innerHTML = `
            <div class="${colspan} relative w-screen flex justify-center">
                <img class="w-${width} h-${height}" src="${image}" alt="">
                <p class="absolute top-0">${text}</p>
            </div>
        `
    }
}


customElements.define('grid-item', DoMore)