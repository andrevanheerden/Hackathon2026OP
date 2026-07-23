import './TopBar.css';

function TopBar({ activePage, onChangePage }) {
  return (
    <header className="topbar">
      <div className="topbar__title-group">
        <h1>GM CONSOLE</h1>
        <p>Game Name · MMXXVI</p>
      </div>

      <div className="topbar__actions">
        <button
          type="button"
          className={`topbar__button ${activePage === 'I-X' ? 'topbar__button--active' : ''}`}
          onClick={() => onChangePage('I-X')}
        >
          Tiles I–X
        </button>
        <button
          type="button"
          className={`topbar__button ${activePage === 'XI-XX' ? 'topbar__button--active' : ''}`}
          onClick={() => onChangePage('XI-XX')}
        >
          Tiles XI–XX
        </button>
        <button
          type="button"
          className={`topbar__button ${activePage === 'XXI-XXX' ? 'topbar__button--active' : ''}`}
          onClick={() => onChangePage('XXI-XXX')}
        >
          Tiles XXI–XXX
        </button>
        <button
          type="button"
          className={`topbar__button ${activePage === 'XXXI-XXXIX' ? 'topbar__button--active' : ''}`}
          onClick={() => onChangePage('XXXI-XXXIX')}
        >
          Tiles XXXI–XXXIX
        </button>
        <button
          type="button"
          className={`topbar__button ${activePage === 'XL-XLIX' ? 'topbar__button--active' : ''}`}
          onClick={() => onChangePage('XL-XLIX')}
        >
          Tiles XL–XLIX
        </button>
      </div>
    </header>
  );
}

export default TopBar;
