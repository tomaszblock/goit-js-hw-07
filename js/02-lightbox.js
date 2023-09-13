import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

const parent = document.querySelector(".gallery");

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
  parent.append(newItem);
}

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});
