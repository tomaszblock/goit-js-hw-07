import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

// //Option 1

for (let item of galleryItems) {
  let newItem = document.createElement("div");
  newItem.classList.add("gallery__item");

  let newLink = document.createElement("a");
  newLink.classList.add("gallery__link");
  newLink.setAttribute("href", item.original);

  let newImage = document.createElement("img");
  newImage.classList.add("gallery__image");
  newImage.setAttribute("src", item.preview);
  newImage.setAttribute("alt", item.description);
  newImage.setAttribute("data-source", item.original);

  newLink.append(newImage);
  newItem.append(newLink);
  gallery.append(newItem);
}

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const window = basicLightbox.create(
    `<img src=${e.target.getAttribute(
      "data-source"
    )} alt=${e.target.getAttribute("alt")}>`,
    {
      closable: false,
    }
  );

  window.show();
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") {
      return;
    } else {
      window.close();
    }
  });
});

document.addEventListener("keydown", (e) => {
  console.log({
    key: e.key,
    code: e.code,
  });
});

//option 2

// for (let i = 0; i < galleryItems.length; i++) {
//   const newItem = document.createElement("div");
//   newItem.classList.add("gallery__item");
//   gallery.append(newItem);
//   const itemList = gallery.lastElementChild;
//   console.log(itemList)
//   const newLink = document.createElement("a");
//   newLink.classList.add("gallery__link");
//   newLink.setAttribute("href", galleryItems[i].original);
//   itemList.append(newLink);
//   const linksList = itemList.lastElementChild;
//   const newImg = document.createElement("img");
//   newImg.setAttribute("src", galleryItems[i].preview);
//   newImg.setAttribute("data-source", galleryItems[i].original);
//   newImg.setAttribute("alt", galleryItems[i].description);
//   newImg.classList.add("gallery__image");
//   linksList.append(newImg);
//   // const instance = basicLightbox.create(itemList);
//   // itemList.onclick = instance.show;

// }

//option 3

// for (let i = 0; i < galleryItems.length; i++) {
//   const newItem = document.createElement("div");
//   newItem.classList.add("gallery__item");
//   items.push(newItem);
// }
// galerry.append(...items);

// const itemList = document.querySelectorAll(".gallery__item");

// for (let i = 0; i < itemList.length; i++) {
//   const newLink = document.createElement("a");
//   newLink.classList.add("gallery__link");
//   newLink.setAttribute("href", galleryItems[i].original);
//   itemList[i].append(newLink);
// }

// const linksList = document.querySelectorAll(".gallery__link");

// for (let i = 0; i < linksList.length; i++) {
//   const newImg = document.createElement("img");
//   newImg.setAttribute("src", galleryItems[i].preview);
//   newImg.setAttribute("data-source", galleryItems[i].original);
//   newImg.setAttribute("alt", galleryItems[i].description);
//   newImg.classList.add("gallery__image");
//   linksList[i].append(newImg);
// }
