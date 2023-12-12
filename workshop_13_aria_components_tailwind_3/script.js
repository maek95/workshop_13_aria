let menuButtonEl = document.getElementById("menuButton");
let menuContentEl = document.getElementById("menuContent");
let firstItemEl = document.getElementById("firstItem");

menuButtonEl.addEventListener("click", (e) => { 

  menuContentEl.classList.toggle("hidden"); /* toggle the tailwind class hidden */
  firstItemEl.focus(); 


  /* this requires two clicks, maybe something to do with tailwind? */
  /* if ( menuContentEl.style.display == "none" ) {
    menuContentEl.style.display = "block";
  } else {
    menuContentEl.style.display = "none";
  } */
});