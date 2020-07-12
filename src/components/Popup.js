export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  open() {
    document.querySelector(this._popupSelector).classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
  }

  close() {
    document.querySelector(this._popupSelector).classList.remove('popup_opened');
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
      document.removeEventListener('keydown', () => {
        this._handleEscClose();
      });
    }
  }

  setEventListeners() {
    document.querySelector(this._popupSelector).addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup')) {
        this.close(); //popupClose(evt.target.closest('.popup'));
      }
    })
    document.querySelector(this._popupSelector).querySelector('.popup__close-button').addEventListener('click', () => {
      this.close();
    })
  }
}


// // функция закрывает popup нажатием на оверлей
// const popupCloseByOverlay = () => {
//   const overlays = Array.from(document.querySelectorAll('.popup'));
//   overlays.forEach((overlay) => {
//     overlay.addEventListener('click', (evt) => {
//       if (evt.target.classList.contains('popup')) {
//       popupClose(evt.target.closest('.popup'));
//       }
//     })
//   });
// };
