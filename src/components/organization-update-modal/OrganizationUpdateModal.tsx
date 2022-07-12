import { useState } from "react";
import { TOrganization } from "../../types/organization";
import { stringToDate } from "../../utils/parsers";

import "./organization-update-modal.css";

import AppModal from "../app-modal/AppModal";

type TProps = {
  organization: TOrganization;
  isOpen: boolean;
  handleClose: () => void;
  handleSubmit: (updatedOrganization: TOrganization) => void;
};

function OrganizationUpdateModal({
  isOpen,
  handleClose,
  handleSubmit,
  organization,
}: TProps) {
  const [organisationName, setOrganisationName] = useState(
    organization.shortName || ""
  );
  const [fullName, setFullName] = useState(organization.name || "");
  const [contractNo, setContractNo] = useState(organization.contract.no || "");
  const [contractDate, setContractDate] = useState(
    stringToDate(organization.contract.issue_date)
  );
  const [form, setForm] = useState(organization.businessEntity || "");
  const [type, setType] = useState<string>(organization.type.join(" ") || "");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleSubmit({
      ...organization,
      shortName: organisationName,
      name: fullName,
      businessEntity: form,
      type: type.split(" "),
      contract: {
        no: contractNo,
        issue_date: contractDate,
      },
    });
  }

  return (
    <AppModal isOpen={isOpen} onClose={handleClose}>
      <form className="organization-update__form" onSubmit={onSubmit}>
        <div className="organization-update__title">Общая информация</div>
        <div className="app-input">
          <input
            className="app-input__item"
            value={organisationName}
            required
            type="text"
            onChange={(event) => {
              setOrganisationName(event.target.value);
            }}
          />
          <span className="app-input__label">Название организации</span>
        </div>
        <div className="app-input">
          <input
            className="app-input__item"
            value={fullName}
            required
            type="text"
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
          <span className="app-input__label">Полное название</span>
        </div>
        <div className="app-input">
          <input
            className="app-input__item"
            value={contractNo}
            required
            type="text"
            onChange={(event) => {
              setContractNo(event.target.value);
            }}
          />
          <span className="app-input__label">Договор</span>
        </div>
        <div className="app-input">
          <input
            className="app-input__item"
            value={contractDate}
            required
            type="date"
            onChange={(event) => {
              setContractDate(event.target.value);
            }}
          />
          <span className="app-input__label">Дата договора</span>
        </div>
        <div className="app-input">
          <input
            className="app-input__item"
            value={form}
            required
            type="text"
            onChange={(event) => {
              setForm(event.target.value);
            }}
          />
          <span className="app-input__label">Форма</span>
        </div>
        <div className="app-input">
          <input
            className="app-input__item"
            value={type}
            required
            type="text"
            onChange={(event) => {
              setType(event.target.value);
            }}
          />
          <span className="app-input__label">Тип</span>
        </div>
        <div className="organization-update__button-container row">
          <button
            className="organization-update__button button-cancel"
            onClick={handleClose}
          >
            Отменить
          </button>
          <button
            className="organization-update__button button-save"
            type="submit"
          >
            Сохранить
          </button>
        </div>
      </form>
    </AppModal>
  );
}

export default OrganizationUpdateModal;
