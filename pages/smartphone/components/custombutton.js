
export class CustomButton {
    constructor(){
        super()
    }
    connectedCallback(){
        this.classList += "text-3xl px-8 py-4 bg-black text-white font-semibold hover:opacity-80 rounded-full"        
        this.innerHTML = `
            <button>Buy now</button>
        `
    }
}