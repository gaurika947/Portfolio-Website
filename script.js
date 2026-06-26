// Particle animation canvas
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 36;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.2 + 0.4;
        this.speedX = (Math.random() - 0.5) * 0.35;
        this.speedY = (Math.random() - 0.5) * 0.35;
        this.opacity = Math.random() * 0.35 + 0.18;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
    }

    draw() {
        // Soft, warm-tinted particles that blend with the animated gradient
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Initialize particles
for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

// Animation loop
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();

// Handle window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Counter animation for achievements
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    let count = 0;
    const increment = target / 50;

    const updateCount = () => {
        if (count < target) {
            count += increment;
            counter.textContent = Math.floor(count);
            setTimeout(updateCount, 30);
        } else {
            counter.textContent = target;
        }
    };

    // Start animation when element is in view
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            updateCount();
            observer.unobserve(entries[0].target);
        }
    });

    observer.observe(counter);
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission (basic example)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Certificate lightbox & download handlers
const viewBtn = document.getElementById('view-certificate');
const downloadBtn = document.getElementById('download-certificate');
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
const lightboxImg = document.createElement('img');
lightbox.appendChild(lightboxImg);
document.body.appendChild(lightbox);

function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add('open');
}

function closeLightbox() {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
}

lightbox.addEventListener('click', closeLightbox);

const previewImg = document.getElementById('cs50p-img');
if (viewBtn && previewImg) {
    viewBtn.addEventListener('click', () => openLightbox(previewImg.src));
}

// ensure download uses proper link
if (downloadBtn && previewImg) {
    downloadBtn.addEventListener('click', (e) => {
        // nothing extra needed; anchor has download attribute
    });
}

// Feedback form handler
const feedbackForm = document.querySelector('.feedback-form');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = feedbackForm.elements['name'].value || 'Friend';
        alert(`Thanks, ${name}! Your feedback has been received.`);
        feedbackForm.reset();
    });
}
