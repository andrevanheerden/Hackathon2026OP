import './RightSidebar.css';

function RightSidebar({ players = [] }) {
  const activePlayers = players.filter((p) => p.isActive || true);

  return (
    <aside className="right-sidebar">
      <div className="right-sidebar__tile">
        <div className="right-sidebar__tile-title">Status Hub</div>
        <div className="right-sidebar__tile-body">
          <div className="player-list">
            {activePlayers.length === 0 ? (
              <div className="player-empty">No players selected yet.</div>
            ) : (
              activePlayers.map((player) => {
                const currentHp = typeof player.hp !== 'undefined' ? player.hp : player.maxHp || 0;
                const maxHp = player.maxHp || 0;
                const hpPercent = maxHp > 0 ? Math.max(0, Math.min(100, Math.round((currentHp / maxHp) * 100))) : 0;
                return (
                  <div
                    key={player.id}
                    className="player"
                    style={{ '--accent': player.color || '#8b6ef0' }}
                  >
                    <div className="player__head">
                      <div>
                        <p className="player__label">{player.name}</p>
                      </div>
                      <div className="player__hp-value">{player.hp}/{player.maxHp}</div>
                    </div>

                    <div className="hp-bar" aria-hidden>
                      <div className="hp-bar__fill" style={{ width: `${hpPercent}%` }} />
                    </div>

                    <div className="player__meta">
                      <div className="player__meta-item">
                        <span className="meta-label">AC</span>
                        <strong>{player.ac}</strong>
                      </div>
                      <div className="player__meta-item">
                        <span className="meta-label">Status</span>
                        <span className="meta-pill">{player.status || 'Normal'}</span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default RightSidebar;
