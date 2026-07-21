import { useEffect, useMemo, useState } from 'react';
import './dashboard.css';
import Sidebar from './components/Sidebar/Sidebar';
import TopBar from './components/TopBar/TopBar';
import BoardTiles from './components/BoardTiles/BoardTiles';
import RightSidebar from './components/RightSidebar/RightSidebar';
import { tilesPageOne, tilesPageTwo } from './data/tiles';

function Dashboard({ players = [] }) {
  const [activePage, setActivePage] = useState('I-X');
  const [selectedTileId, setSelectedTileId] = useState(11);
  const [sessionPlayers, setSessionPlayers] = useState(players);

  useEffect(() => {
    setSessionPlayers(players);
  }, [players]);


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

  const tiles = useMemo(() => (activePage === 'I-X' ? tilesPageOne : tilesPageTwo), [activePage]);
  const selectedTile = tiles.find((tile) => tile.id === selectedTileId);

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
              selectedTile={selectedTile}
              players={sessionPlayers}
            />
          </div>
        </div>
      </div>
      <RightSidebar selectedTile={selectedTile} players={sessionPlayers} onUpdatePlayer={updatePlayer} />
    </div>
  );
}

export default Dashboard;
