
const question = document.createElement('h3')
question.id = 'question'
const container = document.getElementById('container');


// input field
const input = document.createElement('input');
input.type = 'number'; // Set the input type to number
input.placeholder = 'Enter the num...'; // Placeholder for input
container.appendChild(input); // Append input to the container
let array = []

let countMap = {}


// Create add button
const add = document.createElement('button');
add.innerText = 'add'; // Button text
container.appendChild(add); // Append the button to the container

// Create submit button
const result = document.createElement('button');
result.innerText = 'result'; // Button text
container.appendChild(result); // Append the button to the container


add.addEventListener('click', () => {
    array.push(input.value)
    input.value = ''; // Clear input field after submission
})
// finding unique element
function unique(array) {
    var unique = []
    array.forEach(element => {
        if (countMap[element] === undefined) {
            countMap[element] = 1
        } else {
            countMap[element]++
        }
    })
    for (let key in countMap) {
        countMap[key] === 1 ? unique.push(key) : ""
    }
    if (unique.length > 0) {
        container.appendChild(question)
        question.innerText = `This array [${array.join(", ")}] has unique elements: ${unique.join(", ")}`;
    } else {
        container.appendChild(question)
        question.innerText = `This array [${array.join(", ")}] has no unique elements.`;
    }
}

result.addEventListener('click', () => {
    unique(array)
})
