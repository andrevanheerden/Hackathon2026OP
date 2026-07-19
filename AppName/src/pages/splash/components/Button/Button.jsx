import './Button.css';

function Button() {
  const handleClick = () => {
    console.log('Enter the wastes clicked');
  };

  return (
    <button className="enter-button" onClick={handleClick}>
      ENTER THE WASTES
    </button>
  );
}

export default Button;
