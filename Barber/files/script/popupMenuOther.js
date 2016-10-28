var link = document.querySelector('.login'); //ссылка "вход"
var popupLogin = document.querySelector('.modal-content'); //форма входа
var closePopupLogin = popupLogin.querySelector('.modal-content-close'); //кнопка "закрыть" в форме входа
link.addEventListener('click', function(event) {  //обработчик события "клик" по ссылке "вход"
	event.preventDefault(); //function(event) предотвращяет переход по ссылке
	popupLogin.classList.add ('modal-content-show'); //добавляет клас modal-content-show к форме входа
});

closePopupLogin.addEventListener('click', function(event) { //обработчик события "клик" по кнопке "закрыть" в форме входа
	event.preventDefault(); //function(event) предотвращяет переход по ссылке
	popupLogin.classList.remove ('modal-content-show'); //убирает клас modal-content-show у формы входа
});
