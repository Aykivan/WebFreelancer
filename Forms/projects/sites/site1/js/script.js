const form = document.querySelector('.header__form')
const input = document.querySelector('.form__input')

input.addEventListener('focus', function () {
	form.classList.add('header__form-active');
})

input.addEventListener('blur', function () {
	form.classList.remove('header__form-active');
})