import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

const parent = document.querySelector(".gallery");

const result = [];

for (let item of galleryItems) {
  let newItem = document.createElement("li");
  let newLink = document.createElement("a");
  newLink.classList.add("gallery__item");
  newLink.setAttribute("href", item.original);

  let newImage = document.createElement("img");
  newImage.classList.add("gallery__image");
  newImage.setAttribute("src", item.preview);
  newImage.setAttribute("alt", item.description);

  newLink.append(newImage);
  newItem.append(newLink);
  result.push(newItem);
}

parent.append(...result)

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});
