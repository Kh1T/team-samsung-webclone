const products = [
    {
        name: "Galaxy S24 Ultra",
        image: "../../assets/images/galaxy-ai/galaxy-s-series-01.png",
 
    },
    {
        name: "Galaxy S24 | S24+",
        image: "../../assets/images/galaxy-ai/galaxy-s-series-02.png",

    },
    {
        name: "Galaxy S23 Ultra",
        image: "../../assets/images/galaxy-ai/galaxy-s-series-03.png",

    },
    {
        name: "Galaxy S23 | S23+",
        image: "../../assets/images/galaxy-ai/galaxy-s-series-04.png",
   
    },
    {
        name: "Galaxy S23 FE",
        image: "../../assets/images/galaxy-ai/galaxy-s-series-05.png",

    }
]
const productList = document.getElementById("productList")

products.forEach(product => {
    const productItem = document.createElement('div')
    productItem.classList.add('product-list')
    productItem.classList.add("w-full")
    productItem.innerHTML = `
    <div class="flex flex-col p-4 justify-between bg-gray-50 rounded-xl items-between h-[250px] px-2">
        <div>
            <img class="object-cover h-fit w-fit" src="${product.image}" alt="galaxy watch6 classic">
            <a class="font-semibold text-2xl" href="#">${product.name}</a>

        </div>
        <div class=" flex p-4 justify-start text-sm items-center gap-2 font-semibold">
         <a href="#">Buy Now </a>
         <img src="../../assets/images/galaxy-ai/icon/chevron-right.svg" alt="icon">
        </div>
    </div>
    `
    productList.appendChild(productItem)
})