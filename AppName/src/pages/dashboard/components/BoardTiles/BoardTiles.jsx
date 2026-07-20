import TileCard from '../TileCard/TileCard';
import './BoardTiles.css';

function BoardTiles({ tiles, selectedTileId, onSelectTile, selectedTile }) {
  return (
    <section className="board-tiles">
      <div className="board-tiles__heading">
        <p>◈ Board Tiles — Select to inspect</p>
      </div>

      <div className="board-tiles__grid">
        {tiles.map((tile) => (
          <TileCard
            key={tile.id}
            tile={tile}
            selected={tile.id === selectedTileId}
            onSelect={() => onSelectTile(tile.id)}
          />
        ))}
      </div>

      <div className="board-tiles__detail">
        <div className="board-tiles__detail-top">
          <p className="board-tiles__detail-label">Selected Tile</p>
          <h3>{selectedTile?.title || '—'}</h3>
        </div>
        <div className="board-tiles__detail-body">
          <p>{selectedTile?.type || 'No tile selected'}</p>
          <span>Inspect the board and track your next move.</span>
        </div>
      </div>
    </section>
  );
}

export default BoardTiles;
