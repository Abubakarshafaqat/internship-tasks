const question = document.createElement('div')
question.id = 'question'
const container2 = document.getElementById('container2');
const input = document.createElement('input');
input.type = 'number'; // Set the text type 
input.placeholder = 'Enter the time ...'; // Placeholder for input
container2.appendChild(input); // Append input to the container
question.innerText = 'Select the delay in second'
container.append(question)

const fetchData = document.createElement('button');
fetchData.innerText = 'fetchData'; // Button text
container2.appendChild(fetchData); // Append the button to the container

fetchData.addEventListener('click' , ()=>{
    let time = input.value
    delay(time)
})



async function delay(time) {
    const delay = new Promise((res) => {
        console.log(res)
        setTimeout(() => {
            res("responce recevied after delay")
        }, time*1000)
    })
    const result = await delay
    console.log(result)

}
