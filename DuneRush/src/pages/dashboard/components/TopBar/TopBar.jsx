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
      </div>
    </header>
  );
}

export default TopBar;
