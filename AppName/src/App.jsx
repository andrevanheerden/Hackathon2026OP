import { useEffect, useState } from 'react';
import Splash from './pages/splash/Splash';
import Dashboard from './pages/dashboard/dashboard';
import Rules from './pages/rules/Rules';
import CardLibraryPage from './pages/cardLibary/CardLibraryPage';
import './App.css';

function App() {
  const [sessionPlayers, setSessionPlayers] = useState([]);
  const [currentView, setCurrentView] = useState('splash');
  const [dashboardActivePage, setDashboardActivePage] = useState('I-X');
  const [dashboardSelectedTileId, setDashboardSelectedTileId] = useState(11);

  useEffect(() => {
    window.localStorage.removeItem('session-players');
    window.sessionStorage.clear();
  }, []);

  const updatePlayer = (playerId, changes) => {
    setSessionPlayers((currentPlayers) =>
      currentPlayers.map((player) => {
        if (player.id !== playerId) {
          return player;
        }

        if (typeof changes === 'function') {
          return { ...player, ...changes(player) };
        }

        return { ...player, ...changes };
      })
    );
  };

  if (currentView === 'dashboard') {
    return (
      <Dashboard
        players={sessionPlayers}
        onNavigate={setCurrentView}
        onUpdatePlayer={updatePlayer}
        activePage={dashboardActivePage}
        onChangePage={setDashboardActivePage}
        selectedTileId={dashboardSelectedTileId}
        onSelectTile={setDashboardSelectedTileId}
      />
    );
  }

  if (currentView === 'rules') {
    return <Rules onNavigate={setCurrentView} />;
  }

  if (currentView === 'card-library') {
    return <CardLibraryPage onNavigate={setCurrentView} />;
  }

  return (
    <Splash
      onStartJourney={(players) => {
        setSessionPlayers(players);
        setCurrentView('dashboard');
      }}
    />
  );
}

export default App;
