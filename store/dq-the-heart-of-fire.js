export const state = () => ({
  hero: {
    id: '1',
    gamebook: 'dq-the-heart-of-fire',
    name: 'Stolen',
    path: 'Rogue',
    career: 'Shadowstalker',
    speed: 0,
    brawn: 0,
    magic: 0,
    armor: 0,
    health: 30,
    healthMax: 30,
    eqipmentSlots: [
      'cloak',
      'head',
      'gloves',
      'main hand',
      'chest',
      'left hand',
      'talisman',
      'feet',
      'necklace',
      'ring 1',
      'ring 2',
    ],
    backpackItems: [], // strings
    moneyPouch: '',
    notes: '',
  },
  eqipmentItem: {
    slot: '',
    name: '',
    attributeBonuses: [],
    abilities: [], // strings
  },
  ability: {
    type: '',
    name: '',
  },
  attributeBonus: {
    name: '',
    modifier: 0,
  },
  equipmentItems: [
    {
      slot: 'cloak',
      name: 'Shadow mantle',
      attributeBonuses: [
        {
          name: 'speed',
          modifier: 2,
        },
        {
          name: 'brawn',
          modifier: 3,
        },
      ],
      abilities: ['Vanish'],
    },
    {
      slot: 'head',
      name: 'Cowl of the Sabbat',
      attributeBonuses: [
        {
          name: 'kelly',
          modifier: 2,
        },
        {
          name: 'brawn',
          modifier: 3,
        },
      ],
      abilities: ['Vanish'],
    },
  ],
})

export const mutations = {}

export const getters = {
  hero: state => state.hero,
  equipmentItems: state => state.equipmentItems,
  abilitiesSpeed: state =>
    state.equipmentItems.reduce((items, item) => {
      return items.concat(
        item.abilities.filter(ability => ability.type === 'speed'),
      )
    }),
  abilitiesCombat: state => state,
  abilitiesPassive: state => state,
  abilitiesModifier: state => state,
}
