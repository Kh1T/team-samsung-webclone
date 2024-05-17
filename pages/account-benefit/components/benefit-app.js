    class MyElement extends HTMLElement {
        constructor() {
        super();
        console.log('Element created');
        
        }

        // Called when the element is connected to the DOM
        connectedCallback() {
            // const title = this.dataset.title
            this.innerHTML = `
        <div class="flex flex-col w-full min-h-[512px] md:border-l-[24px] border-transparent justify-center items-center p-10 space-y-2">
            <img class="image w-40 my-20" src= >
            <h3 class = "appname text-2xl font-medium"></h3>
            <p class = 'text text-center mb-9'></p>
            <ul class = 'flex pb-11'>
                <button class="bg-slate-500 h-2 "></button>
            </ul>
            <p class = 'pb-1 border-b-[0.5px] border-black'><a href='#'>LEARN MORE</a></p>
        </div>
        `;
        console.log('Element connected to the DOM');
        }

        // Custom method to update content
        updateElementContent(data) {
        const img = this.querySelector('.image');
        const appName =this.querySelector('.appname')
        const text = this.querySelector('.text');
        
        if (data.src) {
            img.src = data.src;
        } else {
            img.removeAttribute('src');
        }

        if (data.text) {
            text.textContent = data.text;
        } else {
            text.textContent = 'Default text';
        }

        if (data.appName) {
            appName.textContent = data.appName;
        } else {
            appName.textContent = 'Default text';
        }

        }
    }

    // Define the custom element
    customElements.define('benefit-app', MyElement);

    // Example data groups
    const dataGroup1 = {
        src: '../../assets/images/account-benefit/rewards-icon.png',
        appName: 'Samsung Rewards',
        text: 'Earn rewards for the things you do every day.'
    };

    const dataGroup2 = {
        src: '../../assets/images/account-benefit/galaxy-store-icon.png',
        appName: 'Galaxy Store',
        text: 'Play the latest games, unlock ultimate exclusives and score the best offers.'
    };

    const dataGroup3 = {
        src: '../../assets/images/account-benefit/samsung-pay-icon.png',
        appName: 'Samsung Pay',
        text: "Use the most rewarding mobile wallet.Just tap and go for easy payment."
    };

    // Populate the elements with their respective data groups

        const element1 = document.getElementById('samsung-rewards');
        const element2 = document.getElementById('galaxy-store');
        const element3 = document.getElementById('samsung-pay');


        element1.updateElementContent(dataGroup1);
        element2.updateElementContent(dataGroup2);
        element3.updateElementContent(dataGroup3);

        
