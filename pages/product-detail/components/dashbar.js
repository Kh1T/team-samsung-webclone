// Review Dash Bar Compoinent

export class DashBar extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        const rate = this.dataset.rate
        // const dashContainer = document.getElementById('dash-container')
        // console.log(dashContainer);
        for (let i = 0; i <=4 ; i++){
            const contentHtml = `
                <div class="bar-present h-2.5 w-14 md:w-8 bg-gray-400"></div>
            `
            this.innerHTML += contentHtml
        }
        const barInner = document.createElement('div')
        barInner.classList = "flex absolute gap-0.5 left-0 top-0"
        for (let i = 0; i < rate; i++){
            const contentHtml = `
                <div class="bar-inner h-2.5 w-14 md:w-8 bg-orange-400"></div>
            `
            barInner.innerHTML += contentHtml            
        }
        this.classList += " flex gap-0.5 relative item-center justify-center"
       
        this.append(barInner) 
    }
}


