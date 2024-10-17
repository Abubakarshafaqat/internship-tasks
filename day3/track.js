const container = document.getElementById("container")

const add = document.createElement("button")
add.id = "clickButton"
add.innerText = "Click me!"
container.appendChild(add)


const text = document.createElement("h3")
text.innerText = "clicks count :"
container.appendChild(text)

const inertext = document.createElement("span")
inertext.innerText = 0
inertext.id = "clickCount"
text.appendChild(inertext)

const makeCounter = (function () {
    let privateCounter = 0;

    function changeBy(val) {
        privateCounter += val
    }

    return {
        increment() {
            changeBy(1)
        },
       
        value() {
            return privateCounter
        },
    }
})();
add.addEventListener('click' , function(){
    makeCounter.increment();
    document.querySelector("#clickCount").textContent = makeCounter.value()
})