<template>
  <div class="item-container">
    <div class="item-name">{{ item.name }}</div>
    <div class="bonus-container">
      <div v-for="bonus in item.attributeBonuses" :key="bonus.name">
        {{ bonus.modifier }} {{ bonus.name }}
      </div>
    </div>
    <div>
      <span v-for="ability in item.abilities" :key="ability">
        {{ ability }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EquipmentItem',
  props: ['item'],
}
</script>

<style scoped>
.item-container div {
  text-align: center;
}
.item-name {
  padding-bottom: 1em;
}
.bonus-container {
  padding-bottom: 1em;
}
</style>
