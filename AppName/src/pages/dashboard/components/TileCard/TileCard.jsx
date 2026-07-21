import './TileCard.css';

function TileCard({ tile, selected, onSelect }) {
  const categorySlug = String((tile.category || tile.type || '')).toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <button
      type="button"
      className={`tile-card ${selected ? 'tile-card--selected' : ''} ${categorySlug ? `tile-card--cat-${categorySlug}` : ''}`}
      onClick={onSelect}
    >
      <div className="tile-card__number">{tile.number}</div>
      <div className="tile-card__content">
        <p className="tile-card__type">{tile.type}</p>
        <h3>{tile.title}</h3>
      </div>
      {tile.highlighted ? <span className="tile-card__badge" /> : null}
    </button>
  );
}

export default TileCard;
