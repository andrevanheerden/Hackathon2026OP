import TileCard from '../TileCard/TileCard';
import { useEffect, useMemo, useState } from 'react';
import './BoardTiles.css';

import zombie from '../../data/encounerImg/zombie.png';

function BoardTiles({ tiles, selectedTileId, onSelectTile, selectedTile, players = [] }) {
  const [encounterState, setEncounterState] = useState(null);
  const playersCount = players ? players.length : 0;
  const categorySlug = selectedTile ? String((selectedTile.category || selectedTile.type || '')).toLowerCase().replace(/[^a-z0-9]+/g, '-') : '';
  const detailClassName = `board-tiles__detail ${categorySlug ? `board-tiles__detail--cat-${categorySlug}` : ''}`;

  useEffect(() => {
    if (selectedTile && selectedTile.details && selectedTile.details.encounter) {
      const enc = selectedTile.details.encounter;
      const baseHp = Number(enc.hp) || 0;
      const maxHp = baseHp * Math.max(1, playersCount || 1);
      const maxEnergy = Number(enc.energy) || 0;
      setEncounterState({
        baseHp,
        maxHp,
        currentHp: Math.max(0, Math.floor(maxHp)),
        ac: Number(enc.ac) || 0,
        maxEnergy,
        currentEnergy: Math.max(0, Number(enc.energy) || 0),
        actionCards: Array.isArray(enc.actionCards) ? [...enc.actionCards] : [],
      });
    } else {
      setEncounterState(null);
    }
  }, [selectedTile, playersCount]);

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
                  {(() => {
                    const area = selectedTile.area || (selectedTile.details && selectedTile.details.area);
                    return (
                      <span className="tile-hero__label">TILE {selectedTile.number} · {selectedTile.category || selectedTile.type}{area ? <> · {area}</> : null}</span>
                    );
                  })()}
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
              
              {/* Event Description */}
              <div className="tile-detail__section">
                <p className="tile-detail__section-title">Event Description</p>
                <div className="tile-detail__text-row">
                  <strong>Environment</strong>
                  <span>{selectedTile.details.environment}</span>
                </div>
              </div>
              
              {/* NPC Block */}
              {(selectedTile.details.npcAppearance || selectedTile.details.npcImage || selectedTile.details.voiceStyle || selectedTile.details.npcLabel) && (
                <div className="tile-detail__section tile-detail__npc-block">
                  <div className="tile-detail__npc-image">
                    <div className="tile-detail__portrait-flair">{selectedTile.details.npcLabel || 'NPC'}</div>
                    <span>{selectedTile.details.npcImage ? 'Image placeholder' : 'NPC'}</span>
                  </div>
                  <div className="tile-detail__npc-copy">
                    {selectedTile.details.npcAppearance && (
                      <div className="tile-detail__text-row">
                        <strong>NPC Appearance</strong>
                        <span>{selectedTile.details.npcAppearance}</span>
                      </div>
                    )}
                    {selectedTile.details.voiceStyle && (
                      <div className="tile-detail__text-row">
                        <strong>Voice Style</strong>
                        <span>{selectedTile.details.voiceStyle}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              <div className="tile-detail__section">
                <p className="tile-detail__section-title">Event Story</p>
                <span>{selectedTile.details.eventStory}</span>
              </div>
              
              {/* NEW ENCOUNTER SECTION DESIGN */}
              {selectedTile.details.encounter && (
                <div className="mock-encounter-panel">
                  
                  {/* Encounter Header */}
                  <div className="mock-encounter-header">
                    <div className="mock-encounter-titles">
                      <div className="mock-encounter-subtitle">ENCOUNTER</div>
                      <div className="mock-encounter-maintitle">{selectedTile.details.encounter.name}</div>
                    </div>
                    <div className="mock-encounter-pill">ENCOUNTER</div>
                  </div>

                  <div className="mock-encounter-body">
                    {/* Left Column: Stats and Controls */}
                    <div className="mock-encounter-left">
                      <div className="mock-encounter-description">
                        <strong>Description:</strong>
                        <p>{selectedTile.details.encounter.appearance}</p>
                      </div>

                      <div className="mock-encounter-bars">
                        {/* HP Bar */}
                        <div className="mock-bar-header">
                          <span className="mock-hp-label">HP</span>
                          <span className="mock-hp-val">
                            {encounterState ? Math.round((encounterState.currentHp / encounterState.maxHp) * 100) : 100}%
                          </span>
                        </div>
                        <div className="mock-hp-bar">
                          <div 
                            className="mock-hp-fill" 
                            style={{ width: encounterState ? `${(encounterState.currentHp / encounterState.maxHp) * 100}%` : '100%' }}>
                          </div>
                        </div>

                        {/* Energy Bar */}
                        <div className="mock-bar-header">
                          <span className="mock-energy-label">Energy</span>
                          <span className="mock-energy-val">
                            {encounterState ? encounterState.currentEnergy : selectedTile.details.encounter.energy}/{encounterState ? encounterState.maxEnergy : selectedTile.details.encounter.energy}
                          </span>
                        </div>
                        <div className="mock-energy-segments">
                          {Array.from({ length: encounterState ? encounterState.maxEnergy : selectedTile.details.encounter.energy }).map((_, i) => {
                            const isFilled = encounterState ? i < encounterState.currentEnergy : true;
                            return (
                              <div key={i} className={`mock-energy-segment ${isFilled ? 'filled' : ''}`}></div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Interactive Controls */}
                      <div className="mock-controls-grid">
                        {/* Heal Row */}
                        <div className="mock-ctrl-label">Heal</div>
                        <input type="number" defaultValue="0" min="0" id={`enc-heal-${selectedTile.id}`} className="mock-ctrl-input" />
                        <button className="mock-ctrl-btn mock-btn-heal mock-btn-full" onClick={() => {
                          const val = Number(document.getElementById(`enc-heal-${selectedTile.id}`)?.value || 0);
                          setEncounterState(s => s ? { ...s, currentHp: Math.min(s.maxHp, s.currentHp + val) } : s);
                        }}>Heal</button>

                        {/* Damage Row (Visually matches the mock's typo) */}
                        <div className="mock-ctrl-label">Damage</div>
                        <input type="number" defaultValue="0" min="0" id={`enc-dmg-${selectedTile.id}`} className="mock-ctrl-input" />
                        <button className="mock-ctrl-btn mock-btn-damage mock-btn-full" onClick={() => {
                          const val = Number(document.getElementById(`enc-dmg-${selectedTile.id}`)?.value || 0);
                          setEncounterState(s => s ? { ...s, currentHp: Math.max(0, s.currentHp - val) } : s);
                        }}>Damage</button>

                        {/* Energy Row */}
                        <div className="mock-ctrl-label">energy</div>
                        <input type="number" defaultValue="0" min="0" id={`enc-energy-${selectedTile.id}`} className="mock-ctrl-input" />
                        <button className="mock-ctrl-btn mock-btn-consume" onClick={() => {
                          const val = Number(document.getElementById(`enc-energy-${selectedTile.id}`)?.value || 0);
                          setEncounterState(s => s ? { ...s, currentEnergy: Math.max(0, s.currentEnergy - val) } : s);
                        }}>Consume</button>
                        <button className="mock-ctrl-btn mock-btn-restore" onClick={() => {
                          const val = Number(document.getElementById(`enc-energy-${selectedTile.id}`)?.value || 0);
                          setEncounterState(s => s ? { ...s, currentEnergy: Math.min(s.maxEnergy, s.currentEnergy + val) } : s);
                        }}>Restore</button>

                        {/* AC Row */}
                        <div className="mock-ctrl-label">AC</div>
                        <input type="number" defaultValue="0" min="0" id={`enc-ac-${selectedTile.id}`} className="mock-ctrl-input" />
                        <button className="mock-ctrl-btn mock-btn-ac" onClick={() => {
                          const val = Number(document.getElementById(`enc-ac-${selectedTile.id}`)?.value || 0);
                          setEncounterState(s => s ? { ...s, ac: s.ac + val } : s);
                        }}>Add</button>
                        <button className="mock-ctrl-btn mock-btn-ac" onClick={() => {
                          const val = Number(document.getElementById(`enc-ac-${selectedTile.id}`)?.value || 0);
                          setEncounterState(s => s ? { ...s, ac: Math.max(0, s.ac - val) } : s);
                        }}>Remove</button>
                      </div>

                    </div>

                    {/* Right Column: Portrait and AC Hex */}
                    <div className="mock-encounter-right">
                      <div className="mock-hex-badge">
                        <span className="mock-hex-val">{encounterState ? encounterState.ac : selectedTile.details.encounter.ac}</span>
                        <span className="mock-hex-lbl">AC</span>
                      </div>
                      <img 
                        src={zombie} 
                        alt={selectedTile.details.encounter.name} 
                        className="mock-portrait-img" 
                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/assets/desrt-zomby.svg'; }} 
                      />
                    </div>
                  </div>
                </div>
              )}

              {selectedTile.details.dialogue && (
                <div className="tile-detail__section">
                  <p className="tile-detail__section-title">Dialogue</p>
                  <span>{selectedTile.details.dialogue}</span>
                </div>
              )}
              
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