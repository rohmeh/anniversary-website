// Enlarge Image on Click
document.querySelectorAll('.new-gallery-item').forEach(item => {
    const thumbnail = item.querySelector('.new-gallery-thumbnail');

    thumbnail.addEventListener('click', () => {
        // Create an enlarged image modal
        const enlargedImage = document.createElement('div');
        enlargedImage.classList.add('enlarged-image');
        enlargedImage.innerHTML = `<img src="${thumbnail.src}" alt="Enlarged Image">`;
        document.body.appendChild(enlargedImage);

        // Show the modal
        enlargedImage.style.display = 'flex';

        // Close the modal when clicked outside the image
        enlargedImage.addEventListener('click', () => {
            enlargedImage.remove();
        });
    });
});

// Reveal Animation
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

function switchTab(tab) {
    const videosContent = document.getElementById("videos-content");
    const photosContent = document.getElementById("photos-content");
    const buttons = document.querySelectorAll(".tab-button");
  
    // Hide both contents
    videosContent.classList.remove("active");
    photosContent.classList.remove("active");
    videosContent.style.display = "none";
    photosContent.style.display = "none";
  
    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove("active"));
  
    // Show selected tab
    if (tab === "videos") {
      videosContent.classList.add("active");
      videosContent.style.display = "block";
      buttons[0].classList.add("active"); 
    } else {
      photosContent.classList.add("active");
      photosContent.style.display = "block";
      buttons[1].classList.add("active"); 
    }
  }

window.addEventListener("scroll", reveal);