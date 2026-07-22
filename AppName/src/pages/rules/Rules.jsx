import Sidebar from '../dashboard/components/Sidebar/Sidebar';
import '../dashboard/dashboard.css';
import './Rules.css';

const rulesData = [
  {
    title: '1. Board Movement',
    content:
      'Rolling for Movement: On your turn on the world map, roll a D5 on board.\n\nTile Navigation: Move your player token forward along the connected numbered path tiles up to the exact number rolled.',
  },
  {
    title: '2. Action Cards',
    content:
      'Action Cards represent active maneuvers, elemental spells, and instant abilities used during combat.\n\nAction Cards & Hand Mechanics\nPlaying Action Cards: On your turn during combat, spend your available Action Energy to play Action Cards directly from your hand. You can play multiple cards per turn as long as you have the Energy to pay for them.\n\nCard Cooldown & Reuse (No Discarding!):\nEach card can only be played once per turn. When you play a card, sit down in front of player for the remainder of your turn. At the end of your turn, pick up all played Action Cards and place them back into your hand. You never lose your cards when you play them—they are ready to go again next turn!\n\nHand Cap (Hand Size Limit):\nEvery player has a standard base limit of 5 Action Cards in their hand. Temporary Boosts: Certain Support Cards (such as Blood Pact) can temporarily raise your hand cap for the active turn. Permanent Boosts: Specific Trait Cards (such as Focused Thoughts or Omniscience) permanently expand your hand capacity for the rest of the run.',
  },
  {
    title: '3. How to Build Your Hand',
    content:
      'Your hand is your full combat deck! Because played Action Cards automatically return to your hand at the end of every turn, you always have access to your full arsenal during battle.\n\nAcquiring Cards: Earn new Action Cards from boss rewards, treasure chests, or visiting the Oasis.\n\nHand Limit (Cap): All players start with a base limit of 5 Action Cards.\n\nReplacing Cards: If adding a new card exceeds your hand limit, choose 1 card from your hand to permanently discard, or reject the new card. You can never exceed your hand cap between turns.\n\nCrafting Synergies: Upgrade your hand over the course of the run by swapping weaker Common cards for powerful Rare and Legendary cards or complementary elemental combos.\n\nExpanding Your Cap: Increase your hand limit permanently using specific Trait Cards (e.g., Focused Thoughts), or temporarily during combat using Support Cards (e.g., Blood Pact).',
  },
  {
    title: '4. Trait Cards',
    content:
      'Trait Cards represent your hero\'s permanent passive powers, genetic adaptations, or physical training.\n\nPassive Boosts: Trait Cards do not cost Energy to play. Once acquired, place them face-up on your playmat in an active Trait slot.\n\nAlways Active: Trait effects remain active at all times (e.g., permanent extra Max HP, higher base AC, or bonus card draws).',
  },
  {
    title: '5. Card Rarities & Energy Cost',
    content:
      'Card rarity directly determines how powerful a card is and how much Energy it costs to play:\n\nCommon — 1 Energy: Basic damage, minor heals, standard passive stat boosts.\nRare — 2 Energy: Heavy damage, multi-target heals, strong passive perks.\nLegendary — 3 Energy: Game-changing attacks, massive team heals, game-altering passives.',
  },
  {
    title: '6. Energy System',
    content:
      'Starting Pool: Each player has a default pool of 3 Action Energy per turn.\n\nSpending Energy: Every Action Card costs 1, 2, or 3 Energy. You can play as many cards as you want on your turn as long as you have the Energy to pay for them.\n\nEnergy Refresh: At the start of every new turn, your Action Energy completely refills back to your maximum. Unused Energy does not carry over.',
  },
  {
    title: '7. Armor Class (AC) & Accuracy',
    content:
      'Armor Class (AC) determines how hard a character or monster is to hit with physical or elemental attacks.\n\nBase Player AC: All players start with a base AC of 5 (on a 1 to 10 scale).\n\nHit Roll System: Whenever an attacker uses an offensive Action Card, they must roll a D10 to check accuracy: ROLL higher than TARGET\'S AC: The attack HITS! Deal full damage to the target\'s HP. ROLL lower TARGET\'S AC: The attack MISSES! 0 damage is dealt.',
  },
  {
    title: '8. Damage Types, Resistances & Vulnerabilities',
    content:
      'Every attack deals a specific damage type (Fire, Slash, Blunt, Force, Water, or Acid). Certain characters or monsters have inherent body traits that alter incoming damage: Normal Damage: If target has no resistance or vulnerability, take 100% printed damage. Resistance (half Damage): If a target is Resistant to the incoming damage type, cut the final damage value in half (rounded down). Vulnerability (2× Damage): If a target is Vulnerable to the incoming damage type, double the final damage value! Example: A Fireball dealing 12 Fire damage hits a monster with Fire Vulnerability. The final damage dealt directly to the monster\'s HP is 24 (12 x2).',
  },
  {
    title: '9. Monsters & Encounters',
    content:
      'Monsters are non-player enemies with their own set of baseline stats and decks: Monster Stats: Every monster card features its own Max HP, AC value, and any Resistances or Vulnerabilities. Monster AI Decks: Monsters run on automated card decks containing their own Monster Action Cards (attacks/heals) and passive Monster Trait Cards. Monster Actions: On a monster’s turn, reveal the top card of their AI deck and immediately execute its effect targeting the players.',
  },
  {
    title: '10. Full Combat Round Flow',
    content:
      'When players enter a battle tile, combat unfolds in structured rounds: Step 1: Initiative (Turn Order) — All players and monsters roll a D10. Turn order proceeds sequentially from the highest roll to the lowest roll. (Ties are broken by player choice or reroll). Step 2: Start of Turn — Refill your Action Energy to full. Use your action card for combat (default: 5 cards). Step 3: Player Action Phase — Spend Energy to play Action Cards from your hand. For each attack card played: Roll a D10 against the enemy’s AC. If hit, calculate final damage (apply Resistance/Vulnerability if applicable) and subtract directly from enemy HP. When out of Energy or cards, end your turn. Step 4: Monster Phase — Energy Refill: At the start of the monster’s turn, the GM refills the monster’s Action Energy to its maximum pool. Playing Monster Cards: The GM spends the monster’s Energy to play Action Cards directly from the monster’s hand. Targeting & Accuracy: The GM chooses which player to target with each attack and rolls a D10 against that player’s AC. Card Cooldown & Reuse: Just like players, the GM can only play each monster card once per turn. At the end of the monster’s turn, all played cards return to the monster’s hand, ready to be used again next round! Step 5: End of Round — Once everyone in the initiative order has taken a turn, the round ends. Repeat steps 2–5 until all enemies or all players are defeated. Step 6: End of Combat — Combat ends on the death of the monster or all party members.',
  },
  {
    title: '11. Death in Game',
    content:
      'Falling in Combat: When a player\'s HP reaches 0, they fall unconscious and cannot take actions. Revival: A living teammate can spend all Energy on their turn while adjacent to a downed ally to revive them with 5 HP. Party Wipe: If all players reach 0 HP simultaneously, the party loses the run and must restart at the beginning of the path or last visited Oasis!',
  },
];

function Rules({ onNavigate = () => {} }) {
  return (
    <div className="dashboard-shell rules-shell">
      <Sidebar onNavigate={onNavigate} activeView="rules" />
      <div className="dashboard-main rules-main">
        <div className="dashboard-content">
          <div className="dashboard-content__left">
            <div className="dashboard-panel rules-panel">
              <div className="rules-header">
                <div className="rules-decorative-line"></div>
                <h1 className="rules-title">HOW TO PLAY DUNE RUSH</h1>
              </div>
              <div className="rules-cards">
                {rulesData.map((rule, index) => (
                  <div className="rule-card" key={index}>
                    <div className="rule-card-header">
                      <span className="rule-bullet">{index + 1}</span>
                      <h2 className="rule-heading">{rule.title}</h2>
                    </div>
                    {rule.content.split('\n\n').map((paragraph, pIndex) => (
                      <p className="rule-text" key={pIndex}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rules;
