const foryouContainer = document.getElementById('foryou-card-container')
const mobileContainer = document.getElementById('mobile-container')
const tvContainer = document.getElementById('tv-container')
const homeContainer = document.getElementById('home-container')
const susContainer = document.getElementById('sus-container')
const heroContainer = document.getElementById('hero-container')
const imgExplor = document.getElementById('img-explore')
// const heroSmallScreenBtn = document.querySelectorAll('hero-btn-container button')
const tvHeader = document.getElementById('tv-header')
const heroBtn = document.querySelectorAll('.hero-btn');
const heroBtnContainer = document.querySelectorAll('#hero-btn-container button')
const btnExploreContainer = document.querySelectorAll('.explore-btn-container button')
const heroBtnLeft = document.querySelector('#left')
const heroBtnRight = document.querySelector('#right')
const heroImgContainer = document.querySelector('.img-container')
const exploreContainer = document.querySelector('#explore-container')

const btnForYou = document.querySelectorAll('.btn-forYou')
const btnHome = document.querySelectorAll('.btn-home')

const btnMobile = document.querySelectorAll('.btn-mobile')
const btnTv = document.querySelectorAll('.btn-tv')
const btnSus = document.querySelectorAll('.btn-sus')

let positonExplore = 0
let postionHero = 0

let btnTab;


function tabCarousel(e) {
    console.log('sa');
    btnTab = e
}


console.log(btnTab);


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

heroBtnContainer.forEach((e, i) => {
    
    btnMoving(e, postionHero, heroContainer)
    postionHero += 20
})


// console.log(heroBtnContainer);


const imgExplorPath = [
'assets/images/home/explore/explore.png',
'assets/images/home/explore/img-1.jpg',
'assets/images/home/explore/img-2.jpg',
'assets/images/home/explore/img-3.jpg',
'assets/images/home/explore/img-4.jpg',
]
let position = 0;


// Hero Section Carousel

const transitionHeroPage = (condition) => {
    heroImgContainer.classList.remove(`translate-x-[${position}%]`)
    if (condition == 'right' && position > -80) {
        position += -20
    } else if (condition == "left" && position < 0) {
        position += 20
    }
    heroImgContainer.classList.add(`translate-x-[${position}%]`)
    console.log(heroImgContainer);
}

heroBtnLeft.addEventListener('click', () => transitionHeroPage('left'))
heroBtnRight.addEventListener('click', () => transitionHeroPage('right'))

function caroselTab(container, btn) {
    btn.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            console.log(1);
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
caroselTab(mobileContainer, btnMobile)
caroselTab(tvContainer, btnTv)
caroselTab(homeContainer, btnHome)
caroselTab(susContainer, btnSus)




