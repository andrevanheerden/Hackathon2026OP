import { useState } from 'react';
import './CharacterSetupModal.css';

const createPlayer = (id, name, maxHp, ac, color, isActive = false) => ({
  id,
  name,
  maxHp,
  ac,
  color,
  isActive,
});

function CharacterSetupModal({ isOpen, onClose }) {
  const [players, setPlayers] = useState([
    createPlayer(1, 'Player One', 25, 5, '#ff7a1a', true),
    createPlayer(2, 'Player Two', 25, 5, '#9b59ff', false),
    createPlayer(3, 'Player Three', 25, 5, '#3fd1b9', false),
  ]);

  if (!isOpen) {
    return null;
  }

  const updatePlayer = (id, field, value) => {
    setPlayers((currentPlayers) =>
      currentPlayers.map((player) => {
        if (player.id !== id) {
          return player;
        }

        if (field === 'name') {
          return { ...player, name: value };
        }

        const numericValue = Number(value);

        return {
          ...player,
          [field]: Number.isFinite(numericValue) ? numericValue : 0,
        };
      })
    );
  };

  const handleSetActivePlayer = (id) => {
    setPlayers((currentPlayers) =>
      currentPlayers.map((player) =>
        player.id === id ? { ...player, isActive: !player.isActive } : player
      )
    );
  };

  return (
    <div className="character-modal-backdrop" onClick={onClose}>
      <div className="character-modal" onClick={(event) => event.stopPropagation()}>
        <div className="character-modal__header">
          <div>
            <p className="character-modal__eyebrow">Party Setup</p>
            <h2 className="character-modal__title">Choose your adventurers</h2>
          </div>
          <button className="character-modal__close" onClick={onClose} aria-label="Close setup">
            ×
          </button>
        </div>

        <p className="character-modal__description">
          Assign each player a name, edit their maximum hit points, and tune their armor class before you begin.
        </p>

        <div className="character-modal__players">
          {players.map((player) => (
            <article
              key={player.id}
              className={`player-card ${player.isActive ? 'player-card--active' : 'player-card--inactive'}`}
              style={{ '--accent': player.color }}
            >
              <div className="player-card__top">
                <div>
                  <p className="player-card__label">Player {player.id}</p>
                  <h3 className="player-card__name">{player.name}</h3>
                </div>
                <button
                  type="button"
                  className={`player-card__toggle ${player.isActive ? 'player-card__toggle--active' : 'player-card__toggle--inactive'}`}
                  onClick={() => handleSetActivePlayer(player.id)}
                  style={player.isActive ? { borderColor: player.color } : undefined}
                >
                  <span className="player-card__toggle-knob" />
                  {player.isActive ? 'Playing' : 'Not playing'}
                </button>
              </div>

              <label className="player-card__field">
                <span>Name</span>
                <input
                  type="text"
                  value={player.name}
                  onChange={(event) => updatePlayer(player.id, 'name', event.target.value)}
                  placeholder="Enter player name"
                />
              </label>

              <label className="player-card__field">
                <span>Max HP</span>
                <input
                  type="number"
                  min="1"
                  value={player.maxHp}
                  onChange={(event) => updatePlayer(player.id, 'maxHp', event.target.value)}
                />
              </label>

              <label className="player-card__field">
                <span>AC</span>
                <input
                  type="number"
                  min="0"
                  value={player.ac}
                  onChange={(event) => updatePlayer(player.id, 'ac', event.target.value)}
                />
              </label>

              <div className="player-card__hp">
                <div className="player-card__hp-bar">
                  <div
                    className="player-card__hp-fill"
                    style={{
                      width: `${Math.min(100, (player.maxHp / 25) * 100)}%`,
                      background: `linear-gradient(90deg, ${player.color}, rgba(255,255,255,0.08))`,
                    }}
                  />
                </div>
                <p className="player-card__hp-label">{player.maxHp} / 25 HP</p>
              </div>

              <div className="player-card__footer">
                <span>Base AC: 5</span>
                <span>Base HP: 25</span>
              </div>
            </article>
          ))}
        </div>

        <div className="character-modal__actions">
          <button type="button" className="character-modal__secondary" onClick={onClose}>
            Cancel
          </button>
          <button type="button" className="character-modal__primary" onClick={onClose}>
            Begin the Journey
          </button>
        </div>
      </div>
    </div>
  );
}

export default CharacterSetupModal;
