
// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.
function activateGallery() {
  // let thumbnails = document.querySelector("#gallery-thumbs").
  //                           querySelectorAll("img");
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo img");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      // Set clicked image as main image.
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);

      let currentClass = 'current'
      document.querySelector('.current').classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);
    });
  });
}
