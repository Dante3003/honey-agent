import { useEffect, useState } from "react";
import { getContacts } from "../../services/contacts";
import { parsePhoneNumber } from "../../utils/parsers";

import "./contacts.css";

import EditIcon from "../../assets/icons/edit.svg";

type TProps = {
  contactId: number;
};

function Contacts({ contactId }: TProps) {
  const [contacts, setContacts] = useState<any>({});
  useEffect(() => {
    getContacts(contactId).then((response) => {
      setContacts(response.data);
    });
  }, [contactId]);

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
          <p className="contacts__item">
            {contacts.lastname} {contacts.firstname} {contacts.patronymic}
          </p>
          <p className="contacts__item">
            {/* +7 (916) 216-55-88 */}
            {parsePhoneNumber(contacts.phone)}
          </p>
          <a
            href={"mailto:" + contacts.email}
            className="contacts__item contacts__email"
          >
            {contacts.email}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
