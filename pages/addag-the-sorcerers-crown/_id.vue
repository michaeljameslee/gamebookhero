<template>
  <div class="container">
    <Navbar />
    <div>Hero id: {{ heroId }}</div>
    <div>CHARACTER STATS CARD</div>
    <div>THE SORCERER'S CROWN</div>
    <div>NAME: {{ hero.name }}</div>
    <div>CLASS: {{ hero.class }}</div>
    <div>SKILL POINTS:</div>
    <div>Intelligence: {{ hero.intelligence }}</div>
    <div>Dexterity: {{ hero.dexterity }}</div>
    <div>Charisma: {{ hero.charisma }}</div>
    <div>HIT POINTS: {{ hero.hitPoints }}</div>
    <div>SCEPTER OF BHUKOD: {{ hero.hasScepter }}</div>
    <div>BOOK OF LESSER SPELLS:</div>
    <div>OFFENSIVE SPELLS:</div>
    <div v-for="spell in hero.offensiveSpells" :key="spell.name">
      {{ spell.name }}
    </div>
    <div>DEFENSIVE SPELLS:</div>
    <div v-for="spell in hero.defensiveSpells" :key="spell.name">
      {{ spell.name }}
    </div>
    <div>SPECIAL SPELLS:</div>
    <div v-for="spell in hero.specialSpells" :key="spell.name">
      {{ spell.name }}
    </div>
    <div>GREATER SPELLS:</div>
    <div v-for="spell in hero.greaterSpells" :key="spell.name">
      {{ spell.name }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '~/components/Navbar'
export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters({
      hero: 'addag-the-sorcerers-crown/hero',
    }),
    heroId() {
      return this.$route.params.id.toString()
    },
  },
  methods: {
    rollHitpoints() {
      // roll 4d6 and take the two highest + 6
      return 1
    },
  },
}
</script>

<style></style>
