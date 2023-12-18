// Ouvrir la modale et afficher l'image en grand
var modal = document.getElementById("modal");
var modalImage = document.getElementById("modal-image");
var closeModal = document.getElementById("close");
var imageToZoom = document.getElementById("sav");

imageToZoom.onclick = function() {
  modal.style.display = "block";
  modalImage.src = this.src;
}

// Fermer la modale en cliquant sur la croix
closeModal.onclick = function() {
  modal.style.display = "none";
}

// Fermer la modale en cliquant en dehors de l'image
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
