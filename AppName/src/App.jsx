import { useEffect, useState } from 'react';
import Splash from './pages/splash/Splash';
import Dashboard from './pages/dashboard/dashboard';
import './App.css';

function App() {
  const [sessionPlayers, setSessionPlayers] = useState([]);
  const [currentView, setCurrentView] = useState('splash');

  useEffect(() => {
    window.localStorage.removeItem('session-players');
    window.sessionStorage.clear();
  }, []);

  return currentView === 'dashboard' ? (
    <Dashboard players={sessionPlayers} />
  ) : (
    <Splash
      onStartJourney={(players) => {
        setSessionPlayers(players);
        setCurrentView('dashboard');
      }}
    />
  );
}

export default App;
