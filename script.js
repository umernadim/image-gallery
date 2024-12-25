// Select necessary elements
const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeBtn = document.getElementById("closeBtn");

// Open lightbox on image click
galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    lightbox.style.display = "flex"; 
    lightboxImage.src = image.src; 
  });
});

// Close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none"; 
});

// Close lightbox when clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImage && e.target !== closeBtn) {
    lightbox.style.display = "none"; 
  }
});