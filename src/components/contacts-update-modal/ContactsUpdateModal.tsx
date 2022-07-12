import { useState } from "react";
import { TContacts } from "../../types/contacts";
import "./contacts-update-modal.css";

import AppModal from "../app-modal/AppModal";

type TProps = {
  isOpen: boolean;
  handleClose: () => void;
  handleSubmit: (updatedContacts: TContacts) => void;
  contacts: TContacts;
};

function ContactsUpdateModal({
  isOpen,
  handleClose,
  handleSubmit,
  contacts,
}: TProps) {
  const [firstname, setFirstname] = useState(contacts.firstname || "");
  const [lastname, setLastname] = useState(contacts.lastname || "");
  const [patronymic, setPatronymic] = useState(contacts.patronymic || "");
  const [phone, setPhone] = useState(contacts.phone || "");
  const [email, setEmail] = useState(contacts.email || "");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleSubmit({
      phone,
      email,
      id: 0,
      firstname,
      lastname,
      patronymic,
    });
  }

  return (
    <AppModal isOpen={isOpen} onClose={handleClose}>
      <form className="contacts-update__form" onSubmit={onSubmit}>
        <div className="contacts-update__title">Контактные Данные</div>
        <div className="app-input">
          <input
            className="app-input__item"
            value={firstname}
            required
            type="text"
            onChange={(event) => {
              setFirstname(event.target.value);
            }}
          />
          <span className="app-input__label">Имя</span>
        </div>
        <div className="app-input">
          <input
            className="app-input__item"
            value={lastname}
            required
            type="text"
            onChange={(event) => {
              setLastname(event.target.value);
            }}
          />
          <span className="app-input__label">Фамилия</span>
        </div>
        <div className="app-input">
          <input
            className="app-input__item"
            value={patronymic}
            required
            type="text"
            onChange={(event) => {
              setPatronymic(event.target.value);
            }}
          />
          <span className="app-input__label">Отчество</span>
        </div>
        <div className="app-input">
          <input
            className="app-input__item"
            value={phone}
            required
            type="text"
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
          <span className="app-input__label">Телефон</span>
        </div>
        <div className="app-input">
          <input
            className="app-input__item"
            value={email}
            required
            type="text"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <span className="app-input__label">Эл. почта</span>
        </div>
        <div className="contacts-update__button-container row">
          <button
            className="contacts-update__button button-cancel"
            onClick={handleClose}
          >
            Отменить
          </button>
          <button className="contacts-update__button button-save" type="submit">
            Сохранить
          </button>
        </div>
      </form>
    </AppModal>
  );
}

export default ContactsUpdateModal;
