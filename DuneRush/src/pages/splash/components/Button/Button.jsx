import { useNavigate } from 'react-router-dom';
import './Button.css';

function Button({ onClick }) {
  return (
    <button className="enter-button" onClick={onClick}>
      ENTER THE WASTES
    </button>
  );
}

export default Button;
