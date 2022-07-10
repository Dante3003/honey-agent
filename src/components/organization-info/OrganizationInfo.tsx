import "./organization-info.css";

import EditIcon from "../../assets/icons/edit.svg";

function OrganizationInfo() {
  return (
    <div className="organization-info">
      <div className="row organization-info__title">
        <h2>Перспективные захоронения</h2>
        <img src={EditIcon} alt="edit" />
      </div>
      <div>
        <div className="organization-info__subtitle">
          <h3 className="title">ОБЩАЯ ИНФОРМАЦИЯ</h3>
          <img src={EditIcon} alt="edit" />
        </div>
        <div className="organization-info__body">
          <div className="organization-info__captions">
            <h6 className="organization-info__caption">Полное название:</h6>
            <h6 className="organization-info__caption">Договор:</h6>
            <h6 className="organization-info__caption">Форма:</h6>
            <h6 className="organization-info__caption">Тип:</h6>
          </div>
          <div className="organization-info__items">
            <p className="organization-info__item">
              ООО Фирма “Перспективные захоронения”
            </p>
            <p className="organization-info__item">12345 от 12.03.2015</p>
            <p className="organization-info__item">ООО</p>
            <p className="organization-info__item">Агент, Подрядчик</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganizationInfo;
