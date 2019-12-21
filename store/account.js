export const state = () => ({
  id: '1',
  name: 'Michael Lee',
  heroes: [
    {
      id: '1',
      gamebook: 'addag-the-sorcerers-crown',
      name: 'Carr Delling',
    },
    {
      id: '2',
      gamebook: 'dq-the-heart-of-fire',
      name: 'Stolen',
    },
  ],
})

export const mutations = {
  addHero(state, hero) {
    state.heroes.push(hero)
  },
}

export const getters = {
  heroes: state => state.heroes,
  heroById: state => id => state.heroes.find(hero => hero.id === id),
}
