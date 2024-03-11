// PopupMessage.js

import '../assets/css/PopupMessage.css'; // Import the external CSS file

const PopupMessage = ({ message, onClose }) => {
  return (
    <div className="popup-message">
      <span>{message}</span>
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default PopupMessage;
