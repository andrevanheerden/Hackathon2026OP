import { useEffect, useState } from 'react';
import './RightSidebar.css';

function RightSidebar({ selectedTile = null, players = [], onUpdatePlayer = () => {} }) {
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);
  const [healAmount, setHealAmount] = useState('');
  const [damageAmount, setDamageAmount] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingPlayerId, setEditingPlayerId] = useState(null);
  const [editForm, setEditForm] = useState({ maxHp: '', ac: '', maxEnergy: '' });
  const [energyAmount, setEnergyAmount] = useState('');
  const [encounterStarted, setEncounterStarted] = useState(false);
  const [roundNumber, setRoundNumber] = useState(0);

  const activePlayers = players.filter((p) => p.isActive);
  const displayPlayers = activePlayers.length > 0 ? activePlayers : players.slice(0, 1);
  const selectedPlayer = displayPlayers.find((player) => player.id === selectedPlayerId) ?? displayPlayers[0] ?? null;
  const editingPlayer = players.find((p) => p.id === editingPlayerId) ?? null;

  const openEditModal = (player) => {
    setEditingPlayerId(player.id);
    setEditForm({
      maxHp: player.maxHp ?? '',
      ac: player.ac ?? '',
      maxEnergy: String(typeof player.maxEnergy !== 'undefined' ? player.maxEnergy : 3),
    });
    setIsEditModalOpen(true);
  };

  useEffect(() => {
    if (!selectedTile || !['Encounter', 'Boss'].includes(selectedTile.category)) {
      setEncounterStarted(false);
      setRoundNumber(0);
    }
  }, [selectedTile]);

  const resetAllEnergy = () => {
    players.forEach((player) => {
      const maxEnergy = typeof player.maxEnergy !== 'undefined' ? player.maxEnergy : 3;
      onUpdatePlayer(player.id, { energy: maxEnergy });
    });
  };

  const dispatchResetEncounterEnergy = () => {
    window.dispatchEvent(new CustomEvent('resetEncounterEnergy'));
  };

  const handleStartEncounter = () => {
    setEncounterStarted(true);
    setRoundNumber(1);
  };

  const handleNextRound = () => {
    setRoundNumber((prev) => prev + 1);
    resetAllEnergy();
    dispatchResetEncounterEnergy();
  };

  const handleEndEncounter = () => {
    resetAllEnergy();
    dispatchResetEncounterEnergy();
    setEncounterStarted(false);
    setRoundNumber(0);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditingPlayerId(null);
    setEditForm({ maxHp: '', ac: '', maxEnergy: '' });
  };

  const applyHeal = () => {
    if (!selectedPlayer) {
      return;
    }

    const parsedAmount = Number.parseInt(healAmount, 10);
    if (!Number.isFinite(parsedAmount) || parsedAmount <= 0) {
      return;
    }

    const currentHp = typeof selectedPlayer.hp !== 'undefined' ? selectedPlayer.hp : selectedPlayer.maxHp || 0;
    const nextHp = Math.min(selectedPlayer.maxHp || 0, currentHp + parsedAmount);

    onUpdatePlayer(selectedPlayer.id, { hp: nextHp });
    setHealAmount('');
  };

  const applyDamage = () => {
    if (!selectedPlayer) {
      return;
    }

    const parsedAmount = Number.parseInt(damageAmount, 10);
    if (!Number.isFinite(parsedAmount) || parsedAmount <= 0) {
      return;
    }

    const currentHp = typeof selectedPlayer.hp !== 'undefined' ? selectedPlayer.hp : selectedPlayer.maxHp || 0;
    const nextHp = Math.max(0, currentHp - parsedAmount);

    onUpdatePlayer(selectedPlayer.id, { hp: nextHp });
    setDamageAmount('');
  };

  const saveEdit = () => {
    if (!editingPlayerId) {
      return;
    }

    const parsedMaxHp = Number.parseInt(editForm.maxHp, 10);
    const parsedAc = Number.parseInt(editForm.ac, 10);
    const parsedMaxEnergy = Number.parseInt(editForm.maxEnergy, 10);
    const editingPlayer = players.find((player) => player.id === editingPlayerId);

    if (!editingPlayer) {
      return;
    }

    const currentHp = typeof editingPlayer.hp !== 'undefined' ? editingPlayer.hp : editingPlayer.maxHp || 0;
    const currentMaxHp = editingPlayer.maxHp || 0;
    const nextMaxHp = Number.isFinite(parsedMaxHp) && parsedMaxHp > 0 ? parsedMaxHp : currentMaxHp;
    const hpDelta = nextMaxHp - currentMaxHp;
    const nextCurrentHp = Math.min(nextMaxHp, Math.max(0, currentHp + hpDelta));


    const nextAc = Number.isFinite(parsedAc) ? Math.min(10, Math.max(1, parsedAc)) : editingPlayer.ac;

    const currentEnergy = typeof editingPlayer.energy !== 'undefined' ? editingPlayer.energy : editingPlayer.maxEnergy ?? 3;
    const currentMaxEnergy = typeof editingPlayer.maxEnergy !== 'undefined' ? editingPlayer.maxEnergy : 3;
    const nextMaxEnergy = Number.isFinite(parsedMaxEnergy) ? Math.min(10, Math.max(3, parsedMaxEnergy)) : currentMaxEnergy;
    const nextEnergy = Math.min(nextMaxEnergy, Math.max(0, currentEnergy));

    onUpdatePlayer(editingPlayerId, (player) => ({
      ...player,
      maxHp: nextMaxHp,
      hp: nextCurrentHp,
      ac: nextAc,
      maxEnergy: nextMaxEnergy,
      energy: nextEnergy,
    }));

    closeEditModal();
  };

  const showEncounterControls = selectedTile && ['Encounter', 'Boss'].includes(selectedTile.category);

  return (
    <aside className="right-sidebar">
      <div className="right-sidebar__header">
        <p>STATUS HUB</p>
      </div>

      {showEncounterControls && (
        <div className={`encounter-control-panel ${encounterStarted ? 'encounter-active' : ''}`}>
          {!encounterStarted ? (
            <button type="button" className="encounter-start-button" onClick={handleStartEncounter}>
              Start Encounter
            </button>
          ) : (
            <>
              <div className="encounter-round-label">ROUND {roundNumber}</div>
              <div className="encounter-round-actions">
                <button type="button" className="encounter-round-button encounter-round-button--next" onClick={handleNextRound}>
                  Next Round
                </button>
                <button type="button" className="encounter-round-button encounter-round-button--end" onClick={handleEndEncounter}>
                  End Encounter
                </button>
              </div>
            </>
          )}
        </div>
      )}

      <div className="right-sidebar__tile">
        <div className="right-sidebar__tile-body">
          <div className="player-list">
            {displayPlayers.length === 0 ? (
              <div className="player-empty">No players configured yet.</div>
            ) : (
              displayPlayers.map((player) => {
                const currentHp = typeof player.hp !== 'undefined' ? player.hp : player.maxHp || 0;
                const maxHp = player.maxHp || 0;
                const hpPercent = maxHp > 0 ? Math.max(0, Math.min(100, Math.round((currentHp / maxHp) * 100))) : 0;
                const maxEnergy = typeof player.maxEnergy !== 'undefined' ? player.maxEnergy : 3;
                const energy = typeof player.energy !== 'undefined' ? player.energy : maxEnergy;
                const isSelected = selectedPlayer?.id === player.id;

                return (
                  <div
                    key={player.id}
                    className={`player ${isSelected ? 'player--selected' : ''}`}
                    style={{ '--accent': player.color || '#8b6ef0' }}
                    onClick={() => setSelectedPlayerId(player.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        setSelectedPlayerId(player.id);
                      }
                    }}
                  >
                    <div className="player__head">
                      <div>
                        <p className="player__label">{player.name}</p>
                      </div>
                      <button
                        type="button"
                        className="player__edit-button"
                        onClick={(event) => {
                          event.stopPropagation();
                          openEditModal(player);
                        }}
                        aria-label={`Edit ${player.name}`}
                      >
                        ✎
                      </button>
                    </div>

                    <div className="hp-meter">
                      <div className="hp-bar" aria-hidden>
                        <div className="hp-bar__fill" style={{ width: `${hpPercent}%` }} />
                      </div>
                      <span className="hp-meter__label">{hpPercent}%</span>
                    </div>

                    <div className="energy-meter" aria-hidden>
                      <div className="energy-segments">
                        {Array.from({ length: maxEnergy }).map((_, i) => (
                          <span
                            key={i}
                            className={`energy-segment ${i < energy ? 'energy-segment--filled' : ''}`}
                          />
                        ))}
                      </div>
                      <span className="hp-meter__label">{energy}/{maxEnergy}</span>
                    </div>

                    <div className="player__meta">
                      <div className="player__meta-item">
                        <span className="meta-label">HP</span>
                        <strong>{currentHp}/{maxHp}</strong>
                      </div>
                      <div className="player__meta-item">
                        <span className="meta-label">Energy</span>
                        <strong>{energy}/{maxEnergy}</strong>
                      </div>
                      <div className="player__meta-item">
                        <span className="meta-label">AC</span>
                        <strong>{player.ac}</strong>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {selectedPlayer ? (
            <div className="player__actions">
              <p className="player__actions-title">Selected: {selectedPlayer.name}</p>
              <div className="player__controls">
                <label className="player__control">
                  <span>Heal</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="0"
                    value={healAmount}
                    onChange={(event) => setHealAmount(event.target.value.replace(/[^0-9]/g, ''))}
                  />
                  <button type="button" className="player__action-button player__action-button--primary" onClick={applyHeal}>
                    Apply
                  </button>
                </label>

                <label className="player__control">
                  <span>Damage</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="0"
                    value={damageAmount}
                    onChange={(event) => setDamageAmount(event.target.value.replace(/[^0-9]/g, ''))}
                  />
                  <button type="button" className="player__action-button player__action-button--danger" onClick={applyDamage}>
                    Apply
                  </button>
                </label>
                <label className="player__control">
                  <span>Energy</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="0"
                    value={energyAmount}
                    onChange={(event) => setEnergyAmount(event.target.value.replace(/[^0-9]/g, ''))}
                  />
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button
                      type="button"
                      className="player__action-button"
                      onClick={() => {
                        const parsed = Number.parseInt(energyAmount, 10);
                        if (!selectedPlayer || !Number.isFinite(parsed) || parsed <= 0) return;
                        const current = typeof selectedPlayer.energy !== 'undefined' ? selectedPlayer.energy : selectedPlayer.maxEnergy ?? 3;
                        const next = Math.max(0, current - parsed);
                        onUpdatePlayer(selectedPlayer.id, { energy: next });
                        setEnergyAmount('');
                      }}
                    >
                      Consume
                    </button>
                    <button
                      type="button"
                      className="player__action-button player__action-button--primary"
                      onClick={() => {
                        const parsed = Number.parseInt(energyAmount, 10);
                        if (!selectedPlayer || !Number.isFinite(parsed) || parsed <= 0) return;
                        const maxE = typeof selectedPlayer.maxEnergy !== 'undefined' ? selectedPlayer.maxEnergy : 3;
                        const current = typeof selectedPlayer.energy !== 'undefined' ? selectedPlayer.energy : maxE;
                        const next = Math.min(maxE, current + parsed);
                        onUpdatePlayer(selectedPlayer.id, { energy: next });
                        setEnergyAmount('');
                      }}
                    >
                      Restore
                    </button>
                  </div>
                </label>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {isEditModalOpen ? (
        <div className="player-edit-modal__backdrop" onClick={closeEditModal}>
          <div className="player-edit-modal" onClick={(event) => event.stopPropagation()}>
            <div className="player-edit-modal__header">
              <h3>Edit status</h3>
              <button type="button" className="player-edit-modal__close" onClick={closeEditModal}>
                ×
              </button>
            </div>

            <div className="player-edit-modal__field">
              <label htmlFor="edit-max-hp">Max HP</label>
              <input
                id="edit-max-hp"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={editForm.maxHp}
                onChange={(event) => setEditForm((current) => ({ ...current, maxHp: event.target.value.replace(/[^0-9]/g, '') }))}
              />
            </div>

            <div className="player-edit-modal__field">
              <label htmlFor="edit-ac">AC</label>
              <input
                id="edit-ac"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={editForm.ac}
                onChange={(event) => setEditForm((current) => ({ ...current, ac: event.target.value.replace(/[^0-9]/g, '') }))}
              />
            </div>

            <div className="player-edit-modal__field">
              <label htmlFor="edit-max-energy">Max Energy</label>
              <input
                id="edit-max-energy"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={editForm.maxEnergy}
                onChange={(event) => setEditForm((current) => ({ ...current, maxEnergy: event.target.value.replace(/[^0-9]/g, '') }))}
              />
            </div>

            

            <div className="player-edit-modal__actions">
              <button type="button" className="player-edit-modal__secondary" onClick={closeEditModal}>
                Cancel
              </button>
              <button type="button" className="player-edit-modal__primary" onClick={saveEdit}>
                Save
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </aside>
  );
}

export default RightSidebar;
