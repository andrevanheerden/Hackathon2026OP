const cardImages = import.meta.glob('./Cards/*.png', { eager: true, import: 'default' });

const normalizeName = (value) =>
  value
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const knownDamageTypes = new Set(['Fire', 'Water', 'Acid', 'Slash', 'Blunt', 'Force', 'Physical', 'Elemental']);

function inferCardType(name, damageType) {
  const lowered = `${name} ${damageType}`.toLowerCase();

  if (['heal', 'healing', 'wounds', 'oasis', 'spring', 'regrowth', 'rejuvenating', 'secondchance', 'secondwind', 'vibrant', 'holy', 'diving', 'soothing', 'wildwind', 'bloodlust', 'aid'].some((term) => lowered.includes(term))) {
    return 'Healing';
  }

  if (['passive', 'trait', 'fortune', 'constitution', 'stoneplate', 'channelers', 'expanded', 'duelists', 'scavengers', 'unstoppable', 'force', 'elementalmastery', 'carapace', 'retaliation', 'spined', 'aura', 'overclock', 'costreduction', 'deckrecovery', 'energygeneration', 'armorclass', 'status', 'resistance', 'combat', 'treasure'].some((term) => lowered.includes(term))) {
    return 'Traits';
  }

  if (['shield', 'barrier', 'guard', 'sanctuary', 'bastion', 'stone', 'support', 'resist', 'restrain', 'recovery', 'salvage', 'focus', 'energize', 'hypercharge', 'prison', 'snare', 'quicksand'].some((term) => lowered.includes(term))) {
    return 'Support';
  }

  return 'Damage';
}

function inferDamageType(rawType) {
  const normalized = rawType.toLowerCase();

  if (normalized.includes('slash') || normalized.includes('slashing')) return 'Slashing';
  if (normalized.includes('blunt')) return 'Blunt';
  if (normalized.includes('fire')) return 'Fire';
  if (normalized.includes('water')) return 'Water';
  if (normalized.includes('acid')) return 'Acid';
  if (normalized.includes('force')) return 'Force';
  if (normalized.includes('phys')) return 'Physical';
  if (normalized.includes('element')) return 'Elemental';
  if (normalized.includes('heal') || normalized.includes('wound')) return 'Healing';
  if (normalized.includes('support')) return 'Support';
  if (normalized.includes('trait')) return 'Trait';
  return rawType;
}

export const cardLibraryData = Object.entries(cardImages)
  .map(([path, image]) => {
    const fileName = path.split('/').pop().replace(/\.png$/, '');
    const [rawName = '', rawRarity = 'Common', rawType = ''] = fileName.split('-');

    const name = normalizeName(rawName);
    const rarity = rawRarity || 'Common';
    const damageType = inferDamageType(rawType);

    return {
      id: slugify(`${name}-${rarity}-${rawType}`),
      name,
      rarity,
      cardType: inferCardType(name, damageType),
      damageType,
      image,
      fileName,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

export const cardTypeFilters = ['All', 'Damage', 'Support', 'Healing', 'Traits'];

export const damageTypeFilters = ['All', 'Slashing', 'Blunt', 'Fire', 'Water', 'Acid', 'Force', 'Healing', 'Support', 'Trait'];
