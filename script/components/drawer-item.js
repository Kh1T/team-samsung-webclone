const signin = [{ label: "Sign in Create Account", link: "../../pages/login/index.html" },]
const shop = [
    { label: "Shop", link: "#" },
    { label: "All Offers", link: "../../pages/continue-shopping/index.html" },
    { label: "Smartphones", link: "../../pages/smartphone/index.html" },
    { label: "Galaxy AI", link: "../../pages/galaxy-ai/index.html" },
    { label: "Computing", link: "#" },
    { label: "Displays", link: "#" },
    { label: "Accesories", link: "#" },
    { label: "Discover Samsung Sale", link: "#" },
]
const support = [
    { label: "Support", link: "../../pages/support/index.html" },
    { label: "Privacy", link: "../../pages/privacy-page/index.html" },
]
const account = [
    { label: "Why Create Account?", link: "../../pages/account-benefit/index.html" },
    { label: "Track your Orders", link: "../../pages/track-order/index.html" },
    { label: "Business Account", link: "#" }
]


export class DrawerItem extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        const category = this.dataset.category
        switch (category) {
            case 'signin':
                this.handleNavItem(signin)
                break
            case 'shop':
                this.handleNavItem(shop)
                break
            case 'support':
                this.handleNavItem(support)
                break
            case 'account':
                this.handleNavItem(account)
        }
    }
    handleNavItem(data) {
        data.forEach(item => {
            const navItem = document.createElement('div')
            navItem.classList.add("py-2")
            navItem.innerHTML = `<a href="${item.link}">${item.label}</a>    `
            this.appendChild(navItem)
        });
    }
}

customElements.define('drawer-item', DrawerItem)