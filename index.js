// subscribe button

const subscribeForm = document.getElementById('subscribeForm');

subscribeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    alert(`Thank you for subscribing! Your email: ${email}`);
    subscribeForm.reset();
});

// logo move 

const logo = document.getElementById("logo");
let position = 0;

function moveLogos() {
    position -= 2;
    logo.style.transform = `translateX(${position}px)`;

    const containerWidth = logo.scrollWidth;
    if (Math.abs(position) >= containerWidth / 2) {
        position = 0;
    }

    requestAnimationFrame(moveLogos);
}

moveLogos();