import TileCard from '../TileCard/TileCard';
import { useEffect, useMemo, useState } from 'react';
import './BoardTiles.css';

import zombie from '../../data/encounerImg/zombie.png';
import zombieArmor from '../../data/encounerImg/zombieArmor.png';
import sandDog from '../../data/encounerImg/sandDog.png';
import bandit from '../../data/encounerImg/bandit.png';
import TVheadImg from '../../data/encounerImg/TVhead.png';
import MerchantImg from '../../data/encounerImg/Merchant.png';
import GamblerImg from '../../data/encounerImg/gambler.png';
import DualKightImg from '../../data/encounerImg/DualKight.png';
import babySandCrallerImg from '../../data/encounerImg/babySandCraller.png';
import QuickSlashImg from '../../data/actionCards/QuickSlashCommon.png';
import PummelImg from '../../data/actionCards/PummelCommon.png';
import HeavySlamImg from '../../data/actionCards/HeavySlamRare.png';
import BladeDanceImg from '../../data/actionCards/BladeDanceRare.png';
import FireboltImg from '../../data/actionCards/FireboltCommon.png';

function BoardTiles({ tiles, selectedTileId, onSelectTile, selectedTile, players = [] }) {
  const [encounterState, setEncounterState] = useState(null);
  const [healAmount, setHealAmount] = useState('');
  const [damageAmount, setDamageAmount] = useState('');
  const [energyAmount, setEnergyAmount] = useState('');
  const [acAmount, setAcAmount] = useState('');
  const [damageType, setDamageType] = useState('slash');
  const damageTypes = ['slash', 'fire', 'blunt', 'force', 'water'];
  const activePlayers = Array.isArray(players) ? players.filter((player) => player.isActive) : [];
  const playersCount = activePlayers.length > 0 ? activePlayers.length : 1;
  const categorySlug = selectedTile ? String((selectedTile.category || selectedTile.type || '')).toLowerCase().replace(/[^a-z0-9]+/g, '-') : '';
  const detailClassName = `board-tiles__detail ${categorySlug ? `board-tiles__detail--cat-${categorySlug}` : ''}`;

  // Map card names to imported images
  const cardImageMap = {
    'Quick Slash': QuickSlashImg,
    'Pummel': PummelImg,
    'Heavy Slam': HeavySlamImg,
    'Blade Dance': BladeDanceImg,
    'Firebolt': FireboltImg,
  };

  const getCardImage = (cardName) => {
    return cardImageMap[cardName] || null;
  };

  const npcImageMap = {
    'TVhead.png': TVheadImg,
    'Merchant.png': MerchantImg,
    'gambler.png': GamblerImg,
    'DualKight.png': DualKightImg,
  };

  const encounterImageMap = {
    'sandDog.png': sandDog,
    'bandit.png': bandit,
    'zombieArmor.png': zombieArmor,
    'DualKight.png': DualKightImg,
    // accept both spellings (data file may reference either)
    'babySandCraller.png': babySandCrallerImg,
    'babySandCrawler.png': babySandCrallerImg,
  };

  const renderDialogueLines = (text) => {
    return String(text)
      .split(/(?<=[.?!])\s+/)
      .filter((line) => line.trim().length > 0)
      .map((line, idx) => (
        <p key={idx} className="tile-detail__dialogue-line">
          {line.trim()}
        </p>
      ));
  };

  // Load encounter state from session storage or initialize fresh
  useEffect(() => {
    if (selectedTile && selectedTile.details && selectedTile.details.encounter) {
      const enc = selectedTile.details.encounter;
      const baseHp = Number(enc.hp) || 0;
      const maxHp = selectedTile.id === 14 ? baseHp : baseHp * Math.max(1, playersCount || 1);
      const maxEnergy = Number(enc.energy) || 0;
      
      // Try to load from session storage first
      const storageKey = `encounter-${selectedTile.id}`;
      const stored = sessionStorage.getItem(storageKey);
      
      if (stored) {
        try {
          const savedState = JSON.parse(stored);
          setEncounterState(savedState);
        } catch {
          // If parse fails, use fresh state
          setEncounterState({
            baseHp,
            maxHp,
            currentHp: Math.max(0, Math.floor(maxHp)),
            ac: Number(enc.ac) || 0,
            maxEnergy,
            currentEnergy: Math.max(0, Number(enc.energy) || 0),
            actionCards: Array.isArray(enc.actionCards) ? [...enc.actionCards] : [],
          });
        }
      } else {
        setEncounterState({
          baseHp,
          maxHp,
          currentHp: Math.max(0, Math.floor(maxHp)),
          ac: Number(enc.ac) || 0,
          maxEnergy,
          currentEnergy: Math.max(0, Number(enc.energy) || 0),
          actionCards: Array.isArray(enc.actionCards) ? [...enc.actionCards] : [],
        });
      }
      
      // Reset input fields when tile changes
      setHealAmount('');
      setDamageAmount('');
      setEnergyAmount('');
      setAcAmount('');
      setDamageType('slash');
    } else {
      setEncounterState(null);
      setHealAmount('');
      setDamageAmount('');
      setEnergyAmount('');
      setAcAmount('');
      setDamageType('slash');
    }
  }, [selectedTile, playersCount]);

  // Save encounter state to session storage whenever it changes
  useEffect(() => {
    if (selectedTile && encounterState) {
      const storageKey = `encounter-${selectedTile.id}`;
      sessionStorage.setItem(storageKey, JSON.stringify(encounterState));
    }
  }, [encounterState, selectedTile]);

  // Listen for encounter energy reset events from the sidebar
  useEffect(() => {
    const handleResetEncounterEnergy = () => {
      if (!selectedTile || !selectedTile.details?.encounter) {
        return;
      }
      setEncounterState((state) => {
        if (!state) return state;
        return {
          ...state,
          currentEnergy: state.maxEnergy,
        };
      });
    };

    window.addEventListener('resetEncounterEnergy', handleResetEncounterEnergy);
    return () => {
      window.removeEventListener('resetEncounterEnergy', handleResetEncounterEnergy);
    };
  }, [selectedTile]);

  const applyHeal = () => {
    if (!encounterState) return;
    const parsed = Number.parseInt(healAmount, 10);
    if (!Number.isFinite(parsed) || parsed <= 0) return;
    setEncounterState(s => s ? { ...s, currentHp: Math.min(s.maxHp, s.currentHp + parsed) } : s);
    setHealAmount('');
  };

  const applyDamage = () => {
    if (!encounterState || !selectedTile?.details?.encounter) return;
    const parsed = Number.parseInt(damageAmount, 10);
    if (!Number.isFinite(parsed) || parsed <= 0) return;
    
    const enc = selectedTile.details.encounter;
    const normalizedType = String(damageType).trim().toLowerCase();
    const vulnerabilityMatch = Array.isArray(enc.vulnerabilities)
      ? enc.vulnerabilities.some((value) => String(value).trim().toLowerCase() === normalizedType)
      : false;
    const resistanceMatch = Array.isArray(enc.resistances)
      ? enc.resistances.some((value) => String(value).trim().toLowerCase() === normalizedType)
      : false;
    let finalDamage = parsed;
    
    // Check if vulnerability matches damage type - apply 2x
    if (vulnerabilityMatch) {
      finalDamage = parsed * 2;
    }
    // Check if resistance matches damage type - apply 0.5x
    else if (resistanceMatch) {
      finalDamage = Math.ceil(parsed * 0.5);
    }
    
    setEncounterState(s => s ? { ...s, currentHp: Math.max(0, s.currentHp - finalDamage) } : s);
    setDamageAmount('');
  };

  const consumeEnergy = () => {
    if (!encounterState) return;
    const parsed = Number.parseInt(energyAmount, 10);
    if (!Number.isFinite(parsed) || parsed <= 0) return;
    setEncounterState(s => s ? { ...s, currentEnergy: Math.max(0, s.currentEnergy - parsed) } : s);
    setEnergyAmount('');
  };

  const restoreEnergy = () => {
    if (!encounterState) return;
    const parsed = Number.parseInt(energyAmount, 10);
    if (!Number.isFinite(parsed) || parsed <= 0) return;
    setEncounterState(s => s ? { ...s, currentEnergy: Math.min(s.maxEnergy, s.currentEnergy + parsed) } : s);
    setEnergyAmount('');
  };

  const addAc = () => {
    if (!encounterState) return;
    const parsed = Number.parseInt(acAmount, 10);
    if (!Number.isFinite(parsed) || parsed <= 0) return;
    setEncounterState(s => s ? { ...s, ac: s.ac + parsed } : s);
    setAcAmount('');
  };

  const removeAc = () => {
    if (!encounterState) return;
    const parsed = Number.parseInt(acAmount, 10);
    if (!Number.isFinite(parsed) || parsed <= 0) return;
    setEncounterState(s => s ? { ...s, ac: Math.max(0, s.ac - parsed) } : s);
    setAcAmount('');
  };

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
                <div className="tile-detail__section-header">
                  <p className="tile-detail__section-title">Event Description</p>
                  <span className="tile-detail__section-pill">Read to player</span>
                </div>
                <div className="tile-detail__text-row">
                  <strong>Environment</strong>
                  <span>{selectedTile.details.environment}</span>
                </div>
              </div>
              
              {/* NPC Block */}
              {(selectedTile.details.npcAppearance || selectedTile.details.npcImage || selectedTile.details.voiceStyle || selectedTile.details.npcLabel) && (
                <div className="tile-detail__section tile-detail__npc-section">
                    <div className="tile-detail__section-header tile-detail__section-header--npc">
                    <p className="tile-detail__section-title">NPC</p>
                    <span className="tile-detail__section-pill tile-detail__section-pill--npc">NPC Info</span>
                  </div>
                  <div className="tile-detail__npc-block">
                    <div className="tile-detail__npc-image">
                      {selectedTile.details.npcImage ? (
                        <img
                          src={npcImageMap[selectedTile.details.npcImage] || selectedTile.details.npcImage}
                          alt={selectedTile.details.npcLabel || 'NPC'}
                          className="tile-detail__npc-image-img"
                          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.style.display = 'none'; }}
                        />
                      ) : (
                        <span>NPC</span>
                      )}
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
                </div>
              )}
              
              <div className="tile-detail__section">
                <div className="tile-detail__section-header">
                  <p className="tile-detail__section-title">Event Story</p>
                  <span className="tile-detail__section-pill">Read to player</span>
                </div>
                <span>{selectedTile.details.eventStory}</span>
              </div>

              {selectedTile.details.trapEffect && (
                <div className="tile-detail__section">
                  <div className="tile-detail__section-header">
                    <p className="tile-detail__section-title">Trap Effect</p>
                    <span className="tile-detail__section-pill tile-detail__section-pill--trap">Trap Info</span>
                  </div>
                  <span>{selectedTile.details.trapEffect}</span>
                </div>
              )}

              {selectedTile.details.dialogue && (
                <div className="tile-detail__section">
                  <div className="tile-detail__section-header">
                    <p className="tile-detail__section-title">Dialogue</p>
                    <span className="tile-detail__section-pill">Read to player</span>
                  </div>
                  <div className="tile-detail__dialogue-copy">
                    {renderDialogueLines(selectedTile.details.dialogue)}
                  </div>
                </div>
              )}

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

                      {/* Resistances and Vulnerabilities */}
                      <div className="encounter-traits">
                        {selectedTile.details.encounter.resistances && selectedTile.details.encounter.resistances.length > 0 && (
                          <div className="encounter-traits__group">
                            <span className="encounter-traits__label">Resistances</span>
                            <div className="encounter-traits__pills">
                              {selectedTile.details.encounter.resistances.map((res) => (
                                <span key={res} className="encounter-trait-pill encounter-trait-pill--resistance" title={`Resistance: ${res} - Takes half damage`}>
                                  {res}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {selectedTile.details.encounter.vulnerabilities && selectedTile.details.encounter.vulnerabilities.length > 0 && (
                          <div className="encounter-traits__group">
                            <span className="encounter-traits__label">Vulnerabilities</span>
                            <div className="encounter-traits__pills">
                              {selectedTile.details.encounter.vulnerabilities.map((vuln) => (
                                <span key={vuln} className="encounter-trait-pill encounter-trait-pill--vulnerability" title={`Vulnerability: ${vuln} - Takes double damage`}>
                                  {vuln}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="mock-encounter-bars">
                        {/* HP Bar */}
                        <div className="mock-bar-header">
                          <span className="mock-hp-label">Health Points</span>
                          <span className="mock-hp-val">
                            {encounterState ? Math.round((encounterState.currentHp / encounterState.maxHp) * 100) : 100}% — {encounterState ? `${encounterState.currentHp}/${encounterState.maxHp}` : `${selectedTile.details.encounter.hp}/${selectedTile.details.encounter.hp}`}
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
                            {encounterState ? `${encounterState.currentEnergy}/${encounterState.maxEnergy}` : `${selectedTile.details.encounter.energy}/${selectedTile.details.encounter.energy}`}
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

                      {/* Encounter Controls Section */}
                      <div className="encounter-controls">
                        <p className="encounter-controls__title">ENCOUNTER CONTROLS</p>
                        <div className="encounter-controls__grid">
                          <label className="encounter-control">
                            <span>Heal</span>
                            <input
                              type="text"
                              inputMode="numeric"
                              pattern="[0-9]*"
                              placeholder="0"
                              value={healAmount}
                              onChange={(e) => setHealAmount(e.target.value.replace(/[^0-9]/g, ''))}
                            />
                            <button type="button" className="encounter-action-btn encounter-action-btn--heal" onClick={applyHeal}>
                              APPLY
                            </button>
                          </label>

                          <label className="encounter-control">
                            <span>Damage</span>
                            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                              <input
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                placeholder="0"
                                value={damageAmount}
                                onChange={(e) => setDamageAmount(e.target.value.replace(/[^0-9]/g, ''))}
                              />
                              <select 
                                value={damageType} 
                                onChange={(e) => setDamageType(e.target.value)}
                                className="encounter-type-select"
                              >
                                {damageTypes.map((type) => (
                                  <option key={type} value={type}>
                                    {type.charAt(0).toUpperCase() + type.slice(1)}
                                  </option>
                                ))}
                              </select>
                              <button type="button" className="encounter-action-btn encounter-action-btn--damage" onClick={applyDamage}>
                                APPLY
                              </button>
                            </div>
                          </label>

                          <label className="encounter-control">
                            <span>Energy</span>
                            <input
                              type="text"
                              inputMode="numeric"
                              pattern="[0-9]*"
                              placeholder="0"
                              value={energyAmount}
                              onChange={(e) => setEnergyAmount(e.target.value.replace(/[^0-9]/g, ''))}
                            />
                            <div style={{ display: 'flex', gap: 8 }}>
                              <button type="button" className="encounter-action-btn encounter-action-btn--consume" onClick={consumeEnergy}>
                                CONSUME
                              </button>
                              <button type="button" className="encounter-action-btn encounter-action-btn--restore" onClick={restoreEnergy}>
                                RESTORE
                              </button>
                            </div>
                          </label>

                          <label className="encounter-control">
                            <span>AC</span>
                            <input
                              type="text"
                              inputMode="numeric"
                              pattern="[0-9]*"
                              placeholder="0"
                              value={acAmount}
                              onChange={(e) => setAcAmount(e.target.value.replace(/[^0-9]/g, ''))}
                            />
                            <div style={{ display: 'flex', gap: 8 }}>
                              <button type="button" className="encounter-action-btn encounter-action-btn--ac" onClick={removeAc}>
                                REMOVE
                              </button>
                              <button type="button" className="encounter-action-btn encounter-action-btn--ac" onClick={addAc}>
                                ADD
                              </button>
                              
                            </div>
                          </label>
                        </div>
                      </div>

                    </div>

                    {/* Right Column: Portrait and AC Hex */}
                    <div className="mock-encounter-right">
                      <div className="mock-hex-badge">
                        <span className="mock-hex-val">{encounterState ? encounterState.ac : selectedTile.details.encounter.ac}</span>
                        <span className="mock-hex-lbl">AC</span>
                      </div>
                      <img
                        src={encounterImageMap[selectedTile.details.encounter.image] || zombie}
                        alt={selectedTile.details.encounter.name}
                        className="mock-portrait-img"
                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/assets/desrt-zomby.svg'; }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Action Cards Section */}
              {selectedTile.details.encounter && selectedTile.details.encounter.actionCards && selectedTile.details.encounter.actionCards.length > 0 && (
                <div className="tile-detail__section tile-detail__action-cards-section">
                  <p className="tile-detail__section-title">Actions</p>
                  <div className="action-cards-grid">
                    {selectedTile.details.encounter.actionCards.map((card, idx) => {
                      const cardImage = getCardImage(card.name);
                      return cardImage ? (
                        <div
                          key={idx}
                          className="action-card-wrapper"
                          onMouseMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            const rotateY = (x - rect.width / 2) / rect.width * 8;
                            const rotateX = (rect.height / 2 - y) / rect.height * 8;
                            e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
                          }}
                        >
                          <img 
                            src={cardImage} 
                            alt={card.name}
                            className="action-card-img"
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                          />
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              )}

              {selectedTile.details.dialogue && (
                <div className="tile-detail__section">
                  <div className="tile-detail__section-header">
                    <p className="tile-detail__section-title">Dialogue</p>
                    <span className="tile-detail__section-pill">Read to player</span>
                  </div>
                  <div className="tile-detail__dialogue-copy">
                    {renderDialogueLines(selectedTile.details.dialogue)}
                  </div>
                </div>
              )}

              {(selectedTile.details.merchantRules && selectedTile.details.merchantRules.length > 0) || (selectedTile.details.merchantExchangeRates && selectedTile.details.merchantExchangeRates.length > 0) ? (
                <div className="tile-detail__section">
                  <div className="tile-detail__section-header">
                    <p className="tile-detail__section-title">Merchant Trading Rules</p>
                    <span className="tile-detail__section-pill tile-detail__section-pill--npc">Merchant Info</span>
                  </div>
                  <div className="tile-detail__merchant-rules">
                    {selectedTile.details.merchantRules && selectedTile.details.merchantRules.length > 0 && (
                      <ol className="tile-detail__rules-list">
                        {selectedTile.details.merchantRules.map((rule, idx) => (
                          <li key={`rule-${idx}`}>{rule}</li>
                        ))}
                      </ol>
                    )}
                    {selectedTile.details.merchantExchangeRates && selectedTile.details.merchantExchangeRates.length > 0 && (
                      <>
                        <p className="tile-detail__merchant-rules-title">Exchange Rates</p>
                        <ol className="tile-detail__rules-list">
                          {selectedTile.details.merchantExchangeRates.map((rate, idx) => (
                            <li key={`rate-${idx}`}>{rate}</li>
                          ))}
                        </ol>
                      </>
                    )}
                  </div>
                </div>
              ) : null}

              {selectedTile.details.reward && selectedTile.details.reward.trim() && (
                <div className="tile-detail__section tile-detail__section--reward">
                  <p className="tile-detail__section-title">Reward</p>
                  <div className="tile-detail__reward-panel">
                    <span className="tile-detail__reward-icon">◈</span>
                    <span>{selectedTile.details.reward}</span>
                  </div>
                </div>
              )}
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