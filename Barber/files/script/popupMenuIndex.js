var link = document.querySelector('.login'); //ссылка "вход"
var map = document.querySelector('.theMap'); //кнопка "как проехать"
var popupLogin = document.querySelector('.modal-content'); //форма входа
var popupMap = document.querySelector('.modal-content-map'); //карта
var closePopupLogin = popupLogin.querySelector('.modal-content-close'); //кнопка "закрыть" в форме входа
var closePopupMap = popupMap.querySelector('.modal-content-close'); //кнопка "закрыть" на карте
link.addEventListener('click', function(event) {  //обработчик события "клик" по ссылке "вход"
	event.preventDefault(); //function(event) предотвращяет переход по ссылке
	popupLogin.classList.add ('modal-content-show'); //добавляет клас modal-content-show к форме входа
});

closePopupLogin.addEventListener('click', function(event) { //обработчик события "клик" по кнопке "закрыть" в форме входа
	event.preventDefault(); //function(event) предотвращяет переход по ссылке
	popupLogin.classList.remove ('modal-content-show'); //убирает клас modal-content-show у формы входа
});

map.addEventListener('click', function(event){ //обработчик события "клик" по кнопке "как проехать"
	event.preventDefault();
	popupMap.classList.add ('modal-content-map-show'); //добавляет клас modal-content-map-show к карте
});

closePopupMap.addEventListener('click', function(event) { //обработчик события "клик" по кнопке "закрыть" на карте
	event.preventDefault();
	popupMap.classList.remove ('modal-content-map-show'); //убирает клас modal-content-map-show у карты
});
