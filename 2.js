const colorBtn1 = document.getElementById('color-btn-1');
const colorBtn2 = document.getElementById('color-btn-2');
const colorBtn3 = document.getElementById('color-btn-3');
//on clicking switch color button 1
colorBtn1.addEventListener('click', function() {
  document.documentElement.classList.add('color-scheme-1');
  document.documentElement.classList.remove('color-scheme-2', 'color-scheme-3');
});
//on clicking switch color button 2
colorBtn2.addEventListener('click', function() {
  document.documentElement.classList.add('color-scheme-2');
  document.documentElement.classList.remove('color-scheme-1', 'color-scheme-3');
});
//on clicking switch color button 3
colorBtn3.addEventListener('click', function() {
  document.documentElement.classList.add('color-scheme-3');
  document.documentElement.classList.remove('color-scheme-1', 'color-scheme-2');
});




// Get the input element by its id
const input = document.getElementById('first');

// Add an event listener to the input element
input.addEventListener('input', function(event) {
  // Get the value of the input element
  const inputValue = event.target.value;
  
  // Do something with the input value, like log it to the console
  console.log(inputValue);
});


    // Get the form element
    const form = document.getElementById("contact-form");

    // Add an event listener to the form submit event
    form.addEventListener("submit", function(event) {
        // Get the input fields
        const firstNameInput = document.getElementById("first");
        const lastNameInput = document.getElementById("last");
        const feedbackInput = document.getElementById("Feedback");

        // Check if the first name field is empty
        if (firstNameInput.value === "") {
            alert("Please enter your first name.");
            event.preventDefault(); // Prevent the form from being submitted
            return;
        }

        // Check if the last name field is empty
        if (lastNameInput.value === "") {
            alert("Please enter your last name.");
            event.preventDefault(); // Prevent the form from being submitted
            return;
        }

        // Check if the feedback field is empty
        if (feedbackInput.value === "") {
            alert("Please enter your feedback.");
            event.preventDefault(); // Prevent the form from being submitted
            return;
        }

        // If all fields are valid, the form will be submitted as usual
    });

