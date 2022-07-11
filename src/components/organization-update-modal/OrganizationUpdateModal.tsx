import { useState } from "react";
import AppModal from "../app-modal/AppModal";

import "./organization-update-modal.css";

import { TOrganization } from "../../types/organization";

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
    organization.shortname || ""
  );
  const [fullName, setFullName] = useState(organization.name || "");
  const [contractNo, setContractNo] = useState(organization.contract.no || "");
  const [contractDate, setContractDate] = useState(
    organization.contract.issue_date || ""
  );
  const [form, setForm] = useState(organization.businessEntity || "");
  const [type, setType] = useState(organization.type || "");

  function onSubmit() {
    handleSubmit({
      ...organization,
      shortname: organisationName,
      name: fullName,
      businessEntity: form,
      type,
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
        <div className="organization-update__input-container">
          <input
            className="organization-update__input"
            value={organisationName}
            required
            type="text"
            onChange={(event) => {
              setOrganisationName(event.target.value);
            }}
          />
          <span className="organization-update__label">
            Название организации
          </span>
        </div>
        <div className="organization-update__input-container">
          <input
            className="organization-update__input"
            value={fullName}
            required
            type="text"
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
          <span className="organization-update__label">Полное название</span>
        </div>
        <div className="organization-update__input-container">
          <input
            className="organization-update__input"
            value={contractNo}
            required
            type="text"
            onChange={(event) => {
              setContractNo(event.target.value);
            }}
          />
          <span className="organization-update__label">Договор</span>
        </div>
        <div className="organization-update__input-container">
          <input
            className="organization-update__input"
            value={contractDate}
            required
            type="date"
            onChange={(event) => {
              setContractDate(event.target.value);
            }}
          />
          <span className="organization-update__label">Дата договора</span>
        </div>
        <div className="organization-update__input-container">
          <input
            className="organization-update__input"
            value={form}
            required
            type="text"
            onChange={(event) => {
              setForm(event.target.value);
            }}
          />
          <span className="organization-update__label">Форма</span>
        </div>
        <div className="organization-update__input-container">
          <input
            className="organization-update__input"
            value={type}
            required
            type="text"
            onChange={(event) => {
              setType(event.target.value);
            }}
          />
          <span className="organization-update__label">Тип</span>
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
