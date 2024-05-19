
const smartphoneFeatureData = [
    {
        title: "Galaxy AI",
        desc: "Unleash astounding new ways to create and connect.",        
    },
    {
        title: "Camera",
        desc: "Crystal-clear content. Stunning details. True-to-life color. With Galaxy S24 Series cameras, what you see is what you get.",        
    },
    {
        title: "Design",
        desc: "The Galaxy S24 Series is an absolute marvel of design with bigger displays, ultra-slim bezels and unique colors inspired by nature.",        
    },
    {
        title: "Performance",
        desc: "Blazing-fast processors and a new heat dissipation system gives you all the power you need for all the gameplay you want.",        
    },
    {
        title: "Galaxy SIM flexibility",
        desc: "Switch phone numbers, travel stress-free and more with Galaxy eSIM and Dual SIM capabilities.",        
    },
]

const sideContainer = document.querySelector(".side-container")
smartphoneFeatureData.forEach((data,i)=>{
    const innerHTML =  `
        <side-article listNumber="0${i+1}" desc="${data.desc}" title=${data.title}></side-article>
    `
    sideContainer.innerHTML += innerHTML
    // const sideArticle = document.createElement('side-article');
    // sideArticle.setAttribute('listNumber', `0${i + 1}`);
    // sideArticle.setAttribute('desc', data.desc);
    // sideArticle.setAttribute('title', data.title)
    // sideContainer.appendChild(sideArticle);
})
sideContainer.classList += " items hidden sm:flex flex-col gap-4"

const articles = document.querySelectorAll('side-article')


function articleHoverHandler(info){

    articles.forEach(article=>{
        const info = article.querySelector(".info")
        info.classList.add('h-0')
    })
    info.classList.remove('h-0')
    info.classList.add('max-h-96')
}


articles.forEach(article=>{
    // info.classList.add("h-0")
    const info = article.querySelector(".info")
    article.addEventListener('mouseover', articleHoverHandler.bind(null, info))
})
const firstInfo = articles[0].querySelector(".info")
console.log(firstInfo);
firstInfo.classList.remove("h-0")
firstInfo.classList.add("max-h-[300px]")


