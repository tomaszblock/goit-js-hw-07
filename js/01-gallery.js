import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galerry = document.querySelector(".gallery");

const items = [];

for (let i = 0; i < galleryItems.length; i++) {
  const newItem = document.createElement("div");
  newItem.classList.add("gallery__item");
  items.push(newItem);
}
galerry.append(...items);

const itemList = document.querySelectorAll(".gallery__item");

for (let i = 0; i < itemList.length; i++) {
  const newLink = document.createElement("a");
  newLink.classList.add("gallery__link");
  newLink.setAttribute("href", galleryItems[i].original);
  itemList[i].append(newLink);
}

const linksList = document.querySelectorAll(".gallery__link");

for (let i = 0; i < linksList.length; i++) {
  const newImg = document.createElement("img");
  newImg.setAttribute("src", galleryItems[i].preview);
  newImg.setAttribute("data-source", galleryItems[i].original);
  newImg.setAttribute("alt", galleryItems[i].description);
  newImg.classList.add("gallery__image");
  linksList[i].append(newImg);
}
