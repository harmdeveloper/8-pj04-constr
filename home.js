const container = document.querySelector('.testimonial-container');
const cards = document.querySelectorAll('.testimonial-card');
const totalCards = cards.length;
const visibleCards = 3; // Number of cards to show at once
const cardWidth = cards[0].offsetWidth + 20; // Including margin-right
let currentIndex = 0;

function updateSlider() {
    const offset = -currentIndex * cardWidth;
    container.style.transform = `translateX(${offset}px)`;
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalCards - visibleCards;
    }
    updateSlider();
}

function nextSlide() {
    if (currentIndex < totalCards - visibleCards) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
}

// Optional: Automatically move to the next slide every 5 seconds
setInterval(nextSlide, 5000);



document.querySelectorAll('.collapsible-header').forEach(header => {
    header.addEventListener('click', () => {
        const collapsible = header.parentElement;
        collapsible.classList.toggle('active');
        const content = collapsible.querySelector('.collapsible-content');
        if (collapsible.classList.contains('active')) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.col-3'); // Select all card columns
    const totalCards = cards.length;
    const visibleCards = 4; // Number of cards to show at a time on mobile

    let currentPosition = 0; // Starting position

    // Function to update visibility of cards based on currentPosition
    function updateCardsVisibility() {
        cards.forEach((card, index) => {
            if (index >= currentPosition && index < currentPosition + visibleCards) {
                card.style.display = 'block'; // Show the card
            } else {
                card.style.display = 'none'; // Hide the card
            }
        });
    }

    // Initially show the first set of cards
    updateCardsVisibility();

    // Event listener for previous button (if applicable)
    // Assuming you have navigation controls for mobile, adapt as needed
    const prevButton = document.querySelector('.ctrl'); // Example class for previous button
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            if (currentPosition > 0) {
                currentPosition--;
                updateCardsVisibility();
            }
        });
    }

    // Event listener for next button (if applicable)
    // Assuming you have navigation controls for mobile, adapt as needed
    const nextButton = document.querySelector('.ctrl1'); // Example class for next button
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            if (currentPosition < totalCards - visibleCards) {
                currentPosition++;
                updateCardsVisibility();
            }
        });
    }
});
