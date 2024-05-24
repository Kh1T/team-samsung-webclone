class ProductCarousel extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = `
            <div class="relative bg-yellow-50 sm:hidden">
                <div class="flex flex-nowrap overflow-x-scroll pb-14 pl-4" style="scrollbar-width: none">
                <div class="carousel-container flex w-screen gap-4 px-3 transition-transform duration-500"></div>
          </div>
            <div class="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <div class="carousel-btn-container flex rounded-full border-2"></div>
            </div>
        </div>
        `
    }
}

customElements.define('product-carousel', ProductCarousel)