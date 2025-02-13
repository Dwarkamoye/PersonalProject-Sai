/*Copyright (c) 2025 Dwarkamoye Mohanty. All Rights Reserved.
  This file is part of the Personal Project by Dwarkamoye Mohanty
*/

document.addEventListener('DOMContentLoaded', () => {
    const letterButton = document.getElementById('letter-button');
    const letterAnimation = document.getElementById('letter-animation');
    const messageContainer = document.getElementById('message-container');
    const responseButtons = document.getElementById('response-buttons');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const letterText = document.getElementById('letter-text');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close-btn');
    emailjs.init('YAeboktUInxJZH8ZA');

    // When the close button is clicked, hide the popup
    closeBtn.addEventListener('click', () => {
        popup.classList.remove('show');
    });

    // Optionally, close the popup if the user clicks outside the modal
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.classList.remove('show');
        }
    });

    // When the letter button is clicked
    letterButton.addEventListener('click', () => {
        // Animate the letter opening
        messageContainer.innerHTML = "";
        letterButton.classList.add('hidden');
        letterText.classList.remove('hidden');
        letterAnimation.classList.remove('hidden');
        noButton.classList.remove('hidden');
        yesButton.classList.remove('hidden');
    });

    // Handle No button click
    noButton.addEventListener('click', () => {
        popup.classList.add('show');
        // Add bounce animation to the new buttons
        document.querySelectorAll('.response-button').forEach(button => {
            button.classList.add('bounce');
        });

        setTimeout(() => {
            document.querySelectorAll('.response-button').forEach(button => {
                button.classList.remove('bounce');
            });
        }, 500);
    });

    // Handle Yes button click
    yesButton.addEventListener('click', () => {
        // Trigger heart animation
        let heart = document.createElement('div');
        heart.id = 'heart';
        heart.innerText = '💖 💖 💖 💖 💖 💖';
        document.body.appendChild(heart);

        // After animation, show the final message
        setTimeout(() => {
            letterAnimation.innerHTML = "<p class='letter-text bold-fonts'>Thank you, Sai will see you soon! 💖</p><iframe width='400' height='315' src='https://www.youtube.com/embed/ilNt2bikxDI?si=HPPMcT2uYNq2xPjh' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='no-referrer-when-downgrade' allowfullscreen></iframe>";

            // Send the email
            sendEmail();

            // Remove the heart animation
            heart.remove();
        }, 2000);
    });
});

function sendEmail() {
    const formData = {
        message: "She clicked yes. Time to plan wedding. Buckle up."
    };
    // Send the email
    emailjs.send('service_1mwcrbd', 'template_6sa13s5', formData)
    .then(function(response) {
        console.log('Email sent successfully', response);
    }, function(error) {
        console.log('Failed to send email', error);
    });
}
