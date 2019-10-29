export const state = () => ({
  heroes: [
    {
      id: '1',
      type: 'addag-the-sorcerers-crown',
      name: 'Carr Delling',
      class: 'Magic-user',
      intelligence: 14,
      dexterity: 10,
      charisma: 12,
      hitPoints: 6,
      hasScepter: false,
      offensiveSpells: [
        { name: 'Friends', isCast: false },
        { name: 'Hold Person', isCast: false },
        { name: 'Burning Hands', isCast: false },
        { name: 'Fireball', isCast: false },
        { name: 'Sleep', isCast: false },
        { name: 'Lightning Bolt', isCast: true },
        { name: 'Magic Missile', isCast: false },
        { name: 'Suggestion', isCast: false },
        { name: 'Light', isCast: false }
      ],
      defensiveSpells: [
        { name: 'Spider Climb', isCast: false },
        { name: 'Armor', isCast: false },
        { name: 'Feather Fall', isCast: false },
        { name: 'Hold Portal', isCast: false },
        { name: 'Wizard Lock', isCast: true },
        { name: 'Protection From Evil', isCast: false },
        { name: 'Fly', isCast: false }
      ],
      specialSpells: [
        { name: 'Detect Magic', isCast: false },
        { name: 'Identify', isCast: false },
        { name: 'Dispel Magic', isCast: false }
      ],
      greaterSpells: [
        { name: 'Enchant Item', isCast: false },
        { name: 'Contact Other Plane', isCast: false },
        { name: 'Polymorph Other', isCast: false }
      ]
    },
    {
      id: '2',
      type: 'dq',
      name: 'Hero 2'
    }
  ]
})

export const mutations = {
  addHero(state, hero) {
    state.heroes.push(hero)
  }
}

export const getters = {
  heroes: (state) => state.heroes,
  heroById: (state) => (id) => state.heroes.find((hero) => hero.id === id)
}
