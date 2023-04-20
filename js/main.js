const form = document.querySelector('.form-container form');
const inputs = document.querySelectorAll('.form-container input');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    inputs.forEach((input) =>{
        // console.log(input.value);
        if (!input.value) { // if there is not value, we are adding error
			input.parentElement.classList.add('error'); 
		} else {
			input.parentElement.classList.remove('error');
			if (input.type == 'email') {
				if (validateEmail(input.value)) {
					input.parentElement.classList.remove('error');
				} else {
					input.parentElement.classList.add('error');
				}
			}
		}
    });
});

//From Stack Overflow resource : https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript?page=2&tab=scoredesc#tab-top
function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
