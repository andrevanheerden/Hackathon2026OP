import { useNavigate } from 'react-router-dom';
import './Button.css';

function Button() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/rules');
  };

  return (
    <button className="enter-button" onClick={handleClick}>
      ENTER THE WASTES
    </button>
  );
}

export default Button;
