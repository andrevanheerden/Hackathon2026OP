import { useEffect, useMemo, useState } from 'react';
import './dashboard.css';
import Sidebar from './components/Sidebar/Sidebar';
import TopBar from './components/TopBar/TopBar';
import BoardTiles from './components/BoardTiles/BoardTiles';
import RightSidebar from './components/RightSidebar/RightSidebar';
import { tilesPageOne, tilesPageTwo, tilesPageThree, tilesPageFour, tilesPageFive, tilesPageSix } from './data/tiles';

function Dashboard({
  players = [],
  onNavigate = () => {},
  onUpdatePlayer = () => {},
  activePage = 'I-X',
  onChangePage = () => {},
  selectedTileId = 11,
  onSelectTile = () => {},
}) {
  const tiles = useMemo(() => {
    if (activePage === 'L-LII') return tilesPageSix;
    if (activePage === 'XL-XLIX') return tilesPageFive;
    if (activePage === 'XXXI-XXXIX') return tilesPageFour;
    if (activePage === 'XXI-XXX') return tilesPageThree;
    if (activePage === 'XI-XX') return tilesPageTwo;
    return tilesPageOne;
  }, [activePage]);
  const selectedTile = tiles.find((tile) => tile.id === selectedTileId);

  return (
    <div className="dashboard-shell">
      <Sidebar onNavigate={onNavigate} activeView="dashboard" />
      <div className="dashboard-main">
        <TopBar activePage={activePage} onChangePage={onChangePage} />
        <div className="dashboard-content">
          <div className="dashboard-content__left">
            <BoardTiles
              tiles={tiles}
              selectedTileId={selectedTileId}
              onSelectTile={onSelectTile}
              selectedTile={selectedTile}
              players={players}
            />
          </div>
        </div>
      </div>
      <RightSidebar selectedTile={selectedTile} players={players} onUpdatePlayer={onUpdatePlayer} />
    </div>
  );
}

export default Dashboard;
