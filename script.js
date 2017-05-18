// Add an event listener for document click
document.addEventListener('click', lightClick);

function lightboxClick(event) {
  var elem = event.target,
      elemID = elem.getAttribute('id'),
      lightboxImg = document.getElementById('lightbox-image'),
      lightbox = document.getElementById('lightbox-overlay'),
      newImg = new Image();

  if (elem.hasAttribute('data-lightbox')) {
    event.preventDefault();

    newImg.onload = function() {
      lightboxImg.src = this.src;
    }

    lightboxImg.src = '';
    newImg.src = elem.getAttribute('data-lightbox');
    lightbox.classList.add('visible');
  }
}
