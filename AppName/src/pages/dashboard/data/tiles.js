export const tiles = [
  {
    id: 11,
    number: 1,
    type: 'Story',
    title: 'Canyon Awakening',
    category: 'Start',
    area: 'Abandoned Village',
    highlighted: false,
    details: {
      environment:
        'You wake up face-down in hot, yellow desert sand. Surrounding you are towering, cracked sandstone canyon walls that block out the horizon. The heat is oppressive, and the air smells faintly of ozone and ancient dust.',
      npcAppearance:
        'Standing before you is a tall, slender figure wearing a tailored, jet-black business suit, crisp white shirt, and black tie. In place of a head sits a retro CRT television monitor flickering with static, color bars, and a pulsing digital mono-eye.',
      voiceStyle:
        'Smooth, theatrical, and charismatic—like a classic game show host',
      npcImage: 'TVhead.png',
      eventStory:
        'As your vision clears, you brush the sand off your clothes. The TV-headed figure applauds with quiet, slow claps, his monitor flickering to a wide smiling icon before returning to color bars.',
      dialogue:
        '"Welcome, welcome! Ah, don\'t look so disoriented—it spoils the lighting! You and your companions have been granted a supreme honor: you have been selected to entertain the Higher Beings! You are now contestant-citizens of my grand creation: Dune Rush. The rules are wonderfully simple: journey across the desert, survive my challenges, and defeat [FINAL BOSS] at the end of the road. Do not worry, I am a fair host! I won\'t send you into the meat grinder empty-handed. Take these powers, grow stronger, and give us a great show. Oh, and one tiny detail... if you die in this game, you die for real. Good luck, contestants!"',
      reward:
        'Starting Deck Allocation: Every player immediately draws and adds 3 Action Cards and 2 Trait Cards to their starting hand.',
      npcLabel: 'NPC',
    },
  },
  {
    id: 21,
    number: 2,
    type: 'Encounter',
    title: 'Sands of the Risen',
    category: 'Encounter',
    area: 'Abandoned Village',
    highlighted: false,
    details: {
      environment:
        'A narrow gorge littered with sun-bleached animal bones and rusted iron swords half-buried in sand drifts.',
      eventStory:
        'As you take a step forward, the ground vibrates. A withered hand erupts from the sand beneath your feet, followed by a decayed warrior crawling into the daylight.',
      encounter: {
        name: 'Desert Husk (Zombie)',
        appearance:
          'A mummified corpse wrapped in rotting linen, holding a chipped bronze scimitar with eerie green light glowing in its empty eye sockets.',
        image: 'zombie.png',
        hp: 18,
        ac: 4,
        energy: 3,
        resistances: ['Slash'],
        vulnerabilities: ['Fire'],
        actionCards: [
          { name: 'Quick Slash', rarity: 'Common', image: 'QuickSlashCommon.png' },
          { name: 'Pummel', rarity: 'Common', image: 'PummelCommon.png' },
          { name: 'Heavy Slam', rarity: 'Rare', image: 'HeavySlamRare.png' },
        ],
      },
      reward: 'Victory Drop: On victory each player, draw 1 Trait Card.',
    },
  },
  {
    id: 3,
    number: 3,
    type: 'Discovery',
    title: 'Wreckage of the Caravan',
    category: 'Discovery',
    area: 'Abandoned Village',
    highlighted: false,
    details: {
      environment:
        'An overturned, sun-bleached wooden merchant carriage lies collapsed against a boulder, its wheels broken and splintered.',
      eventStory:
        'You inspect the abandoned wreckage. Cloth sacks and shattered glass jars lie strewn about, but beneath a fallen wooden axle, a reinforced iron lockbox remains intact.',
      reward: 'Chest Loot: each player draws 1 Action Card.',
    },
  },
  {
    id: 6,
    number: 6,
    type: 'Trap',
    title: 'The Tremor Plate',
    category: 'Trap',
    area: 'Abandoned Village',
    highlighted: true,
    details: {
      environment:
        'An ancient stone slab embedded in the sand, carved with worn geometric gears.',
      eventStory:
        'As your foot presses down, a loud CLICK echoes under the sand. Massive stone gears grind below ground, causing a localized earthquake! In the distance, the buildings of the Abandoned Village physically shift and rotate on their foundations, altering the landscape layout!',
      trapEffect:
        'World Shift: The GM physically rotates the Abandoned Village Node on the game board by 90 degrees, shifting path connections!',
    },
  },
  {
    id: 5,
    number: 5,
    type: 'Encounter',
    title: 'Dune Snarlers',
    category: 'Encounter',
    area: 'Abandoned Village',
    highlighted: false,
    details: {
      environment:
        'A wind-swept clearing surrounded by sharp obsidian rock pillars jutting out of the dunes.',
      eventStory:
        'Low growls echo from behind the rocks. A pack of hairless, scaly desert hounds bounds out, snapping their jaws at your group.',
      encounter: {
        name: 'Sand Hound Alpha',
        appearance:
          'A lean, scaly canine beast with obsidian-hard hide and glowing yellow eyes.',
        image: 'sandDog.png',
        hp: 22,
        ac: 6,
        energy: 4,
        resistances: ['Blunt'],
        vulnerabilities: ['Acid'],
        actionCards: [
          { name: 'Quick Slash', rarity: 'Common', image: 'QuickSlashCommon.png' },
          { name: 'Pummel', rarity: 'Common', image: 'PummelCommon.png' },
          { name: 'Heavy Slam', rarity: 'Rare', image: 'HeavySlamRare.png' },
        ],
      },
      reward: 'Victory Drop: On victory each player, draw 1 Trait Card.',
    },
  },
  {
    id: 4,
    number: 4,
    type: 'Merchant',
    title: "Nomad's Exchange",
    category: 'Merchant',
    area: 'Abandoned Village',
    highlighted: false,
    details: {
      environment:
        'A striped silk tent anchored by heavy brass stakes. Inside, aromatic incense burns in a copper brazier, shielding visitors from the desert heat.',
      npcAppearance:
        'Sskesh, a hunched merchant wrapped in heavy desert robes with brass goggles covering his eyes and thick leather gloves.',
      voiceStyle:
        'Raspy, whispery, and clicking softly between sentences.',
      npcImage: 'Merchant.png',
      dialogue:
        '"Ahhh... new travelers... fresh cards in your hands. Sskesh deals in power, yes! Give me your duplicate treasures, and I shall give you true strength..."',
      merchantRules: [
        'The GM draws 5 Action/Trait Cards from the deck and lays them face-up.',
        'Players may trade their own cards using these fixed ratios:',
      ],
      merchantExchangeRates: [
        'Legendary = 3 Commons',
        'Legendary = 2 Rares',
        'Rare = 2 Commons',
        'Common = Commons',
      ],
      eventStory:
        'A striped silk tent anchored by heavy brass stakes. Inside, aromatic incense burns in a copper brazier, shielding visitors from the desert heat.',
      npcLabel: 'NPC',
    },
  },
  {
    id: 7,
    number: 7,
    type: 'Encounter',
    title: 'Ambush at the Ridge',
    category: 'Encounter',
    area: 'Abandoned Village',
    highlighted: false,
    details: {
      environment:
        'A steep canyon bottleneck surrounded by high stone ledges.',
      eventStory:
        'A lone desert bandit drops down from the high ledge, drawing a pair of serrated daggers with a cruel grin.',
      encounter: {
        name: 'Canyon Marauder',
        appearance:
          'A wire-thin bandit clad in boiled leather, wearing a cloth mask and dark goggles.',
        image: 'bandit.png',
        hp: 20,
        ac: 5,
        energy: 4,
        resistances: ['Water'],
        vulnerabilities: ['Slash'],
        actionCards: [
          { name: 'Quick Slash', rarity: 'Common', image: 'QuickSlashCommon.png' },
          { name: 'Blade Dance', rarity: 'Rare', image: 'BladeDanceRare.png' },
          { name: 'Firebolt', rarity: 'Common', image: 'FireboltCommon.png' },
        ],
      },
      reward: 'Victory Drop: 1 Action Card.',
    },
  },
  {
    id: 8,
    number: 8,
    type: 'Discovery',
    title: 'Ruined Homestead',
    category: 'Discovery',
    area: 'Abandoned Village',
    highlighted: false,
    details: {
      environment:
        'The roofless shell of an ancient mud-brick home, buried halfway under shifting sand.',
      eventStory:
        'Brushing aside fallen roof timbers and clay pots, you uncover a hidden storage compartment carved directly into the floor.',
      reward:
        'Choice Reward: Each player draws 1 Action Card or 1 Trait Card.',
    },
  },
  {
    id: 9,
    number: 9,
    type: 'Merchant',
    title: 'The Snake-Eyes Den',
    category: 'Merchant',
    area: 'Abandoned Village',
    highlighted: false,
    details: {
      environment:
        'A small shade canopy covering a low wooden table with carved stone dice cups.',
      npcAppearance:
        'Zaros, a suave, slicked-back gambler wearing silver rings and a velvet vest.',
      voiceStyle:
        'Smooth, confident, with a casual chuckle between rolls.',
      npcImage: 'gambler.png',
      eventStory:
        'The aroma of spiced nuts and burning paper hangs in the air as Zaros flicks a pair of ivory dice across the table. His grin widens when the cards begin to pile up in the center; every roll feels like a dare whispered in the desert wind.',
      dialogue:
        '"Care to test your fate, friend? Put a card on the table, and I\'ll match it. Highest D10 roll takes both. Simple, clean, honest... mostly."',
      merchantRules: [
        'A player wagers 1 Action or Trait Card from their hand.',
        'The GM draws 1 matching type card (Action or Trait) from the deck to match the bet.',
        'Both player and GM roll a D10: Player Roll higher GM Roll: Player wins and takes both cards! Player Roll lower than GM Roll: Player loses their wagered card to the GM.',
        'This can be repeated as long as the player has cards to bet.',
      ],
      npcLabel: 'NPC',
    },
  },
  {
    id: 10,
    number: 10,
    type: 'Trap',
    title: "Nomad's Exchange",
    category: 'Trap',
    area: 'Abandoned Village',
    highlighted: true,
    details: {
      environment:
        'A striped silk tent anchored by heavy brass stakes. Inside, aromatic incense burns in a copper brazier, shielding visitors from the desert heat.',
      eventStory:
        'As you step inside the merchant tent, the floor shudders and the tent fabric snaps tight. Hidden needles shoot from the walls as the room collapses into a spring-loaded pit!',
      trapEffect:
        'Hidden Pitfall: The player is forced to discard 1 card from hand and cannot move for 1 turn while they climb out.',
    },
  },
];

// Show up to 10 tiles per page (5 columns × 2 rows)
export const tilesPageOne = tiles.slice(0, 10);
export const tilesPageTwo = tiles.slice(10, 20);
