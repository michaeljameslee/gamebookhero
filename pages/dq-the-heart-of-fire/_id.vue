<template>
  <div class="container">
    <Navbar />
    <div>Hero id: {{ heroId }}</div>
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
      hero: 'dq-the-heart-of-fire/hero',
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
