// Parallax Effects
const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionX = offset * (-0.3) - 100 + "px";
});

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    offset -= 3100;
    parallax1.style.backgroundPositionY = offset * (0.1) + "px";
});

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    offset -= 4800;
    parallax2.style.backgroundPositionY = offset * (-0.1) + "px";
});

// Close Mobile Menu After Clicking a Link
function myFunction() {
    document.getElementById("check").checked = false;
}

// Pop-Up Functionality for "MAP & DETAILS"
const mapDetailsBtn = document.getElementById('map-details-btn');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');

mapDetailsBtn.addEventListener('click', () => {
    popup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

// Countdown Timer to Event Date
const eventDate = new Date("April 20, 2025 20:00:00").getTime();

const countdownTimer = setInterval(() => {
    const now = new Date().getTime();
    const timeRemaining = eventDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

    if (timeRemaining < 0) {
        clearInterval(countdownTimer);
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
    }
}, 1000);

// Gallery Functionality: Enlarge Images on Click
// Enlarge Image on Click
document.querySelectorAll('.gallery-item').forEach(item => {
  const thumbnail = item.querySelector('.gallery-thumbnail');

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

window.addEventListener("scroll", reveal);