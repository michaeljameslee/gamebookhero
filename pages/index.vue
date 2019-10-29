<template>
  <div class="container">
    <Navbar />
    <div>
      <div v-for="hero in heroes" :key="hero.id">
        <nuxt-link :to="'/hero/' + hero.type + '/' + hero.id">
          {{ hero.name }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '~/components/Navbar'
export default {
  components: {
    Navbar
  },
  computed: {
    ...mapGetters({ heroes: 'heroes/heroes' })
  }
}
</script>

<style></style>
