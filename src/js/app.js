const menuBar = document.querySelector('#menu-bar');
const navbar = document.querySelector('.navbar');

menuBar.addEventListener('click',(evt)=>{
  menuBar.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  cartWrap.classList.remove('active');
})

const cartWrap = document.querySelector(".cart-wrap");
const cartBtn = document.querySelector("#cart-btn");

cartBtn.addEventListener('click',(evt)=>{
  evt.preventDefault();
  cartWrap.classList.toggle('active');
  menuBar.classList.remove('fa-times');
  navbar.classList.remove('active');
})
// scroll 
window.onscroll= ()=>{
  menuBar.classList.remove('fa-times');
  navbar.classList.remove("active");
  //cartWrap.classList.remove('active');
  if(window.scrollY > 160){
    document.querySelector('#scroll-top').classList.add('active')
  }else{
    document.querySelector('#scroll-top').classList.remove('active')
  }
}