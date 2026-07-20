import './StatusHub.css';

function StatusHub({ players }) {
  const activePlayers = players.filter((player) => player.isActive);

  return (
    <section className="status-hub">
      <div className="status-hub__header">
        <p>◈ Active Party</p>
      </div>

      <div className="status-hub__players">
        {activePlayers.length === 0 ? (
          <div className="status-hub__empty">No players selected yet.</div>
        ) : (
          activePlayers.map((player) => (
            <article key={player.id} className="status-player" style={{ '--accent': player.color }}>
              <div className="status-player__top">
                <div>
                  <p className="status-player__label">Player {player.id}</p>
                  <h3>{player.name}</h3>
                </div>
                <span className="status-player__pill">Active</span>
              </div>
              <div className="status-player__stats">
                <div>
                  <span>HP</span>
                  <strong>{player.maxHp}</strong>
                </div>
                <div>
                  <span>AC</span>
                  <strong>{player.ac}</strong>
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}

export default StatusHub;
