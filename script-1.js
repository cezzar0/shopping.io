









let burger = document.querySelector(".burger") ;
let link = document.querySelector('.ul-header') ;

burger.addEventListener( "click" , () => {
  link.style.transition =" 0.6s "
  if (link.classList.contains("show")) {
    link.classList.remove("show") ;
  }else {
    link.classList.add("show") ;
  }
})















































