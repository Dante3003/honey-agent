import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AxiosResponse } from "axios";
import {
  getOrganizationRequest,
  deleteOrganizationRequest,
} from "../services/organization";
import { TPhoto, TOrganization } from "../types/organization";

import "./organization.css";

import OrganizationInfo from "../components/organization-info/OrganizationInfo";
import Contacts from "../components/contacts/Contacts";
import Photos from "../components/photos/Photos";
import DeleteModal from "../components/delete-modal/DeleteModal";

import ArrowLeftIcon from "../assets/icons/arrow-left.svg";
import LinkIcon from "../assets/icons/linked.svg";
import TrashIcon from "../assets/icons/delete.svg";
import RotationIcon from "../assets/icons/rotation.svg";

function Organization() {
  const [organization, setOrganization] = useState<TOrganization>();
  const [isDeleteModalOpen, setisDeleteModalOpen] = useState<boolean>(false);
  useEffect(() => {
    getOrganizationRequest(12).then((response: AxiosResponse) => {
      setOrganization(response.data);
    });
  }, []);

  function addPhoto(photo: TPhoto) {
    if (organization) {
      setOrganization({
        ...organization,
        photos: [...organization.photos, photo],
      });
    }
  }

  function removePhoto(photoName: string) {
    if (organization) {
      setOrganization({
        ...organization,
        photos: organization.photos.filter((photo) => photo.name !== photoName),
      });
    }
  }

  function removeOrganization() {
    if (!organization) {
      return;
    }
    deleteOrganizationRequest(organization.id).then(() => {
      setisDeleteModalOpen(false);
    });
  }

  function openDeleteModalHandler() {
    setisDeleteModalOpen(true);
  }

  function closeDeleteModalHandler() {
    setisDeleteModalOpen(false);
  }

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
            <button>
              <img src={LinkIcon} className="organization__action" alt="link" />
            </button>
            <button>
              <img
                src={RotationIcon}
                className="organization__action"
                alt="rotation"
              />
            </button>
            <button onClick={openDeleteModalHandler}>
              <img
                src={TrashIcon}
                className="organization__action"
                alt="delete"
              />
            </button>
          </div>
        </div>
      </header>
      {organization && (
        <div className="container">
          <OrganizationInfo organization={organization} />
          <Contacts contactId={organization.contactId} />
          <Photos
            photos={organization.photos}
            organizationId={organization?.id}
            addPhoto={addPhoto}
            removePhoto={removePhoto}
          />
        </div>
      )}
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModalHandler}
        onSubmit={removeOrganization}
      />
    </div>
  );
}

export default Organization;
