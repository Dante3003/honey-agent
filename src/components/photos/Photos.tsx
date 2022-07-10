import "./photos.css";

import XIcon from "../../assets/icons/x-icon.svg";
import AddIcon from "../../assets/icons/add.svg";

function Photos() {
  return (
    <div className="photos divider_bottom">
      <h2 className="title">ПРИЛОЖЕННЫЕ ФОТО</h2>
      <div className="photos__body">
        <div className="photos__card">
          <div className="photo-container">
            <img
              src="https://htstatic.imgsmail.ru/pic_image/54b7a9fe9fc7976b27b831e2de33bed9/450/450/1670177/"
              alt="Надгробный камень.jpg"
              className="photos__image"
            />
            <button className="photo-container__delete">
              <img src={XIcon} alt="delete" />
            </button>
          </div>
          <h6 className="photos__name">Надгробный камень.jpg</h6>
          <p className="photos__date">11 июня 2018</p>
        </div>
        <div className="photos__card">
          <div className="photo-container">
            <img
              src="https://htstatic.imgsmail.ru/pic_image/54b7a9fe9fc7976b27b831e2de33bed9/450/450/1670177/"
              alt="Надгробный камень.jpg"
              className="photos__image"
            />
            <button className="photo-container__delete">
              <img src={XIcon} alt="delete" />
            </button>
          </div>
          <h6 className="photos__name">Надгробный камень.jpg</h6>
          <p className="photos__date">11 июня 2018</p>
        </div>
      </div>
      <div>
        <button className="btn photos__add-btn">
          <img src={AddIcon} alt="Plus" />
          ДОБАВИТЬ ИЗОБРАЖЕНИЕ
        </button>
      </div>
    </div>
  );
}

export default Photos;
