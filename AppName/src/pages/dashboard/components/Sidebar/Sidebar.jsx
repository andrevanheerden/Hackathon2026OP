import './Sidebar.css';

function Sidebar({ onNavigate = () => {}, activeView = 'dashboard' }) {
  const isDashboard = activeView === 'dashboard';
  const isRules = activeView === 'rules';
  const isCardLibrary = activeView === 'card-library';

  return (
    <aside className="sidebar">
      <div className="sidebar__badge">
        <span>GM</span>
      </div>

      <div className="sidebar__divider" />

      <button
        type="button"
        className={`sidebar__nav ${isDashboard ? 'sidebar__nav--active' : ''}`}
        onClick={() => onNavigate('dashboard')}
      >
        <span className="sidebar__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
        </span>
        <span>Dashboard</span>
      </button>

            <button
        type="button"
        className={`sidebar__nav ${isCardLibrary ? 'sidebar__nav--active' : ''}`}
        onClick={() => onNavigate('card-library')}
      >
        <span className="sidebar__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M8 8H16" strokeLinecap="round" />
            <path d="M8 12H16" strokeLinecap="round" />
            <path d="M8 16H12" strokeLinecap="round" />
          </svg>
        </span>
        <span>Card Library</span>
      </button>

      <button
        type="button"
        className={`sidebar__nav ${isRules ? 'sidebar__nav--active' : ''}`}
        onClick={() => onNavigate('rules')}
      >
        <span className="sidebar__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M6 7.5C6 6.67 6.67 6 7.5 6H16.5C17.33 6 18 6.67 18 7.5V16.5C18 17.33 17.33 18 16.5 18H7.5C6.67 18 6 17.33 6 16.5V7.5Z" />
            <path d="M10 10H14" strokeLinecap="round" />
            <path d="M10 14H14" strokeLinecap="round" />
          </svg>
        </span>
        <span>How to Play</span>
      </button>



      <div className="sidebar__spacer" />

      <div className="sidebar__game-name">
        <span>Game</span>
        <span>Name</span>
      </div>
    </aside>
  );
}

export default Sidebar;
