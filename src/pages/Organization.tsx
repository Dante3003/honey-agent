import { Link } from "react-router-dom";

import "./organization.css";

import OrganizationInfo from "../components/organization-info/OrganizationInfo";
import Contacts from "../components/contacts/Contacts";
import Photos from "../components/photos/Photos";

import ArrowLeftIcon from "../assets/icons/arrow-left.svg";
import LinkIcon from "../assets/icons/linked.svg";
import TrashIcon from "../assets/icons/delete.svg";
import RotationIcon from "../assets/icons/rotation.svg";

function Organization() {
  return (
    <div>
      <header className="header">
        <div className="container organiztion__header">
          <div>
            <Link to="/" className="organization__breadcrumbs">
              <img src={ArrowLeftIcon} alt="back" />
              <span>К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ</span>
            </Link>
          </div>
          <div className="organization__actions">
            <img src={LinkIcon} className="organization__action" alt="link" />
            <img
              src={RotationIcon}
              className="organization__action"
              alt="rotation"
            />
            <img
              src={TrashIcon}
              className="organization__action"
              alt="delete"
            />
          </div>
        </div>
      </header>
      <div className="container">
        <OrganizationInfo />
        <Contacts />
        <Photos />
      </div>
    </div>
  );
}

export default Organization;
