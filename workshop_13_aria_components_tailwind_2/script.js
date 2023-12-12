
let openDialogButton = document.getElementById("openDialogButton");
let accessibleDialogEl = document.getElementById("accessibleDialog");
let closeDialogBtn = document.getElementById("closeDialogBtn");
let overlayEl = document.getElementById("overlay");

openDialogButton.addEventListener("click", (e) => {
  element = e.target;

  element.ariaExpanded = "true";

  accessibleDialogEl.removeAttribute("hidden");
/*   accessibleDialogEl.setAttribute("aria-modal", "true"); */
  overlayEl.style.display = "block";

  closeDialogBtn.focus(); 


  openDialogButton.style.display = "none";
})

closeDialogBtn.addEventListener("click", (e) => {
  closeDialog();
})

/* same as above */ 
overlayEl.addEventListener("click", (e) => {
  closeDialog();
})

accessibleDialogEl.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    closeDialog();
  }
})


function closeDialog() {
  accessibleDialogEl.setAttribute("hidden", "");

  /* accessibleModalEl.setAttribute("aria-modal", "false"); */
  overlayEl.style.display = "none";

  openDialogButton.ariaExpanded = "false";
  openDialogButton.style.display = "flex";

  openDialogButton.focus(); 
}