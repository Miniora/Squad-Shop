// Get all the plus buttons
const plusButtons = document.querySelectorAll('.plus-btn');

// Get all the minus buttons
const minusButtons = document.querySelectorAll('.minus-btn');

// Get all the input elements
const inputElements = document.querySelectorAll('input[name="name"]');

// Add event listener to each plus button
plusButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the corresponding input element
    const input = button.nextElementSibling;
    // Increment the input value
    input.value = parseInt(input.value) + 1;
  });
});

// Add event listener to each minus button
minusButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the corresponding input element
    const input = button.previousElementSibling.previousElementSibling;
    // Decrement the input value if it's greater than 1
    if (parseInt(input.value) > 1) {
      input.value = parseInt(input.value) - 1;
    }
  });
});

// Get all the delete buttons
const deleteButtons = document.querySelectorAll('.delete-btn');

// Add event listener to each delete button
deleteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the corresponding item element
    const item = button.parentElement.parentElement;
    // Remove the item element
    item.remove();
  });
});