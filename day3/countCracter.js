// Create input field for names
const input = document.createElement('input');
input.id = "text";
input.type = 'text'; // Set the input type to text
input.placeholder = 'Enter the string...'; // Placeholder for input
container.appendChild(input); // Append input to the container

let countChar = {}

// Add button
const add = document.createElement('button');
add.innerText = 'Go'; // Button text
container.appendChild(add); // Append the button to the container

// Add event listener for the Add button
add.addEventListener('click', () => {
    const nameValue = [...input.value.split(" ").join('')]; // Get and trim spaces from the input, split into characters
    countChar = {}
 // Reset the character count

    // Count occurrences of each character
    nameValue.forEach((char) => {
        countChar[char] = (countChar[char] || 0) + 1; // Increment count for each character
    });

    // Display the result in the console
    console.log(countChar);

    // Optionally display the result in the DOM as well
    const resultDiv =  document.createElement("h3");
    resultDiv.id = "result";
    resultDiv.innerText = `Character Count: ${JSON.stringify(countChar)}`;
    container.appendChild(resultDiv); // Append or update the result
});
