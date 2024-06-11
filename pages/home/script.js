const foryouContainer = document.getElementById('foryou-card-container')

const imgExplor = document.getElementById('img-explore')


const btnExploreContainer = document.querySelectorAll('.explore-btn-container button')

const exploreContainer = document.querySelector('#explore-container')
const btnForYou = document.querySelectorAll('.btn-forYou')


let positonExplore = 0


function btnStyle(btn,color, border) {
    btn.style.backgroundColor = `${color}`;
    btn.style.border = `${border}`;
}

function btnMoving(btn,pos,container){
    btn.addEventListener("click",()=>{
        container.style.transform = `translateX(-${pos}%)`
    })
}


btnExploreContainer.forEach((e, i) => {
    btnMoving(e, positonExplore, exploreContainer)
    positonExplore+=90
})





const imgExplorPath = [
'assets/images/home/explore/explore.png',
'assets/images/home/explore/img-1.jpg',
'assets/images/home/explore/img-2.jpg',
'assets/images/home/explore/img-3.jpg',
'assets/images/home/explore/img-4.jpg',
]



// Hero Section Carousel


        // Hero Section Carousel
    

        function caroselTab(container, btn) {
            console.log('hi');
            btn.forEach((btn, i) => {
                btn.addEventListener('click', () => {
                    container.style.transform = `translateX(-${i}00%)`
                } )
            })
        }

        function caroselSmall(container, btn) {
            btn.forEach((btn, i) => {
                btn.addEventListener('click', () => {
                    container.style.transform = `translateX(-${i + 8}0%)`
                } )
            })
        }

        
caroselTab(foryouContainer, btnForYou)

        
const exploreItemLinks = document.querySelectorAll(".explore-item-link");
exploreItemLinks.forEach((link,i )=> {
    link.addEventListener('mouseenter', ()=>onItemHover(i));
    link.addEventListener('mouseleave', ()=>onItemHover(i));
});

function onItemHover(i) {            
    imgExplor.src = imgExplorPath[i]
    exploreItemLinks[i].classList.toggle("border-t-4");
    const element = exploreItemLinks[i].lastElementChild.lastElementChild;
    if (element.hasAttribute('hidden')) {
        element.removeAttribute('hidden');
    } else {
        element.setAttribute('hidden', '');
    }
}