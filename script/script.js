
var link=document.querySelector(".contact-us");
var popup=document.querySelector(".popup-contact");
var close=popup.querySelector(".popup-contact-close");


link.addEventListener("click",function(event){
  event.preventDefault();
  console.log("ОТКРЫЛ ФОРМУ СВЯЗИ");
  popup.classList.add("popup-contact-show");
});


close.addEventListener("click",function(event){
  event.preventDefault();
  console.log("ЗАКРЫЛ ФОРМУ СВЯЗИ");
  popup.classList.remove("popup-contact-show");
});
