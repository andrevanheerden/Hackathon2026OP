import { useEffect, useMemo, useState } from 'react';
import './dashboard.css';
import Sidebar from './components/Sidebar/Sidebar';
import TopBar from './components/TopBar/TopBar';
import BoardTiles from './components/BoardTiles/BoardTiles';
import StatusHub from './components/StatusHub/StatusHub';
import { tilesPageOne, tilesPageTwo } from './data/tiles';

function Dashboard({ players = [] }) {
  const [activePage, setActivePage] = useState('I-X');
  const [selectedTileId, setSelectedTileId] = useState(11);
  const [sessionPlayers, setSessionPlayers] = useState(players);

  useEffect(() => {
    setSessionPlayers(players);
  }, [players]);

  useEffect(() => {
    const storedPlayers = window.localStorage.getItem('session-players');
    if (storedPlayers) {
      try {
        setSessionPlayers(JSON.parse(storedPlayers));
      } catch (error) {
        console.error('Failed to parse stored players', error);
      }
    }
  }, []);

  useEffect(() => {
    if (sessionPlayers.length > 0) {
      window.localStorage.setItem('session-players', JSON.stringify(sessionPlayers));
    }
  }, [sessionPlayers]);

  const tiles = useMemo(() => (activePage === 'I-X' ? tilesPageOne : tilesPageTwo), [activePage]);

  return (
    <div className="dashboard-shell">
      <Sidebar />
      <div className="dashboard-main">
        <TopBar activePage={activePage} onChangePage={setActivePage} />
        <div className="dashboard-content">
          <div className="dashboard-content__left">
            <BoardTiles
              tiles={tiles}
              selectedTileId={selectedTileId}
              onSelectTile={setSelectedTileId}
              selectedTile={tiles.find((tile) => tile.id === selectedTileId)}
            />
          </div>
          <div className="dashboard-content__right">
            <div className="dashboard-panel">
              <StatusHub players={sessionPlayers} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
