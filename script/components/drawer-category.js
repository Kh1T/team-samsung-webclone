const category = ["signin", "shop", "support", "account"];

export class DrawerCategory extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    category.forEach((item) => {
      const navItem = document.createElement("div");
      navItem.innerHTML = `<drawer-item data-category="${item}"></drawer-item> <hr>`;
      this.appendChild(navItem);
    });
  }
}

customElements.define("drawer-category", DrawerCategory);
