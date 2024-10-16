const container = document.getElementById('container');

// Add header
const tempHeader = document.createElement('h3');
tempHeader.id = 'tempHeader';
tempHeader.innerText = "Student Score and Number";
container.appendChild(tempHeader); 

// Create input field for names
const input = document.createElement('input');
input.id = "text";
input.type = 'text'; // Set the input type to text
input.placeholder = 'Enter the name...'; // Placeholder for input
container.appendChild(input); // Append input to the container

// Create input field for numbers
const input2 = document.createElement('input');
input2.id = "num";
input2.type = 'number'; // Set the input2 type to number
input2.placeholder = 'Enter the score...'; // Placeholder for input
container.appendChild(input2); // Append input to the container

// Error message
const error = document.createElement('p');
error.id = 'error';
error.innerHTML = "Please enter a valid name (only letters allowed)";
error.style.cssText = "color: red; display: none; font-size: 12px";

// Add button
const add = document.createElement('button');
add.innerText = 'Add'; // Button text
container.appendChild(add); // Append the button to the container

// Create result display button
const res = document.createElement('button');
res.innerText = 'Show average'; // Button text
container.appendChild(res); // Append the button to the container

let Student = {}; // Object to store student data
container.appendChild(error); // Append error to the container

// Regular expression to validate names (only alphabetic characters allowed)
const namePattern = /^[a-zA-Z]+$/;

// Add event listener for the Add button
add.addEventListener('click', () => {
    const nameValue = input.value.trim(); // Get and trim the name input
    const scoreValue = parseFloat(input2.value.trim()); // Get and trim the score input

    // Validate if the input is a valid name (only letters allowed)
    if (!namePattern.test(nameValue) || nameValue === '') {
        input.classList.add('input-error'); // Add error class to input
        error.style.display = "block"; // Show error message
    } else {
        input.classList.remove('input-error'); // Remove error class
        error.style.display = "none"; // Hide error message
        
        // Validate score input
        if (!isNaN(scoreValue) && scoreValue >= 0) {
            // Add the name and score to the Student object
            Student[nameValue] = scoreValue;
            console.log(Student);
        } else {
            alert("Please enter a valid score (must be a non-negative number).");
        }
    }

    // Clear input fields after submission
    input.value = '';
    input2.value = '';
});

// Add event listener for the Show average button
res.addEventListener('click', () => {
    const scores = Object.values(Student); // Get all scores from the Student object
    if (scores.length === 0) {
        alert("No scores available to calculate average.");
        return;
    }
    
    const totalScore = scores.reduce((acc, score) => acc + score, 0); // Calculate total score
    const average = totalScore / scores.length; // Calculate average
    alert(`The average score is: ${average.toFixed(2)}`); // Display average score
});
