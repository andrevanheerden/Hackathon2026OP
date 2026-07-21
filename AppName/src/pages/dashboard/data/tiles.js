export const tiles = [
  {
    id: 11,
    number: 1,
    type: 'Story',
    title: 'Canyon Awakening',
    category: 'Start',
    highlighted: false,
    details: {
      environment:
        'You wake up face-down in hot, yellow desert sand. Surrounding you are towering, cracked sandstone canyon walls that block out the horizon. The heat is oppressive, and the air smells faintly of ozone and ancient dust.',
      npcAppearance:
        'Standing before you is a tall, slender figure wearing a tailored, jet-black business suit, crisp white shirt, and black tie. In place of a head sits a retro CRT television monitor flickering with static, color bars, and a pulsing digital mono-eye.',
      voiceStyle:
        'Smooth, theatrical, and charismatic—like a classic game show host—backed by a gentle background hum of electronic static and pitch modulation.',
      npcImage: '110056784640263567.jpeg',
      eventStory:
        'As your vision clears, you brush the sand off your clothes. The TV-headed figure applauds with quiet, slow claps, his monitor flickering to a wide smiling icon before returning to color bars.',
      dialogue:
        '"Welcome, welcome! Ah, don\'t look so disoriented—it spoils the lighting! You and your companions have been granted a supreme honor: you have been selected to entertain the Higher Beings! You are now contestant-citizens of my grand creation: Dune Rise. The rules are wonderfully simple: journey across the desert, survive my challenges, and defeat [FINAL BOSS] at the end of the road. Do not worry, I am a fair host! I won\'t send you into the meat grinder empty-handed. Take these powers, grow stronger, and give us a great show. Oh, and one tiny detail... if you die in this game, you die for real. Good luck, contestants!"',
      reward:
        'Starting Deck Allocation: Every player immediately draws and adds 3 Action Cards and 2 Trait Cards to their starting hand.',
      npcLabel: 'NPC',
    },
  },
  { id: 12, number: 12, type: 'Discovery', title: 'Compass', category: 'Encounter', highlighted: false },
  { id: 13, number: 13, type: 'Encounter', title: 'Spire', category: 'Encounter', highlighted: true },
  { id: 14, number: 14, type: 'Puzzle', title: 'Canyon', category: 'Encounter', highlighted: false },
  { id: 15, number: 15, type: 'Rest', title: 'Oasis', category: 'Encounter', highlighted: false },
  { id: 16, number: 16, type: 'Discovery', title: 'The Hollow', category: 'Encounter', highlighted: false },
  { id: 17, number: 17, type: 'Encounter', title: 'Ash Gate', category: 'Encounter', highlighted: false },
  { id: 18, number: 18, type: 'Puzzle', title: 'Mirror Maze', category: 'Encounter', highlighted: false },
  { id: 19, number: 19, type: 'Rest', title: 'Sunken Well', category: 'Encounter', highlighted: false },
  { id: 20, number: 20, type: 'Encounter', title: 'The Maw', category: 'Encounter', highlighted: false },
];

// Show up to 10 tiles per page (5 columns × 2 rows)
export const tilesPageOne = tiles.slice(0, 10);
export const tilesPageTwo = tiles.slice(10, 20);
