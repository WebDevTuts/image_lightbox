// Add an event listener for document click
document.addEventListener('click', lightClick);

function lightboxClick(event) {
  var elem = event.target,
      elemID = elem.getAttribute('id'),
      lightboxImg = document.getElementById('lightbox-image'),
      lightbox = document.getElementById('lightbox-overlay'),
      newImg = new Image();
}
