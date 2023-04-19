const form = document.querySelector('.right form');
const inputs = document.querySelectorAll('.right form input');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    inputs.forEach(input=> {
        console.log(input.value);
    })
});
