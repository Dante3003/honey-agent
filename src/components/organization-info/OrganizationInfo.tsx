import { parseDate } from "../../utils/parsers";

import "./organization-info.css";

import EditIcon from "../../assets/icons/edit.svg";

type TProps = {
  organization: any;
};

function OrganizationInfo({ organization }: TProps) {
  return (
    <div className="organization-info">
      <div className="row organization-info__title">
        <h2>{organization.shortName}</h2>
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
            <p className="organization-info__item">{organization.name}</p>
            <p className="organization-info__item">
              {organization.contract.no} от{" "}
              {parseDate(organization.contract.issue_date)}
            </p>
            <p className="organization-info__item">
              {organization.businessEntity}
            </p>
            <p className="organization-info__item">
              {organization.type.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganizationInfo;
