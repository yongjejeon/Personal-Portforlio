document.addEventListener('DOMContentLoaded', initialize);

function initialize() {
    console.log('Initialization completed. Setting up event handlers.');
    setupEventHandlers();
}

function setupEventHandlers() {
    const flashEffect = document.getElementById('flashEffect');
    document.body.addEventListener('click', handleBodyClick);
    document.querySelector('.navbar').addEventListener('click', handleNavLinkClick);
    document.querySelector('.contact-form').addEventListener('submit', sendEmail); // Attach event handler for the contact form
}

function handleBodyClick(e) {
    if (e.target.id === 'goToSlide2' || e.target.closest('#goToSlide2')) {
        e.preventDefault();
        handleMainButtonClick();
    } else if (e.target.classList.contains('more-details') || e.target.closest('.more-details')) {
        e.preventDefault();
        scrollToElement('#works');
    }
}

function handleMainButtonClick() {
    const flashEffect = document.getElementById('flashEffect');
    if (!flashEffect) {
        console.error('Flash effect element not found!');
        return;
    }
    flashEffect.style.display = 'block';
    flashEffect.style.animation = 'gradualFlash 300ms forwards';

    setTimeout(() => {
        flashEffect.style.display = 'none';
        flashEffect.style.animation = '';
        scrollToElement('.slide2');
    }, 300);
}

function scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        // Use requestAnimationFrame to ensure smooth behavior
        requestAnimationFrame(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
}

function handleNavLinkClick(e) {
    const target = e.target;
    if (target.tagName === 'A') {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        if (targetId.startsWith('#')) {
            scrollToElement(targetId);
        } else {
            window.location.href = targetId;
        }
    }
}

function sendEmail(e) {
    e.preventDefault(); // Prevent the form from submitting in the traditional way
    var email = document.getElementById('userEmail').value;
    var body = document.getElementById('emailBody').value;
    var recipientEmail = "yj2082@nyu.edu"; // Always send to this email address

    var mailtoLink = 'mailto:' + recipientEmail + '?cc=' + encodeURIComponent(email) + '&body=' + encodeURIComponent(body);
    window.location.href = mailtoLink;
}

