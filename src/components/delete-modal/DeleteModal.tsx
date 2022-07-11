import "./delete-modal.css";

import AppModal from "../app-modal/AppModal";

type TProps = {
  onClose: () => void;
  onSubmit: () => void;
  isOpen: boolean;
};

function DeleteModal({ isOpen, onClose, onSubmit }: TProps) {
  return (
    <AppModal isOpen={isOpen} onClose={onClose}>
      <div className="modal-content">
        <h3 className="delete-modal__title">Удалить карточку</h3>
        <p className="delete-modal__text">
          Отправить карточку организации в архив?
        </p>
        <div className="delete-modal__buttons">
          <button
            className="delete-modal__button delete-modal__close"
            onClick={onClose}
          >
            Отмена
          </button>
          <button
            className="delete-modal__button delete-modal__sumbit"
            onClick={onSubmit}
          >
            Удалить
          </button>
        </div>
      </div>
    </AppModal>
  );
}

export default DeleteModal;
