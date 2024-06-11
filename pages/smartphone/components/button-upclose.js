/**
 * Custom HTML element representing Button Up Close With Rounded Border
 * Use in Galaxy Up Close Section
 * @export
 * @class ButtonUpclose
 * @extends {HTMLElement}
 */
export class ButtonUpclose extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        const chlidText = this.textContent
        this.innerHTML = `
            <button class="w-32 text-xs rounded-full border py-2 hover:border-blue-500 hover:font-semibold">
                ${chlidText}
            </button>
        `
        this.classList.add("inline-block")
    }
}