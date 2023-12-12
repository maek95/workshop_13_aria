
let openModalButtonEl = document.getElementById("openModalButton");
let accessibleModalEl = document.getElementById("accessibleModal");
let closeModalBtnEl = document.getElementById("closeModalBtn");
let overlayEl = document.getElementById("overlay");

openModalButtonEl.addEventListener("click", (e) => {
  element = e.target;

  element.ariaExpanded = "true";

  accessibleModalEl.removeAttribute("hidden");
  /* accessibleModalEl.style.display("flex"); */
 /*  accessibleModalEl.setAttribute("aria-modal", "true"); */
  overlayEl.style.display = "block";
  closeModalBtnEl.focus(); 


  openModalButtonEl.style.display = "none";
})



closeModalBtnEl.addEventListener("click", (e) => {
  closeDialog();
})

accessibleModalEl.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    closeDialog();
  }
})

/* same as above */ 
overlayEl.addEventListener("click", (e) => {
  closeDialog();

})

function closeDialog() {
  accessibleModalEl.setAttribute("hidden", "");

  /* accessibleModalEl.setAttribute("aria-modal", "false"); */
  overlayEl.style.display = "none";

  openModalButtonEl.ariaExpanded = "false";
  openModalButtonEl.style.display = "flex";

  openModalButtonEl.focus(); 
}

