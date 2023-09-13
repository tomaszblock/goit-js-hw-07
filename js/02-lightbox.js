import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
// Change code below this line

console.log(galleryItems);

const parent = document.querySelector(".gallery");

for (let item of galleryItems) {
  
    let newLink = document.createElement("a");
    newLink.classList.add("gallery__item");
    newLink.setAttribute("href", item.original);
  
    let newImage = document.createElement("img");
    newImage.classList.add("gallery__image");
    newImage.setAttribute("src", item.preview);
    newImage.setAttribute("alt", item.description);
  
    parent.append(newLink);
    newLink.append(newImage);
  }

  (function() {
    var $gallery = new SimpleLightbox('.gallery a', {});
})();
