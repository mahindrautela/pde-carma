const dialog = document.querySelector("#rollout-dialog");
const dialogImage = document.querySelector("#rollout-dialog-image");
const dialogTitle = document.querySelector("#rollout-dialog-title");
const closeButton = dialog.querySelector(".dialog-close");
const previews = document.querySelectorAll(".result-preview");

function closeDialog() {
  dialog.close();
}

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    const image = preview.querySelector("img");
    const caption = preview.closest("figure").querySelector("figcaption");

    dialogImage.src = image.currentSrc || image.src;
    dialogImage.alt = image.alt;
    dialogTitle.textContent = caption.textContent;
    document.body.classList.add("modal-open");
    dialog.showModal();
  });
});

closeButton.addEventListener("click", closeDialog);

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    closeDialog();
  }
});

dialog.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  dialogImage.removeAttribute("src");
});
