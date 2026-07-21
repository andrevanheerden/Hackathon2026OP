import Sidebar from './components/Sidebar/Sidebar';
import './Rules.css';

const rulesData = [
  {
    title: 'THE WASTES',
    content:
      'The game takes place in a dangerous wasteland filled with hazards and rival factions. The Cosmic Storms evolve over time, enemy behavior changes, and survival becomes more difficult as the journey progresses. Only the cunning and the strong endure the wastes.',
  },
  {
    title: 'TILE TRAVERSAL',
    content:
      'Movement between tiles is guided by the Game Master. The GM reveals the lore and events encountered on each tile. Players make critical decisions and face encounters while progressing through the wasteland. Every choice shapes the journey ahead.',
  },
  {
    title: 'COMBAT',
    content:
      'Turn-based combat is resolved using initiative, attack rolls, and speed. Players and enemies alternate actions in combat. Combat utilizes Energy and other resources. Strategic use of abilities and positioning determines victory.',
  },
  {
    title: 'CARD RARITY',
    content:
      'Cards are categorized by rarity: Common, Uncommon, Rare, and Legendary. Stronger cards are harder to find and can be earned through exploration, completing objectives, or progression milestones. Rarity determines power and scarcity within the wastes.',
  },
  {
    title: 'HEALTH & DEFEAT',
    content:
      'Players begin with a set amount of Health Points (HP). When HP reaches zero, the character becomes incapacitated. Permanent defeat may occur under certain circumstances. Revival and recovery mechanics exist, but survival is never guaranteed.',
  },
  {
    title: 'THE MAW &ndash; TILE XX',
    content:
      'The Maw is the endgame area &mdash; a legendary final challenge. The Cosmic Storm converges here. Enemy evolution reaches its peak. Tile XX holds the deadliest encounters and the ultimate test. Only the most prepared may face what lies within.',
  },
];

const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI'];

function Rules() {
  return (
    <div className="rules-page">
      <Sidebar />
      <div className="rules-content">
        <div className="rules-header">
          <div className="rules-decorative-line"></div>
          <h1 className="rules-title">RULES OF THE WASTES</h1>
        </div>
        <div className="rules-cards">
          {rulesData.map((rule, index) => (
            <div className="rule-card" key={index}>
              <div className="rule-card-header">
                <span className="rule-bullet">{romanNumerals[index]}</span>
                <h2 className="rule-heading">{rule.title}</h2>
              </div>
              <p className="rule-text">{rule.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rules;
