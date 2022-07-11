import "./delete-modal.css";

type TProps = {
  onClose: () => void;
  onSubmit: () => void;
  isOpen: boolean;
};

function DeleteModal({ isOpen, onClose, onSubmit }: TProps) {
  return (
    <div className={isOpen ? "modal open" : "modal"}>
      <div className="modal__back" onClick={onClose}>
        <div className="modal__dialog">
          <div className="modal-content">
            <h3 className="delete-modal__title">Удалить карточку</h3>
            <p className="delete-modal__text">
              Отправить карточку организации в архив?
            </p>
            <div className="delete-modal__buttons">
              <button className="delete-modal__button delete-modal__close">
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
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
