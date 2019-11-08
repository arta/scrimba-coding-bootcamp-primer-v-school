let input = document.getElementById('user_input')
let button = document.getElementById('submit')
let heading = document.getElementById('h1_user_input')

button.addEventListener('click', function () {
    console.log(input.value)
    heading.textContent = input.value
})