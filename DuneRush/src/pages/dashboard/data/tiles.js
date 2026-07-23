export const tiles = [
  {
    id: 0,
    number: 0,
    type: 'Story',
    title: 'Canyon Awakening',
    category: 'Start',
    area: 'Abandoned Village',
    highlighted: false,
    details: {
      npcName: 'Host Vox',
      npcLabel: 'NPC',
      environment:
        'You wake up face-down in hot, yellow desert sand. Surrounding you are towering, cracked sandstone canyon walls that block out the horizon. The heat is oppressive, and the air smells faintly of dust.',
      eventStory:
        'As your vision clears and you brush the sand off your clothes, a stylish figure in a tailored suit with a glowing television for a head steps out from the shadows. He applauds with slow, quiet claps as his screen flickers from rainbow bars to a wide digital smile.',
      voiceStyle:
        'Smooth, theatrical, and charismatic—like a classic game show host',
      npcAppearance:
        'A stylish humanoid figure with a bulky retro television for a head. Its screen glows with bright rainbow color bars forming a digital smile, creating a stark contrast against its tailored white suit jacket, dark button-up shirt, and sleek dark pants.',
      npcImage: 'TVhead.png',
      dialogue:
        '"Welcome, welcome! Ah, don\'t look so disoriented—it spoils the lighting! You and your companions have been granted a supreme honor: you have been selected to entertain the Higher Beings! You are now contestant-citizens of my grand creation: Dune Rush. The rules are wonderfully simple: journey across the desert, survive my challenges, and defeat [FINAL BOSS] at the end of the road. Do not worry, I am a fair host! I won\'t send you into the meat grinder empty-handed. Take these powers, grow stronger, and give us a great show. Oh, and one tiny detail... if you die in this game, you die for real. Good luck, contestants!"',
      reward:
        'Starting Deck Allocation: Every player immediately draws and adds 3 Action Cards and 2 Trait Cards to their starting hand.',
    },
  },
  {
    id: 1,
    number: 1,
    type: 'Encounter',
    title: 'Dune Snarlers',
    category: 'Encounter',
    area: 'Abandoned Village',
    highlighted: false,
    details: {
      npcName: 'Gnasher the Alpha',
      npcLabel: 'Enemy',
      environment:
        'A wind-swept clearing surrounded by sharp obsidian rock pillars jutting out of the shifting dunes.',
      eventStory:
        'Low growls echo from behind the rocks. Suddenly, a pack of scaly desert hounds bounds out! Leading the pack is Gnasher, a six-eyed beast who steps forward snapping its jaws aggressively at your group.',
      encounter: {
        name: 'Gnasher (Sand Hound Alpha)',
        appearance:
          'This six-eyed, canine-like creature features mottled sandy-gray fur paired with a heavily scaled, reptilian back and a thick, armored tail. It sports pointed ears, sharp little fangs, a wide playful grin with a panting tongue, and scaly, clawed feet.',
        image: 'sandDog.png',
        hp: 15,
        ac: 5,
        energy: 4,
        resistances: ['Blunt'],
        vulnerabilities: ['Acid'],
        actionCards: [
          { name: 'Quick Slash', rarity: 'Common', image: 'QuickSlash-Common-Slash.png' },
          { name: 'Pummel', rarity: 'Common', image: 'Pummel-Common-Blunt.png' },
          { name: 'Heavy Slam', rarity: 'Rare', image: 'HeavySlam-Rare-Blunt.png' },
        ],
      },
      reward: 'Victory Drop: On victory each player draws 1 Trait Card.',
    },
  },
  {
    id: 2,
    number: 2,
    type: 'Encounter',
    title: 'Sands of the Risen',
    category: 'Encounter',
    area: 'Abandoned Village',
    highlighted: false,
    details: {
      npcName: 'Marrow the Decayed',
      npcLabel: 'Enemy',
      environment:
        'A narrow gorge littered with sun-bleached animal bones and rusted iron swords half-buried in sand drifts.',
      eventStory:
        'As you take a step forward into the gorge, the ground vibrates violently beneath your feet. A withered, bandage-wrapped hand erupts from the earth as Marrow, a decayed undead warrior, pulls himself into the daylight to attack!',
      dialogue:
        '"Fresh... flesh... for the dunes..."',
      encounter: {
        name: 'Marrow (Desert Husk)',
        appearance:
          'This green-skinned zombie wears tattered, hooded robes with cloth wrappings bound around its head and limbs. It features glowing white eyes, sharp teeth, and a large wooden beam strapped to its back alongside a scorpion-marked shoulder piece.',
        image: 'zombie.png',
        hp: 18,
        ac: 4,
        energy: 3,
        resistances: ['Slash'],
        vulnerabilities: ['Fire'],
        actionCards: [
          { name: 'Slash Sparks', rarity: 'Common', image: 'SlashSparks-Common-Slash.png' },
          { name: 'Guard', rarity: 'Common', image: 'Guard-Common-Support.png' },
          { name: 'Heavy Slam', rarity: 'Rare', image: 'HeavySlam-Rare-Blunt.png' },
        ],
      },
      reward: 'Victory Drop: On victory each player draws 1 Trait Card.',
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
        'You inspect the abandoned wreckage. Cloth sacks and shattered glass jars lie strewn about, but beneath a fallen wooden axle, you discover a reinforced iron lockbox intact and waiting to be opened.',
      reward: 'Chest Loot: Each player draws 1 Action Card.',
    },
  },
  {
    id: 4,
    number: 4,
    type: 'Trap',
    title: 'The Tectonic Shift',
    category: 'Trap',
    area: 'Abandoned Village',
    highlighted: true,
    details: {
      environment:
        'A cracked limestone fissure runs down the center of the path, emitting a low, ominous hum.',
      eventStory:
        'As you step over the fissure, a subterranean earthquake strikes! The ground beneath your feet groans as violent tremors tear through the earth, physically shifting and re-aligning the terrain beneath the entire village!',
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
      npcName: 'Fang the Veteran Alpha',
      npcLabel: 'Enemy',
      environment:
        'A wind-swept clearing surrounded by sharp obsidian rock pillars jutting out of the dunes.',
      eventStory:
        'The desert silence is shattered once more by growls echoing behind the rocks. Emerging from the obsidian pillars is Fang, a battle-hardened Alpha Sand Hound covered in heavy reptilian scales, barking furiously as it charges!',
      encounter: {
        name: 'Fang (Sand Hound Alpha)',
        appearance:
          'This six-eyed, canine-like creature features mottled sandy-gray fur paired with a heavily scaled, reptilian back and a thick, armored tail. It sports pointed ears, sharp little fangs, a wide playful grin with a panting tongue, and scaly, clawed feet.',
        image: 'sandDog.png',
        hp: 22,
        ac: 6,
        energy: 4,
        resistances: ['Blunt'],
        vulnerabilities: ['Acid'],
        actionCards: [
          { name: 'Quick Slash', rarity: 'Common', image: 'QuickSlash-Common-Slash.png' },
          { name: 'Snare', rarity: 'Common', image: 'Snare-Common-Support.png' },
          { name: 'Heavy Slam', rarity: 'Rare', image: 'HeavySlam-Rare-Blunt.png' },
        ],
      },
      reward: 'Victory Drop: On victory each player draws 1 Trait Card.',
    },
  },
  {
    id: 6,
    number: 6,
    type: 'Merchant',
    title: "Nomad's Exchange",
    category: 'Merchant',
    area: 'Abandoned Village',
    highlighted: false,
    details: {
      npcName: 'Sskesh the Nomad',
      npcLabel: 'NPC',
      environment:
        'A striped silk tent anchored by heavy brass stakes. Inside, aromatic incense burns in a copper brazier, shielding visitors from the desert heat.',
      eventStory:
        'You step into the cool, shaded tent. Sitting cross-legged on a carpet is Sskesh, a mysterious green-skinned traveler shrouded in cloth wrappings, who hovers a glowing golden automaton between his hands as he greets you.',
      voiceStyle:
        'Raspy, whispery, and clicking softly between sentences.',
      npcAppearance:
        'A mysterious green-skinned traveler completely shrouded in cloth wrappings and dark goggles beneath a hooded cloak. Cross-legged on the ground, it conjures a floating, golden-lit miniature automaton between its bare hands while sitting beside a well-worn leather trail pack bursting with maps and trinkets.',
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
      npcName: 'Vane the Canyon Marauder',
      npcLabel: 'Enemy',
      environment:
        'A steep canyon bottleneck surrounded by high, sheer stone ledges.',
      eventStory:
        'As you enter the narrow bottleneck, a shadow leaps down from the cliff overhead! Vane, a masked desert bandit, lands in front of you with a pair of serrated daggers drawn and magic flaming in his palm.',
      dialogue:
        '"Your journey ends here, wanderers! Leave your cards and gold in the sand, or burn where you stand!"',
      encounter: {
        name: 'Vane (Canyon Marauder)',
        appearance:
          'This shadowy, dark-skinned figure features spiky black hair, pointed ears, glowing yellow eyes, and a face mask covering its lower features. It wears a tattered olive cloak over worn robes with cloth wrappings bound around its forearms, legs, and feet. In one hand it holds a heavy, notched blade, while conjuring a blazing fireball in the other.',
        image: 'bandit.png',
        hp: 22,
        ac: 5,
        energy: 4,
        resistances: ['Water'],
        vulnerabilities: ['Slash'],
        actionCards: [
          { name: 'Firebolt', rarity: 'Common', image: 'Firebolt-Common-Fire.png' },
          { name: 'Quick Slash', rarity: 'Common', image: 'QuickSlash-Common-Slash.png' },
          { name: 'Fireball', rarity: 'Rare', image: 'Fireball-Rare-Fire.png' },
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
        'Seeking shelter inside the mud-brick ruins, you brush aside fallen roof timbers and shattered clay pots, uncovering a hidden storage compartment carved directly into the floor.',
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
      npcName: 'Zaros the Gambler',
      npcLabel: 'NPC',
      environment:
        'A small shade canopy covering a low wooden table with carved stone dice cups, sitting directly along the trail.',
      eventStory:
        'The aroma of spiced nuts and burning paper hangs in the air as Zaros, a floating magician in a sharp top hat, flicks a pair of ivory dice across the table while levitating playing cards with a sly grin.',
      voiceStyle:
        'Smooth, confident, with a casual chuckle between rolls.',
      npcAppearance:
        'A stylish magician hovering mid-air with a sharp smile and golden, glowing eyes. Dressed in a fancy top hat, high-collared vest, and a ragged trench coat featuring a white rose boutonnière, he manipulates a storm of levitating playing cards with a flick of his gloved fingers.',
      npcImage: 'gambler.png',
      dialogue:
        '"Care to test your fate, friend? Put a card on the table, and I\'ll match it. Highest D10 roll takes both. Simple, clean, honest... mostly."',
      merchantRules: [
        'A player wagers 1 Action or Trait Card from their hand.',
        'The GM draws 1 matching type card (Action or Trait) from the deck to match the bet.',
        'Both player and GM roll a D10: Player Roll higher than GM Roll: Player wins and takes both cards! Player Roll lower than GM Roll: Player loses their wagered card to the GM.',
        'This can be repeated as long as the player has cards to bet.',
      ],
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
        'A striped silk tent anchored by heavy brass stakes, looking identical to a peaceful trader\'s rest stop.',
      eventStory:
        'Believing you have found a safe shop, you step inside the tent. Suddenly, the floor shudders, the tent canvas snaps tight, and hidden spring-loaded trapdoors trigger a dangerous pitfall!',
      trapEffect:
        'Hidden Pitfall: The player is forced to discard 1 card from hand.',
    },
  },
  {
    id: 11,
    number: 11,
    type: 'Encounter',
    title: 'Sands of the Risen',
    category: 'Encounter',
    area: 'Abandoned Village',
    highlighted: false,
    details: {
      npcName: 'Skarr the Armored Husk',
      npcLabel: 'Enemy',
      environment:
        'A narrow gorge littered with sun-bleached animal bones and rusted iron swords half-buried in sand drifts.',
      eventStory:
        'The sand floor churns violently beneath you as Skarr, a heavily armored undead husk wielding a thick wooden beam and sporting a scorpion crest, bursts from the ground to crush you!',
      dialogue:
        '"Rise... protect... destroy..."',
      encounter: {
        name: 'Skarr (Armored Desert Husk)',
        appearance:
          'This green-skinned zombie wears tattered, hooded robes with cloth wrappings bound around its head and limbs. It features glowing white eyes, sharp teeth, and a large wooden beam strapped to its back alongside a scorpion-marked shoulder piece.',
        image: 'zombieArmor.png',
        hp: 20,
        ac: 6,
        energy: 3,
        resistances: ['Slash'],
        vulnerabilities: ['Fire'],
        actionCards: [
          { name: 'Pummel', rarity: 'Common', image: 'Pummel-Common-Blunt.png' },
          { name: 'Guard', rarity: 'Common', image: 'Guard-Common-Support.png' },
          { name: 'Heavy Slam', rarity: 'Rare', image: 'HeavySlam-Rare-Blunt.png' },
          { name: 'Barricade', rarity: 'Rare', image: 'Barricade-Rare-Shields.png' },
        ],
      },
      reward: 'Victory Drop: On victory each player draws 1 Trait Card.',
    },
  },
  {
    id: 12,
    number: 12,
    type: 'Trap',
    title: 'Fruit of Deception',
    category: 'Trap',
    area: 'Abandoned Village',
    highlighted: true,
    details: {
      environment:
        'A single, shockingly vibrant green tree stands amidst barren dunes, its branches heavy with glowing, sweet-smelling purple fruit.',
      eventStory:
        'Parched from the desert heat, your group stumbles upon the solitary fruit tree. Its hypnotic aroma tempts you to take a bite, but a strange dark sap drips from its bark...',
      trapEffect:
        'Forbidden Feast: Each player chooses whether to eat the fruit. Any player who eats it falls into a daze and must permanently lose 1 Action Card of their choice!',
    },
  },
  {
    id: 13,
    number: 13,
    type: 'Discovery',
    title: 'Sunken Vault',
    category: 'Discovery',
    area: 'Abandoned Village',
    highlighted: false,
    details: {
      environment:
        'Half-buried beneath a collapsed sandstone archway sits a heavy iron-bound trunk adorned with brass sun runes.',
      eventStory:
        'Approaching the ancient archway, you clear away centuries of accumulated sand and pry open the stubborn brass latch, unlocking a glowing stash of martial gear and ancient secrets.',
      reward:
        'Chest Loot: Each player draws 1 Action Card AND 1 Trait Card.',
    },
  },
  {
    id: 14,
    number: 14,
    type: 'Encounter',
    title: "Knight's Challenge",
    category: 'Encounter',
    area: 'Abandoned Village',
    highlighted: true,
    details: {
      npcName: 'Sir Vaelin the Scorpion Knight',
      npcLabel: 'NPC',
      environment:
        'A wide, circular stone arena surrounded by ruined pillars and sun-scorched banners.',
      eventStory:
        'An imposing knight clad in gleaming steel plate blocks the archway. He plants his double-edged blade into the stone floor, his visor locking onto your group as he challenges you to single combat!',
      voiceStyle:
        'Deep, booming, and resonant—echoing from beneath a heavy steel helmet with stern, honorable discipline.',
      npcAppearance:
        'A fully armored paladin clad in gleaming plate mail with a scorpion insignia crest on his left pauldron. He wears a heavy red cape and holds a steel broadsword at the ready.',
      npcImage: 'DualKight.png',
      dialogue:
        '"Halt, wanderers! None shall pass through this sacred arena without proving their martial honor. Only a true warrior may earn passage beyond this point. Step forward, champion! Face me in single combat—let your steel speak for your soul!"',
      encounter: {
        name: 'Sir Vaelin (Scorpion Knight)',
        appearance:
          'Fully armored paladin in polished steel plate with a scorpion crest on his shoulder, wielding a broadsword and long cape.',
        image: 'DualKight.png',
        hp: 35,
        ac: 7,
        energy: 4,
        resistances: ['Slash', 'Blunt'],
        vulnerabilities: ['Acid', 'Force'],
        actionCards: [
          { name: 'Guard', rarity: 'Common', image: 'Guard-Common-Support.png' },
          { name: 'Blade Dance', rarity: 'Rare', image: 'BladeDance-Rare-Slash.png' },
          { name: 'Slash Sparks', rarity: 'Common', image: 'SlashSparks-Common-Slash.png' },
          { name: 'Immolate', rarity: 'Rare', image: 'Immolate-Rare-Slash.png' },
          { name: 'Barricade', rarity: 'Rare', image: 'Barricade-Rare-Shields.png' },
        ],
      },
      rules:
        'Honor Duel: One player must step forward to fight Sir Vaelin 1-on-1.',
      reward:
        'Victory Drop: If the player wins the duel, the party receives 3 Card Draws to share! Defeat Penalty: If the player loses, they are spared by the knight and left at 1 HP.',
    },
  },
  {
    id: 15,
    number: 15,
    type: 'Encounter',
    title: 'Armored Husk',
    category: 'Encounter',
    area: 'Abandoned Village',
    highlighted: false,
    details: {
      npcName: 'Karg the Heavy Husk',
      npcLabel: 'Enemy',
      environment:
        'A narrow gorge littered with sun-bleached animal bones and rusted iron armor pieces.',
      eventStory:
        'The canyon walls echo with grinding stone as Karg, a towering green-skinned undead monstrosity carrying a massive wooden beam, rises from the sand hungry for flesh!',
      dialogue:
        '"Rrraghh! Crush... intruders!"',
      encounter: {
        name: 'Karg (Desert Husk Armored)',
        appearance:
          'A green-skinned zombie wearing tattered hooded robes with heavy scrap armor plates strapped across its torso and a wooden beam on its back.',
        image: 'zombieArmor.png',
        hp: 25,
        ac: 6,
        energy: 3,
        resistances: ['Slash'],
        vulnerabilities: ['Fire'],
        actionCards: [
          { name: 'Pummel', rarity: 'Common', image: 'Pummel-Common-Blunt.png' },
          { name: 'Stone Shell', rarity: 'Common', image: 'StoneShell-Common-Support.png' },
          { name: 'Heavy Slam', rarity: 'Rare', image: 'HeavySlam-Rare-Blunt.png' },
          { name: 'Quicksand Prison', rarity: 'Rare', image: 'QuicksandPrison-Rare-Support.png' },
        ],
      },
      reward: 'Victory Drop: On victory, each player draws 1 Action Card.',
    },
  },
  {
    id: 16,
    number: 16,
    type: 'Trap',
    title: 'Faultline Rupture',
    category: 'Trap',
    area: 'Abandoned Village',
    highlighted: true,
    details: {
      environment:
        'The ground beneath this section of path is deeply fractured, venting warm desert steam into the air.',
      eventStory:
        'As you step across the venting faultline, a violent seismic shockwave tears through the canyon floor! The terrain twists and rotates violently as the earth realigns itself!',
      trapEffect:
        'World Shift: The GM physically rotates the Abandoned Village Node on the game board by 90 degrees, shifting path connections!',
    },
  },
  {
    id: 17,
    number: 17,
    type: 'Encounter',
    title: 'Burrowing Threat',
    category: 'Encounter',
    area: 'Abandoned Village',
    highlighted: false,
    details: {
      npcName: 'Chitina the Sand Crawler',
      npcLabel: 'Enemy',
      environment:
        'A sunken dune basin where the sand flows in circular waves like water.',
      eventStory:
        'The ground sags beneath your feet as sand erupts in a massive geyser! Out bursts Chitina, a barbed, armored sand crawler snapping its ring of razor-sharp teeth at your party!',
      encounter: {
        name: 'Chitina (Small Sand Crawler)',
        appearance:
          'This sandy-tan, heavily armored creature features an arrow-shaped head plate with glowing blue eyes and a jagged, tooth-like jaw. It has an arched back covered in thick, overlapping carapace plates, tufts of soft fur along its neck and underbelly, clawed feet, and a heavy, segmented tail that curls upward.',
        image: 'babySandCrawler.png',
        hp: 28,
        ac: 6,
        energy: 4,
        resistances: ['Blunt', 'Fire'],
        vulnerabilities: ['Water', 'Slash'],
        actionCards: [
          { name: 'Acid Splash', rarity: 'Common', image: 'AcidSplash-Common-Acid.png' },
          { name: 'Snare', rarity: 'Common', image: 'Snare-Common-Support.png' },
          { name: 'Corrosive Spit', rarity: 'Rare', image: 'CorrosiveSpit-Rare-Acid.png' },
        ],
      },
      reward: 'Victory Drop: On victory, each player draws 1 Action Card.',
    },
  },
  {
    id: 18,
    number: 18,
    type: 'Discovery',
    title: 'Forgotten Reliquary',
    category: 'Discovery',
    area: 'Abandoned Village',
    highlighted: false,
    details: {
      environment:
        'A shaded alcove tucked into the canyon cliffside containing an undisturbed stone sarcophagus.',
      eventStory:
        'Stepping into the cool shade of the cliff alcove, your group works together to slide off the heavy stone lid of the sarcophagus, revealing pristine relics preserved from the desert weather.',
      reward:
        'Chest Loot: Each player draws 1 Action Card AND 1 Trait Card.',
    },
  },
  {
    id: 19,
    number: 19,
    type: 'Trap',
    title: 'Canyon Rockfall',
    category: 'Trap',
    area: 'Abandoned Village',
    highlighted: true,
    details: {
      environment:
        'A narrow pass flanked by towering, unstable rock cliffs overhead.',
      eventStory:
        'As you hurry through the narrow pass, a sudden tremor shakes the cliff walls! Loose boulders snap free overhead, sending a deadly rockslide raining down onto the party!',
      trapEffect:
        'Falling Boulders: The GM rolls a D10 three times against each player\'s AC. For every roll that meets or beats a player\'s AC, that player takes 5 Blunt damage!',
    },
  },
  {
    id: 20,
    number: 20,
    type: 'Encounter',
    title: 'Wormling Emergence',
    category: 'Encounter',
    area: 'Abandoned Village',
    highlighted: false,
    details: {
      npcName: 'Graveljaw the Wurmling',
      npcLabel: 'Enemy',
      environment:
        'A ring of disturbed sand dune mounds violently pulsing and churning.',
      eventStory:
        'The ground caves in beneath you as a giant segmented infant worm bursts from beneath the dunes, spraying corrosive acid into the air as it lunges at your party!',
      encounter: {
        name: 'Graveljaw (Baby Sand Worm)',
        appearance:
          'This pale, beige-skinned segmented worm features a large, gaping mouth lined with multiple rows of sharp, inward-facing teeth. From its dark red throat extends a fleshy, reddish worm-like tongue with a hollow tip, supported by a thick, ridged body that coils up from cracked desert soil.',
        image: 'babySandworm.png',
        hp: 26,
        ac: 5,
        energy: 4,
        resistances: ['Force'],
        vulnerabilities: ['Slash', 'Fire'],
        actionCards: [
          { name: 'Force Push', rarity: 'Common', image: 'ForcePush-Common-Force.png' },
          { name: 'Pummel', rarity: 'Common', image: 'Pummel-Common-Blunt.png' },
          { name: 'Acid Drip', rarity: 'Common', image: 'AcidDrip-Common-Acid.png' },
          { name: 'Caustic Cloud', rarity: 'Legendary', image: 'CausticCloud-Legendary-Acid.png' },
        ],
      },
      reward: 'Victory Drop: On victory each player draws 1 Action Card.',
    },
  },
  {
    id: 21,
    number: 21,
    type: 'Discovery',
    title: 'Abandoned Merchant Cart',
    category: 'Discovery',
    area: 'Abandoned Village',
    highlighted: false,
    details: {
      environment:
        'A half-buried merchant wagon lying shattered beside a dried-up well.',
      eventStory:
        'You stumble upon an abandoned trader wagon buried in sand drifts. Upon inspecting the cargo bed, you find intact supply crates filled with tactical maneuvers and spells preserved from the elements.',
      reward: 'Merchant\'s Stash: Each player receives 1 Action Card.',
    },
  },
  {
    id: 22,
    number: 22,
    type: 'Trap',
    title: 'Rockslide Blockade',
    category: 'Trap',
    area: 'Abandoned Village',
    highlighted: true,
    details: {
      environment:
        'A high sandstone canyon pass with loose, jagged boulder overhangs.',
      eventStory:
        'A violent earthquake violently shakes the canyon floor! Massive sandstone monoliths collapse overhead, shattering onto the trail ahead and completely sealing off the passage!',
      trapEffect:
        'Blocked Route: The direct path ahead is destroyed. The party is forced to double back and take an alternate route around!',
    },
  },
  {
    id: 23,
    number: 23,
    type: 'Merchant',
    title: "Nomad's Exchange",
    category: 'Merchant',
    area: 'Abandoned Village',
    highlighted: false,
    details: {
      npcName: 'Sskesh the Nomad',
      npcLabel: 'NPC',
      environment:
        'A striped silk tent anchored by heavy brass stakes. Inside, aromatic incense burns in a copper brazier, shielding visitors from the desert heat.',
      eventStory:
        'You step into the cool, shaded tent. Sitting cross-legged on a carpet is Sskesh, a mysterious green-skinned traveler shrouded in cloth wrappings, who hovers a glowing golden automaton between his hands as he greets you.',
      voiceStyle:
        'Raspy, whispery, and clicking softly between sentences.',
      npcAppearance:
        'A mysterious green-skinned traveler completely shrouded in cloth wrappings and dark goggles beneath a hooded cloak. Cross-legged on the ground, it conjures a floating, golden-lit miniature automaton between its bare hands while sitting beside a well-worn leather trail pack bursting with maps and trinkets.',
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
    },
  },
  {
    id: 24,
    number: 24,
    type: 'Encounter',
    title: 'Guardians of the Sand',
    category: 'Encounter',
    area: 'Abandoned Village',
    highlighted: false,
    details: {
      npcName: 'Sand Golem',
      npcLabel: 'Enemy',
      environment:
        'An ancient ruined plaza featuring swirling sand vortexes.',
      eventStory:
        'As you cross the plaza, the loose dunes swirl into a towering automaton of compressed stone and compressed sand. It raises its massive sandstone fists and stomps down to attack!',
      encounter: {
        name: 'Sand Golem',
        appearance:
          'A massive elemental construct forged from packed desert sand and heavy granite runes, radiating miniature sandstorms around its body.',
        image: 'sandGolem.png',
        hp: 32,
        ac: 6,
        energy: 4,
        resistances: ['Blunt', 'Fire'],
        vulnerabilities: ['Water', 'Acid'],
        actionCards: [
          { name: 'Pummel', rarity: 'Common', image: 'Pummel-Common-Blunt.png' },
          { name: 'Heavy Slam', rarity: 'Rare', image: 'HeavySlam-Rare-Blunt.png' },
          { name: 'Quicksand Prison', rarity: 'Rare', image: 'QuicksandPrison-Rare-Support.png' },
          { name: 'Earthbreaker', rarity: 'Legendary', image: 'Earthbreaker-Legendary-Blunt.png' },
        ],
      },
      reward: 'Victory Drop: On victory each player draws 1 Trait Card.',
    },
  },
  {
    id: 25,
    number: 25,
    type: 'Merchant',
    title: 'The Snake-Eyes Den',
    category: 'Merchant',
    area: 'Abandoned Village',
    highlighted: false,
    details: {
      npcName: 'Zaros the Gambler',
      npcLabel: 'NPC',
      environment:
        'A small shade canopy covering a low wooden table with carved stone dice cups, sitting directly along the trail.',
      eventStory:
        'The aroma of spiced nuts and burning paper hangs in the air as Zaros, a floating magician in a sharp top hat, flicks a pair of ivory dice across the table while levitating playing cards with a sly grin.',
      voiceStyle:
        'Smooth, confident, with a casual chuckle between rolls.',
      npcAppearance:
        'A stylish magician hovering mid-air with a sharp smile and golden, glowing eyes. Dressed in a fancy top hat, high-collared vest, and a ragged trench coat featuring a white rose boutonnière, he manipulates a storm of levitating playing cards with a flick of his gloved fingers.',
      npcImage: 'gambler.png',
      dialogue:
        '"Care to test your fate, friend? Put a card on the table, and I\'ll match it. Highest D10 roll takes both. Simple, clean, honest... mostly."',
      merchantRules: [
        'A player wagers 1 Action or Trait Card from their hand.',
        'The GM draws 1 matching type card (Action or Trait) from the deck to match the bet.',
        'Both player and GM roll a D10: Player Roll higher than GM Roll: Player wins and takes both cards! Player Roll lower than GM Roll: Player loses their wagered card to the GM.',
        'This can be repeated as long as the player has cards to bet.',
      ],
    },
  },
  {
    id: 26,
    number: 26,
    type: 'Encounter',
    title: "Mud Golem's Domain",
    category: 'Encounter',
    area: 'Oasis',
    highlighted: false,
    details: {
      npcName: 'Sludge Titan',
      npcLabel: 'Enemy',
      environment:
        'The entrance to the lush Oasis, where cool spring waters meet thick mud beds.',
      eventStory:
        'Stepping into the lush moisture of the Oasis, a thick mound of wet clay and saturated earth rises up from the marshy pool, shaping into a hulking Mud Golem that blocks your path!',
      encounter: {
        name: 'Mud Golem',
        appearance:
          'A towering, dripping elemental monster made of dense brown mud, tangled roots, and water lilies.',
        image: 'mudGolem.png',
        hp: 30,
        ac: 5,
        energy: 4,
        resistances: ['Water', 'Blunt'],
        vulnerabilities: ['Acid'],
        actionCards: [
          { name: 'Water Splash', rarity: 'Common', image: 'WaterSplash-Common-Water.png' },
          { name: 'Soaking Mist', rarity: 'Common', image: 'SoakingMist-Common-Water.png' },
          { name: 'Aqua Torrent', rarity: 'Rare', image: 'AquaTorrent-Rare-Water.png' },
          { name: 'Heavy Slam', rarity: 'Rare', image: 'HeavySlam-Rare-Blunt.png' },
          { name: 'Siphon Power', rarity: 'Rare', image: 'SiphonPower-Rare-Support.png' },
        ],
      },
      reward: 'Victory Drop: On victory each player draws 1 Action Card.',
    },
  },
  {
    id: 27,
    number: 27,
    type: 'Discovery',
    title: 'Oasis Fruit Tree',
    category: 'Discovery',
    area: 'Oasis',
    highlighted: false,
    details: {
      environment:
        'A beautiful, leafy fruit tree leaning over a crystal-clear natural pond in the heart of the Oasis.',
      eventStory:
        'You discover a lush tree hanging heavy with vibrant, sweet-smelling tropical fruit. Unlike the cursed trees of the village, this tree blooms with pure Oasis water and offers rejuvenating essence.',
      reward:
        'Nourishing Harvest: Each player can choose to eat the fruit. Players who eat it gain 1 Trait Card.',
    },
  },
  {
    id: 28,
    number: 28,
    type: 'Merchant',
    title: "Nomad's Exchange",
    category: 'Merchant',
    area: 'Oasis',
    highlighted: false,
    details: {
      npcName: 'Sskesh the Nomad',
      npcLabel: 'NPC',
      environment:
        'A striped silk tent anchored by heavy brass stakes beneath large palms in the Oasis.',
      eventStory:
        'You step into the cool, shaded tent. Sitting cross-legged on a carpet is Sskesh, a mysterious green-skinned traveler shrouded in cloth wrappings, who hovers a glowing golden automaton between his hands as he greets you.',
      voiceStyle:
        'Raspy, whispery, and clicking softly between sentences.',
      npcAppearance:
        'A mysterious green-skinned traveler completely shrouded in cloth wrappings and dark goggles beneath a hooded cloak. Cross-legged on the ground, it conjures a floating, golden-lit miniature automaton between its bare hands while sitting beside a well-worn leather trail pack bursting with maps and trinkets.',
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
    },
  },
  {
    id: 29,
    number: 29,
    type: 'Trap',
    title: 'The Tectonic Shift',
    category: 'Trap',
    area: 'Oasis',
    highlighted: true,
    details: {
      environment:
        'A cracked limestone fissure running through the wet oasis soil, emitting a low, ominous hum.',
      eventStory:
        'As you step over the fissure, a subterranean earthquake strikes! The ground beneath your feet groans as violent tremors tear through the earth, physically shifting and re-aligning the terrain beneath the entire Oasis!',
      trapEffect:
        'World Shift: The GM physically rotates the Oasis Node on the game board by 90 degrees, shifting path connections!',
    },
  },
];

// Show up to 10 tiles per page (5 columns × 2 rows)
export const tilesPageOne = tiles.slice(0, 10);
export const tilesPageTwo = tiles.slice(10, 20);
export const tilesPageThree = tiles.slice(20, 30);
