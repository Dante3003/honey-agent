import "./contacts.css";

import EditIcon from "../../assets/icons/edit.svg";

function Contacts() {
  return (
    <div className="contacts divider_bottom">
      <div className="contacts__title">
        <h2 className="title">КОНТАКТНЫЕ ДАННЫЕ</h2>
        <img src={EditIcon} alt="edit" />
      </div>
      <div className="contacts__body">
        <div className="contacts__captions">
          <h6 className="contacts__caption">ФИО:</h6>
          <h6 className="contacts__caption">Телефон:</h6>
          <h6 className="contacts__caption">Эл. почта:</h6>
        </div>
        <div className="contacts__items">
          <p className="contacts__item">Григорьев Сергей Петрович</p>
          <p className="contacts__item">+7 (916) 216-55-88</p>
          <p className="contacts__item contacts__email">
            grigoriev@funeral.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
