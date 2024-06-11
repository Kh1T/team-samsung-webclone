class CartButton extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        const color = this.dataset.color
        const image = this.dataset.image || '';
        const text = this.dataset.text || '';

        this.innerHTML = `
        <button class=" py-3 px-[min(20vw,6rem)] h-9 flex justify-center items-center ${color} text-center text-white rounded-full">
        ${image ? `<img class="h-6 object-contain mt-1" src="${image}" alt="icon">` : ''}
        ${text ? `<span class="text-xs text-white tracking-widest">${text}</span>` : ''}
        </button>
        `
    }
}

customElements.define("cart-button", CartButton);