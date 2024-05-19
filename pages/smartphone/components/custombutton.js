
export class CustomButton extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        const chlidText = this.textContent

        let bgColor = "bg-black"
        let textColor = "text-white"
        const bgTheme = this.getAttribute("theme")
        console.log(bgTheme);
        if (bgTheme === "bg-white"){
            bgColor = bgTheme
            textColor = "text-black"
        }

        this.innerHTML = `
            <button class="${bgColor} ${textColor} text-base sm:text-3xl cursor-pointer px-8 py-4 md:text-sm font-semibold hover:opacity-80 rounded-full">
                ${chlidText}
            </button>
        `
        this.classList.add("block")
        
    }
}