import React from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  onSubmit: () => void;
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  title,
  children,
  onSubmit,
}) => {
  if (!isOpen) return null; // If not open, return nothing.

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="modal-box sm:w-[400px] bg-white rounded-lg p-6"
        onClick={(e) => e.stopPropagation()} // Prevent click inside modal from closing it
      >
        {title && <h3 className="font-bold text-3xl text-primary">{title}</h3>}
        <div className="py-4">{children}</div>
        <div className="modal-action flex justify-between">
          <button onClick={onClose} className="btn btn-primary">
            Close
          </button>
          <button onClick={onSubmit} className="btn btn-success text-white">
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
