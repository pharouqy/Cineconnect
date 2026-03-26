

function Modal({ children, onClose }) {
  return (
    <div className="modal-overlay fixed inset-0 z-50 bg-overlay-dark">
      <div className="modal-container flex flex-col items-center justify-center gap-4 p-4 text-center">
        <div className="modal-content bg-white p-4 rounded-lg shadow-card">
          {children}
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-white hover:text-gray-400 transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default Modal;