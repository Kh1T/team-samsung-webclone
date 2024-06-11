// Review Dash Bar Compoinent

// using <dash-bar data-rate="4.2"></dash-bar>
// change data in the attribue
export class DashBar extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        const rate = this.dataset.rate
        // render all 5 gray bar
        for (let i = 0; i <=4 ; i++){
            const contentHtml = `
                <div class="bar-present h-2.5 w-8 bg-gray-400"></div>
            `
            this.innerHTML += contentHtml
        }

        // render orange bar check condition to give percent to bar
        const barInner = document.createElement('div')
        barInner.classList = "flex absolute gap-0.5 left-0 top-0"
        let percent = parseFloat(rate) - parseInt(rate)
        let intRate = parseInt(rate)
        percent = parseInt(percent * 100)
        for (let i = 1; i <= intRate; i++){            
            let contentHtml = `
                <div class="bar-inner h-2.5 w-8 relative ">
                    <div class="h-2.5 w-full bg-orange-400"></div>
                </div>
            `
            if (i == intRate  && percent > 0 ){
                contentHtml += `<div class="bar-inner h-2.5 w-8 relative ">
                    <div class="h-2.5 w-[${percent}%] bg-orange-400"></div>
                </div>
                `
            }
            barInner.innerHTML += contentHtml            
        }
        this.classList += " flex gap-0.5 relative item-center justify-center"
       
        this.append(barInner) 
    }
}


