const question = document.createElement('div')
question.id = 'question'
const container = document.getElementById('container');
const container2 = document.getElementById('container2');
question.innerText = 'Enter url without enwerted commas'
container.append(question)

const input = document.createElement('input');
input.type = 'text'; // Set the text type 
input.placeholder = 'Enter the url...'; // Placeholder for input
container.appendChild(input); // Append input to the container

// Create add button
const fetchData = document.createElement('button');
fetchData.innerText = 'fetchData'; // Button text
container2.appendChild(fetchData); // Append the button to the container

// Create submit button
const Remove = document.createElement('button');
Remove.innerText = 'Remove'; // Button text
container2.appendChild(Remove); // Append the button to the container

 fetchData.addEventListener('click' , ()=>{
let url = input.value.toString()
console.dir(url)
     fetch(url)
     .then((res) => {
        console.log(res)
         if(!res.ok){
             throw new Error(`HTTP error! status: ${response.status}`)
         }
         return res.json()
     })
    .then(data => {
        console.log("Parsed JSON Data:", data)
    })
    .catch(error => {
        console.error("Fetch error:", error); // Handles any fetch errors
      });
 })


Remove.addEventListener('click' ,()=>{
console.clear()
})

  