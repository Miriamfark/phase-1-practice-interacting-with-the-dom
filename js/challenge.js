let counter = document.querySelector('#counter').innerText
console.log(counter)

function incrementCounter() {
    ++counter
    document.querySelector('#counter').innerText = counter
    console.log(counter)
}

const myInterval = setInterval(incrementCounter, 1000)

document.querySelector('#plus').addEventListener('click', incrementCounter)
document.querySelector('#minus').addEventListener('click', () => {
     --counter
     document.querySelector('#counter').innerText = counter
})

document.querySelector('#heart').addEventListener('click', showLike)

function showLike() {
   const li = document.createElement('li')
        li.setAttribute('id', `${counter}`)
   console.log(li.id)
    const ul = document.querySelector('.likes')
   console.log(ul)
    let clickCount = 1
    if (li.id === counter) {
        clickCount++
    }
    li.textContent = `${counter} has been liked ${clickCount} time.`
    ul.append(li)
    
}

const pauseButton = document.querySelector('#pause')
pauseButton.addEventListener('click', togglePause)

function togglePause() {
    if (pauseButton.innerText === 'pause') {
        pauseButton.textContent = 'resume'
        clearInterval(myInterval)
        disableButtons()
    } else if (pauseButton.innerText === 'resume') {
        pauseButton.textContent = 'pause'
        setInterval(incrementCounter, 1000)
        enableButtons()
    }
    
}

function disableButtons() {
    document.querySelector('#plus').disabled=true
    document.querySelector('#minus').disabled=true
    document.querySelector('#heart').disabled=true
}

function enableButtons() {
    document.querySelector('#plus').disabled=false
    document.querySelector('#minus').disabled=false
    document.querySelector('#heart').disabled=false  
}

document.querySelector('#comment-form').addEventListener('submit', submitComment)

function submitComment(event) {
    event.preventDefault()
    const comment = event.target.querySelector("input").value
    console.log(comment)
    const p = document.createElement('p')
    p.textContent = comment
    document.querySelector('#list').appendChild(p)
    event.target.reset()
}

