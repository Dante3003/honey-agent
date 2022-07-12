import { useEffect, useState } from "react";
import {
  getContactsRequest,
  updateContactsRequest,
} from "../../services/contacts";
import { parsePhoneNumber } from "../../utils/parsers";
import { TContacts } from "../../types/contacts";

import "./contacts.css";

import ContactsUpdateModal from "../contacts-update-modal/ContactsUpdateModal";

import EditIcon from "../../assets/icons/edit.svg";

type TProps = {
  contactId: number;
};

function Contacts({ contactId }: TProps) {
  const [contacts, setContacts] = useState<TContacts>();
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  useEffect(() => {
    getContactsRequest(contactId).then((response) => {
      setContacts(response.data);
    });
  }, [contactId]);

  function updateContacts(updateContacts: TContacts) {
    const formData = new FormData();
    formData.append("firstname", updateContacts.firstname);
    formData.append("lastname", updateContacts.lastname);
    formData.append("patronymic", updateContacts.patronymic);
    formData.append("phone", updateContacts.phone);
    formData.append("email", updateContacts.email);
    updateContactsRequest(contactId, formData).then((response) => {
      setContacts(response.data);
      setIsUpdateModalOpen(false);
    });
  }

  return (
    <div className="contacts divider--bottom">
      <div className="contacts__title">
        <h2 className="title">КОНТАКТНЫЕ ДАННЫЕ</h2>
        <button onClick={() => setIsUpdateModalOpen(true)}>
          <img src={EditIcon} alt="edit" />
        </button>
      </div>
      {contacts && (
        <div>
          <div className="contacts__body">
            <div className="contacts__captions">
              <h6 className="contacts__caption">ФИО:</h6>
              <h6 className="contacts__caption">Телефон:</h6>
              <h6 className="contacts__caption">Эл. почта:</h6>
            </div>
            <div className="contacts__items">
              <p className="contacts__item">
                {contacts.lastname} {contacts.firstname} {contacts.patronymic}
              </p>
              <a href={"tel:+" + contacts.phone} className="contacts__item">
                {parsePhoneNumber(contacts.phone)}
              </a>
              <a
                href={"mailto:" + contacts.email}
                className="contacts__item contacts__email"
              >
                {contacts.email}
              </a>
            </div>
          </div>
          <ContactsUpdateModal
            isOpen={isUpdateModalOpen}
            contacts={contacts}
            handleSubmit={updateContacts}
            handleClose={() => setIsUpdateModalOpen(false)}
          />
        </div>
      )}
    </div>
  );
}

export default Contacts;
