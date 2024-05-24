const products = [
    {
        name: "Galaxy Buds2 Pro",
        image: "../../assets/images/galaxy-ai/bud-1.png",
    },
    {
        name: "Galaxy Buds FE",
        image: "../../assets/images/galaxy-ai/bud-2.png",
    },
];


const exploreContainer = document.querySelector(".carousel-container");
const btnExplore = document.querySelector(".carousel-btn-container");

let positonExplore = 0;
let postionHero = 0;
let btnTab;

products.forEach((item) => {
    const productItem = document.createElement("div");
    productItem.classList =
        "flex w-11/12 flex-none flex-col items-center justify-center gap-6 p-2";
    productItem.innerHTML = `
    <div class="flex flex-col p-4 justify-between bg-gray-50 gap-8 rounded-xl items-start h-fit">
    <div class="flex flex-col gap-4">
        <img class="object-cover bg-cover h-full w-fit" src="${item.image}" alt="galaxy watch6 classic">
        <a class="font-semibold text-2xl href="#">${item.name}</a>
    </div>
    <div class=" flex p-4 justify-start w-full text-sm items-center gap-2 font-semibold">
     <a href="#">Buy Now </a>
     <img src="../../assets/images/galaxy-ai/icon/chevron-right.svg" alt="icon">
    </div>
</div>`;
    exploreContainer.appendChild(productItem);
});

products.forEach((item) => {
    const butonItem = document.createElement("div");
    butonItem.innerHTML = `
      <button onclick="changePosition()" class="btn-explore py-2">
            <div class="mx-4 size-4 rounded-full bg-gray-500"></div>
     </button>`;
    btnExplore.appendChild(butonItem);
});

function changePosition() {
    exploreContainer.style.transform = `translateX(-${positonExplore}%)`;
    if (positonExplore < 90 * (products.length - 1)) {
        positonExplore += 90;
    } else {
        positonExplore -= positonExplore;
    }
}
