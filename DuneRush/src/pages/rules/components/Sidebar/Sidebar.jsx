import { useLocation, useNavigate } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'HOME', path: '/' },
    { id: 'rules', label: 'RULES', path: '/rules' },
  ];

  return (
    <nav className="sidebar">
      <div className="sidebar-top">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`sidebar-item ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            <span className="sidebar-icon">
              <span className="sidebar-diamond"></span>
            </span>
            <span className="sidebar-label">{item.label}</span>
          </button>
        ))}
      </div>
      <div className="sidebar-bottom">
        <span className="sidebar-version">v0.1</span>
      </div>
    </nav>
  );
}

export default Sidebar;

