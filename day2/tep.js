const container = document.getElementById('container');

        // Add header
        const tempHeader = document.createElement('h3');
        tempHeader.id = 'tempHeader';
        tempHeader.innerText = "Celsius to Fahrenheit & Fahrenheit to Celsius";
        container.appendChild(tempHeader);

        // Create the dropdown and input field
        function createInputField() {
            // Create dropdown
            const drop = document.createElement('select');
            drop.id = "temp"; // Set ID for the dropdown

            // Create placeholder option
            const placeholderOption = document.createElement('option');
            placeholderOption.value = ""; // Placeholder value
            placeholderOption.textContent = "Select an option"; // Placeholder text
            placeholderOption.disabled = true; // Disable the placeholder
            placeholderOption.selected = true; // Make it selected by default
            drop.appendChild(placeholderOption);

            // Add options to dropdown
            const options = ["°C ==> °F", "°F ==> °C"];
            options.forEach(optionText => {
                const option = document.createElement('option');
                option.value = optionText; // Set the value of the option
                option.textContent = optionText; // Set the display text of the option
                drop.appendChild(option); // Append each option to the dropdown
            });

            container.appendChild(drop); // Append the dropdown to the container

            // Create input field for temperature
            const input = document.createElement('input');
            input.type = 'number'; // Set the input type to number
            input.placeholder = 'Enter the temperature...'; // Placeholder for input
            container.appendChild(input); // Append input to the container

            // Create submit button
            const submitButton = document.createElement('button');
            submitButton.innerText = 'Convert'; // Button text
            container.appendChild(submitButton); // Append the button to the container

            // Create result display area
            const result = document.createElement('h3');
            result.id = 'res';
            container.appendChild(result);

            // Event listener for the button
            submitButton.addEventListener('click', () => {
                const inputValue = parseFloat(input.value); // Get the input value and convert to number
                
                const selectedOption = drop.value; // Get the selected option value

                let cel, farn;

                // Check if input is a valid number and option is selected
                if (!isNaN(inputValue) && selectedOption) {
                    if (selectedOption === "°C ==> °F") {
                        // Celsius to Fahrenheit conversion
                        farn = (inputValue * 9/5) + 32;
                        result.innerHTML = `${inputValue}°C is equal to ${farn.toFixed(2)}°F`;
                    } else if (selectedOption === "°F ==> °C") {
                        // Fahrenheit to Celsius conversion
                        cel = (inputValue - 32) * 5/9;
                        result.innerHTML = `${inputValue}°F is equal to ${cel.toFixed(2)}°C`;
                    }
                } else {
                    result.innerHTML = "Please enter a valid temperature and select an option!";
                }

                input.value = ''; // Clear input field after submission
            });
        }

        createInputField(); // Call the function to create elements