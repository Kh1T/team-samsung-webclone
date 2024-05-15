
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
}

const orderSummary = document.getElementById("order-summary");
const chevron = document.getElementById("chevron");
const expandButton = document.getElementById("expand-button");

const chevron2 = document.getElementById("chevron-2");

const toggleSummaryHandle = () => {
    orderSummary.classList.toggle("hidden");
    expandButton.classList.toggle("bg-gray-50");
    chevron.classList.toggle("rotate-180");
}
chevron.addEventListener("click", toggleSummaryHandle)

const toggleSummaryHandle2 = () => {
    chevron2.classList.toggle("rotate-180")
}

chevron2.addEventListener("click", toggleSummaryHandle2)




// frequently bought together
const products = [
    {
        name: "Galaxy Watch6 Classic, 47mm",
        image: "../../assets/images/cart/watch6.webp",
        price1: "$299.99",
        price2: "$1000",
    },
    {
        name: "Galaxy Watch6, 40mm, Gold, BT",
        image: "../../assets/images/cart/watch6-2.webp",
        price1: "$399.99",
        price2: "$1000",
    },
    {
        name: "12W Wireless Charger Duo wit",
        image: "../../assets/images/cart/charger.webp",
        price1: "$89.99",
        price2: "$1280",
    },
    {
        name: "Galaxy SmartTag2, White",
        image: "../../assets/images/cart/tag.webp",
        price1: "$29.99",
        price2: "$160",
    }
]
const productList = document.getElementById("productList")

products.forEach(product => {
    const productItem = document.createElement('div')
    productItem.classList.add('product-list')
    productItem.classList.add("flex-none", "md:w-1/4", "px-2", "w-1/3")
    productItem.innerHTML = `
    <div>
    <img class="object-cover" src="${product.image}" alt="galaxy watch6 classic">
            <a class="font-semibold" href="#">${product.name}</a>
            <div class="flex justify-center gap-1 mb-5 mt-3">
                <p class="font-light">${product.price1}</p>
                <p class="text-gray-500 line-through font-light">${product.price2}</p>
            </div>
        <a class="font-bold underline" href="#">Add to cart</a>
    </div>
    `
    productList.appendChild(productItem)
})
