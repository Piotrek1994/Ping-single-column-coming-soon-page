const btn = document.querySelector('.btn')
const warning = document.querySelector('.warning')
const emailInput = document.querySelector('.email-input')
const reg =
	/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const handleWarning = () => {
	if (emailInput.value == '') {
		warning.classList.add('active')
		emailInput.classList.add('border-red')
	} else {
		matchEmail()
	}
}

function matchEmail() {
	if (emailInput.value.match(reg)) {
		warning.classList.remove('active')
		emailInput.classList.remove('border-red')
	}
}

btn.addEventListener('click', handleWarning)
