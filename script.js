// Select elements from the DOM
const ratingButtons = document.querySelectorAll('.numbers button');
const submitButton = document.querySelector('.submit-button');
const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');
const selectedRatingText = document.querySelector('.selected');

// Variable to store the selected rating
let selectedRating = null;

// Add click event listeners to each rating button
ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons, then add it to the clicked button
    ratingButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // Set selectedRating to the clicked button's text content (the rating number)
    selectedRating = button.textContent;
  });
});

// Add click event listener to the submit button
submitButton.addEventListener('click', () => {
  // Check if a rating was selected
  if (selectedRating) {
    // Hide the first container and show the second
    container.style.display = 'none';
    container2.style.display = 'flex';
    
    // Update the text to show the selected rating
    selectedRatingText.textContent = `You selected ${selectedRating} out of 5`;
  } else {
    alert("Please select a rating before submitting.");
  }
});
