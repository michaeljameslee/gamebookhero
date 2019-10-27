<template>
  <div class="container">
    <Navbar />Heroes (Home)
    <div>
      <nuxt-link to="/hero/destiny-quest/42" class="navbar-item"
        >Hero 42</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style></style>
