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

window.addEventListener("scroll", reveal);