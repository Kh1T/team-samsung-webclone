const cardData = [
        {
            "title": "Select Galaxy S24 Ultra",
            "image": "../../assets/images/continue-shoping/image/featured/image-1.png"
        },
        {
            "title": "Exclusive Offer",
            "image": "../../assets/images/continue-shoping/image/featured/image-1.png",
            'button': ""
        },
        {
            "title": "Exclusive Offer",
            "image": "../../assets/images/continue-shoping/image/featured/image-1.png"
        },
        {
            "title": "Exclusive Offer",
            "image": "../../assets/images/continue-shoping/image/featured/image-1.png"
        },
        {
            "title": "Offer Ends Apr 11",
            "image": "../../assets/images/continue-shoping/image/featured/image-1.png"
        },
        {
            "title": "",
            "image": "../../assets/images/continue-shoping/image/featured/image-1.png"
        },
        
    ];

for (i of cardData) {
    console.log(i.image);
}

// class Card extends HTMLElement {
//     constructor() {
//         super();
//     }

//     connectedCallback() {
//         this.innerHTML = `
//         <div class="card bg-gray-100 w-full sm:w-[350px] rounded-xl border-2  p-4 text-wrap flex flex-col gap-4  shadow-2xl flex-none items-center ">
//         <img class=" h-64"  src="${img}" alt="">
        
//         <div class="flex flex-col gap-2">

//             <p class="text-white bg-blue-500 w-2/3 text-lg p-2 rounded-xl font-bold text-center">${type}</p>
            
//             <h2 class="font-bold">Save up to $900</h2>
//             <p class="w-2/3">Get up to $750 instant trade-in credit and $150 off. From $1,149.99 $1,299.99 before eligible trade-in.</p>
//             <button class="bg-blue-700  text-white py-4 px-6 rounded-3xl text-xs w-1/3 "><a href="#">${button}</a></button>
//         </div>
//     </div>
//     `
//     }
// }
