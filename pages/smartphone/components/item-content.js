export class ItemContent extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        const chlidText = this.textContent
        const desc = this.getAttribute("desc")
        let textHTML = ''
        console.log(desc);
        if (!desc){
            textHTML = `
            <div>
                <img class="h-28" src="../../assets/images/smartphone/sub-nav-1.png" alt="" />
                <div class="flex w-28 flex-col gap-2">
                    <h3 class="mt-2 font-bold md:mt-4">Galaxy</h3>
                </div>
            </div>            
            `
        }else{
            textHTML = `
            <div class="md:flex">
                <img class="h-28" src="../../assets/images/smartphone/sub-nav-1.png" alt="" />
                <div class="flex w-32 flex-col gap-2">
                    <h3 class="mt-2 font-bold md:mt-4">Galaxy</h3>
                    <p class="hidden md:block">
                        Open your world with our foldable phones
                    </p>
                </div>
            </div>
            `
        }
        console.log('item-content');
        this.innerHTML = textHTML
        this.classList.add("block")
    }
}    
customElements.define('item-content' , ItemContent);