const profileEditButton = document.querySelector('.profile__edit-button'); // находим кнопку "изменить профиль"
const popupCloseButton = document.querySelector('.popup__close-button');  // находим кнопку "закрыть форму"
let popup = document.querySelector('.popup');  // находим popup с формой изменения профиля
let formElement = document.querySelector('.popup__container'); // находим форму изменения профиля
let nameInput = document.querySelector('.popup__input_name'); // объявляем поле ввода имени
let jobInput = document.querySelector('.popup__input_job'); // объявляем поле ввода занятия
let profileName = document.querySelector('.profile__name'); // объявляем переменную "имя профиля"
let profileJob = document.querySelector('.profile__job');  // объявляем переменную "занятия профиля"


function popupOpen() {                    // функция отрытия окна popup
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function popupClose() {                   // функция закрытия окна popup
  popup.classList.remove('popup_opened');
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет

function formSubmitHandler (evt) {
    evt.preventDefault();                       // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    profileName.textContent = nameInput.value;  // перезаписываем введенные в форму значения
    profileJob.textContent = jobInput.value;    // в профиль.

    popupClose();

}

profileEditButton.addEventListener('click', popupOpen);   // открываем popup по клику
popupCloseButton.addEventListener('click', popupClose);   // закрываем popup по клику
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
