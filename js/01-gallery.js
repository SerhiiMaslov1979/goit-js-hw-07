import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const items = [];

galleryItems.forEach((element) => {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");

  galleryLink.href = element.original;

  const galleryImg = document.createElement("img");
  galleryImg.classList.add("gallery__image");

  galleryImg.src = element.preview;

  galleryImg.setAttribute("data-source", element.original);

  galleryImg.alt = element.description;

  galleryItem.append(galleryLink);
  galleryLink.append(galleryImg);
  items.push(galleryItem);
});

gallery.append(...items);
// _____________________________________________________________________

document.addEventListener("click", (element) => {
  element.preventDefault();

  if (element.target.nodeName !== "IMG") {
    return;
  }

  const imgSelected = element.target.getAttribute("data-source");

  const template = basicLightbox.create(
    `
    <img src="${imgSelected}" width="800" height="600">
    `,

    {
      onShow: () => {
        document.addEventListener("keydown", closeModal);
      },
      onClose: () => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );

  template.show();

  function closeModal(element) {
    if (element.key === "Escape") {
      template.close();
    }
  }
});
