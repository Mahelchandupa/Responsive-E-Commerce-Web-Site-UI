
/* Header */

const menuIcon = document.querySelector(".menu_icon")
const navContainer = document.querySelector("nav")

menuIcon.addEventListener('click', () =>{
    navContainer.classList.toggle('active')
})

/* Single Product */

const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const productname = urlParams.get('name')
console.log(productname);

const image = urlParams.get('image')
console.log(image);

const cat = urlParams.get("cat")
console.log(cat)

const price = urlParams.get("price")

const ProductImg = document.querySelector(".product-img img")
const ProductName = document.querySelector(".pro-name")
const ProductCat = document.querySelector(".pro-cat")
const ProductPrice = document.querySelector(".pro-price")


ProductImg.src= image
ProductName.innerHTML = `Home / ${cat} / ${productname}`
ProductPrice.innerHTML = price
ProductCat.innerHTML = `Category: ${cat}`


/* change quantity */
const IncressBtn = document.querySelector(".incress")
const DecressBtn = document.querySelector(".decress")
const QuntityInputField = document.querySelector(".quantity")

let quantity = 1

IncressBtn.addEventListener('click', () =>{
    if(quantity !== 10){
       quantity = quantity += 1;
    }
   QuntityInputField.value = quantity
})
DecressBtn.addEventListener('click', () =>{
    if(quantity !== 1){
        quantity = quantity -= 1;
    }
    QuntityInputField.value = quantity
})


/* Product Details - Review */
const reviewTitle = document.querySelector('.review-title')
reviewTitle.innerHTML = `Be the first to review “${productname}”`

const reviewBtn = document.querySelector(".review-btn")
const descriptionBtn = document.querySelector(".description-btn")
const reviewContainer = document.querySelector('.review')
const descriptionContainer = document.querySelector('.description')

reviewBtn.addEventListener('click', () =>{
    descriptionContainer.classList.remove('active')
    reviewContainer.classList.add('active')
    
    descriptionBtn.classList.remove('active')
    reviewBtn.classList.add('active')

})

descriptionBtn.addEventListener('click', () =>{
    reviewContainer.classList.remove('active')
    descriptionContainer.classList.add('active')
    
    reviewBtn.classList.remove('active')
    descriptionBtn.classList.add('active')
})