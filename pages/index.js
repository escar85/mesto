let profileEditButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');

profileEditButton.addEventListener('click', function() {
  popup.classList.add('popup__opened');
} );

let popupCloseButton = document.querySelector('.popup__close-button');

popupCloseButton.addEventListener('click', function() {
  popup.classList.remove('popup__opened');
} );

// Находим форму в DOM
let formElement = document.querySelector('.popup__container'); // Воспользуйтесь методом querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    let nameInput = document.querySelector('.popup__input-name'); // Воспользуйтесь инструментом .querySelector()
    let jobInput = document.querySelector('.popup__input-job'); // Воспользуйтесь инструментом .querySelector()

    // Получите значение полей из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    let profileName = document.querySelector('.profile__name');
    let profileJob = document.querySelector('.profile__job');
    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    popup.classList.remove('popup__opened');

}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
