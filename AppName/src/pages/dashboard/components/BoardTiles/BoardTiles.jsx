import TileCard from '../TileCard/TileCard';
import './BoardTiles.css';

function BoardTiles({ tiles, selectedTileId, onSelectTile, selectedTile }) {
  const categorySlug = selectedTile ? String((selectedTile.category || selectedTile.type || '')).toLowerCase().replace(/[^a-z0-9]+/g, '-') : '';
  const detailClassName = `board-tiles__detail ${categorySlug ? `board-tiles__detail--cat-${categorySlug}` : ''}`;

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

      <div className={detailClassName}>
        <div className="board-tiles__detail-top">
            {selectedTile ? (
              <div className={`tile-hero ${selectedTile.number === 1 ? 'tile-hero--one' : ''}`}>
                <div className="tile-hero__meta">
                  <span className="tile-hero__label">TILE {selectedTile.number} · {selectedTile.category || selectedTile.type}</span>
                </div>
                <span className="tile-hero__pill">{selectedTile.category || selectedTile.type}</span>
                <h2 className="tile-hero__title">{selectedTile.title}</h2>
               
              </div>
            ) : (
              <div className="board-tiles__detail-top">
                <p className="board-tiles__detail-label">Selected Tile</p>
                <h3>—</h3>
              </div>
            )}
          </div>
        {selectedTile ? (
          selectedTile.details ? (
            <div className="board-tiles__detail-body board-tiles__detail-rich">
              <div className="tile-detail__header"></div>
              <div className="tile-detail__section">
                <p className="tile-detail__section-title">Event Description</p>
                <div className="tile-detail__text-row">
                  <strong>Environment</strong>
                  <span>{selectedTile.details.environment}</span>
                </div>
              </div>
              <div className="tile-detail__section tile-detail__npc-block">
                <div className="tile-detail__npc-image">
                  <div className="tile-detail__portrait-flair">{selectedTile.details.npcLabel || 'NPC'}</div>
                  <span>{selectedTile.details.npcImage ? 'Image placeholder' : 'NPC'}</span>
                </div>
                <div className="tile-detail__npc-copy">
                  <div className="tile-detail__text-row">
                    <strong>NPC Appearance</strong>
                    <span>{selectedTile.details.npcAppearance}</span>
                  </div>
                  <div className="tile-detail__text-row">
                    <strong>Voice Style</strong>
                    <span>{selectedTile.details.voiceStyle}</span>
                  </div>
                </div>
              </div>
              <div className="tile-detail__section">
                <p className="tile-detail__section-title">Event Story</p>
                <span>{selectedTile.details.eventStory}</span>
              </div>
              <div className="tile-detail__section">
                <p className="tile-detail__section-title">Dialogue</p>
                <span>{selectedTile.details.dialogue}</span>
              </div>
              <div className="tile-detail__section tile-detail__section--reward">
                <p className="tile-detail__section-title">Reward</p>
                <div className="tile-detail__reward-panel">
                  <span className="tile-detail__reward-icon">◈</span>
                  <span>{selectedTile.details.reward}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="board-tiles__detail-body">
              <p>{selectedTile.type || 'Unknown tile'}</p>
              <span>Inspect the board and track your next move.</span>
            </div>
          )
        ) : (
          <div className="board-tiles__detail-body">
            <p>No tile selected</p>
            <span>Inspect the board and track your next move.</span>
          </div>
        )}
      </div>
    </section>
  );
}

export default BoardTiles;
