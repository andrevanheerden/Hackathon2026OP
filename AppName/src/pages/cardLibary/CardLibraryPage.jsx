import { useMemo, useState } from 'react';
import Sidebar from '../dashboard/components/Sidebar/Sidebar';
import '../dashboard/dashboard.css';
import './CardLibraryPage.css';
import { cardLibraryData, damageTypeFilters } from './cardLibraryData';

function CardLibraryPage({ onNavigate = () => {} }) {
  const [search, setSearch] = useState('');
  const [selectedDamageType, setSelectedDamageType] = useState('All');

  const filteredCards = useMemo(() => {
    const query = search.trim().toLowerCase();

    return cardLibraryData.filter((card) => {
      const matchesSearch =
        !query ||
        card.name.toLowerCase().includes(query) ||
        card.fileName.toLowerCase().includes(query);

      const matchesDamageType = selectedDamageType === 'All' || card.damageType === selectedDamageType;

      return matchesSearch && matchesDamageType;
    });
  }, [search, selectedDamageType]);

  return (
    <div className="dashboard-shell rules-shell">
      <Sidebar onNavigate={onNavigate} activeView="card-library" />
      <div className="dashboard-main rules-main">
        <div className="dashboard-content">
          <div className="dashboard-content__left">
            <div className="dashboard-panel rules-panel">
              <div className="card-library-page">
                <div className="card-library-header">
                  <h1 className="card-library-title">Card Library</h1>
                  <div className="card-library-controls">
                    <input
                      className="card-library-search"
                      type="search"
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Search cards by name"
                    />
                    <div className="card-library-filter-group">
                      <div className="card-library-pill-row">
                        {damageTypeFilters.map((filter) => (
                          <button
                            key={filter}
                            type="button"
                            className={`card-library-pill ${selectedDamageType === filter ? 'is-active' : ''}`}
                            onClick={() => setSelectedDamageType(filter)}
                          >
                            {filter}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {filteredCards.length === 0 ? (
                  <div className="card-library-empty">No cards match the current filters.</div>
                ) : (
                  <div className="card-library-grid">
                    {filteredCards.map((card) => (
                      <div
                        className="card-library-card"
                        key={card.id}
                        onMouseMove={(event) => {
                          const rect = event.currentTarget.getBoundingClientRect();
                          const x = event.clientX - rect.left;
                          const y = event.clientY - rect.top;
                          const rotateY = (x - rect.width / 2) / rect.width * 8;
                          const rotateX = (rect.height / 2 - y) / rect.height * 8;
                          event.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                        }}
                        onMouseLeave={(event) => {
                          event.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
                        }}
                      >
                        <img className="card-library-image" src={card.image} alt={card.name} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardLibraryPage;
