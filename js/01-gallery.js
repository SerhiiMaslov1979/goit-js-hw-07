import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення
//  у модальному вікні. Подивися демо відео роботи галереї.

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого
//  шаблону елемента галереї.
// 2. Реалізація делегування на div.gallery і отримання url великого зображення.
// 3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.
// 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// 5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

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

// console.log(galleryItems);
