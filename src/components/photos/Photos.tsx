import {
  addPhotoToOrganizationRequest,
  removePhotoFromOrganizationRequest,
} from "../../services/organization";
import { TPhoto } from "../../types/organization";

import "./photos.css";

import XIcon from "../../assets/icons/x-icon.svg";
import AddIcon from "../../assets/icons/add.svg";

type TProps = {
  photos: TPhoto[];
  organizationId: number;
  addPhoto: (photo: TPhoto) => void;
  removePhoto: (photoName: string) => void;
};

function Photos({ photos, organizationId, addPhoto, removePhoto }: TProps) {
  function onFileSelect(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("file", files[i]);
      }
      addPhotoToOrganizationRequest(organizationId, formData).then(
        (response) => {
          addPhoto(response.data);
        }
      );
    }
  }

  function onFileRemove(photoName: string) {
    removePhotoFromOrganizationRequest(organizationId, photoName).then(() => {
      removePhoto(photoName);
    });
  }

  return (
    <div className="photos divider_bottom">
      <h2 className="title">ПРИЛОЖЕННЫЕ ФОТО</h2>
      <div className="photos__body">
        {photos.map((photo, index) => (
          <div className="photos__card" key={index}>
            <div className="photo-container">
              <img
                src={photo.thumbpath}
                alt="Надгробный камень.jpg"
                className="photos__image"
              />
              <button
                className="photo-container__delete"
                onClick={() => onFileRemove(photo.name)}
              >
                <img src={XIcon} alt="delete" />
              </button>
            </div>
            <h6 className="photos__name">{photo.name}</h6>
            <p className="photos__date">11 июня 2018</p>
          </div>
        ))}
      </div>
      <div>
        <label htmlFor="imageUpload" className="btn photos__add-btn">
          {/* <img src={AddIcon} alt="Plus" /> */}
          ДОБАВИТЬ ИЗОБРАЖЕНИЕ
          <input id="imageUpload" type="file" hidden onChange={onFileSelect} />
        </label>
      </div>
    </div>
  );
}

export default Photos;
