<template>
  <div class="container">
    <Navbar />
    <div>Hero id: {{ heroId }} ({{ hero.id }})</div>
    <div>Gamebook: {{ hero.gamebook }}</div>
    <div class="tile is-ancestor hero-container">
      <div class="tile is-vertical is-6">
        <!-- left panel -->
        <div class="tile is-parent is-wrapping">
          <!-- name -->
          <div class="tile is-child is-12">
            <div class="rustic-box">
              <span class="dq-label">Name:</span>
              <span class="dq-hero-name">{{ hero.name }}</span>
            </div>
          </div>
          <!-- main equipment 1 -->
          <div class="tile is-child is-4">
            <div class="rustic-box equipment-box">
              <span class="dq-label">CLOAK</span>
              <EquipmentItem :item="getEquipmentItem('head')" />
            </div>
          </div>
          <div class="tile is-child is-4">
            <div class="rustic-box equipment-box">
              <span class="dq-label">HEAD</span>
            </div>
          </div>
          <div class="tile is-child is-4">
            <div class="rustic-box equipment-box">
              <span class="dq-label">GLOVES</span>
            </div>
          </div>
          <div class="tile is-child is-4">
            <div class="rustic-box equipment-box">
              <span class="dq-label">MAIN HAND</span>
            </div>
          </div>
          <div class="tile is-child is-4">
            <div class="rustic-box equipment-box">
              <span class="dq-label">CHEST</span>
            </div>
          </div>
          <div class="tile is-child is-4">
            <div class="rustic-box equipment-box">
              <span class="dq-label">LEFT HAND</span>
            </div>
          </div>
          <div class="tile is-child is-4">
            <div class="rustic-box equipment-box">
              <span class="dq-label">TALISMAN</span>
            </div>
            <div class="tile">
              <div class="tile is-child">
                <div class="rustic-box attribute-box">
                  <span class="dq-label">SPEED</span>
                  <div class="dq-attribute">{{ hero.speed }}</div>
                </div>
              </div>
              <div class="tile is-child">
                <div class="rustic-box attribute-box">
                  <span class="dq-label">BRAWN</span>
                  <div class="dq-attribute">{{ hero.brawn }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="tile is-child is-4">
            <div class="rustic-box equipment-box">
              <span class="dq-label">FEET</span>
            </div>
            <div class="tile">
              <div class="tile is-child">
                <div class="rustic-box attribute-box">
                  <span class="dq-label">MAGIC</span>
                  <div class="dq-attribute">{{ hero.magic }}</div>
                </div>
              </div>
              <div class="tile is-child">
                <div class="rustic-box attribute-box">
                  <span class="dq-label">ARMOR</span>
                  <div class="dq-attribute">{{ hero.armor }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="tile is-child is-4">
            <div class="rustic-box equipment-box">
              <span class="dq-label">MONEY POUCH</span>
            </div>
            <div class="tile">
              <div class="tile is-child">
                <div class="rustic-box attribute-box">
                  <span class="dq-label">HEALTH</span>
                  <div class="dq-attribute">{{ hero.health }}</div>
                </div>
              </div>
              <div class="tile is-child">
                <div class="rustic-box attribute-box">
                  <span class="dq-label">MAX</span>
                  <div class="dq-attribute">{{ hero.healthMax }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tile is-vertical is-6">
        <!-- right panel -->
        <div class="tile">
          <div class="tile is-parent">
            <div class="tile is-child is-12">
              <div class="columns rustic-box">
                <div class="column no-padding">
                  <span class="dq-label">Path:</span>
                  <span class="dq-hero-name">{{ hero.path }}</span>
                </div>
                <div class="column no-padding">
                  <span class="dq-label">Career:</span>
                  <span class="dq-hero-name">{{ hero.career }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>Speed: {{ hero.speed }}</div>
    <div>Brawn: {{ hero.brawn }}</div>
    <div>Magic: {{ hero.magic }}</div>
    <div>Armor: {{ hero.armor }}</div>
    <div>Health: {{ hero.health }}</div>
    <div>Max health: {{ hero.healthMax }}</div>
    <div>
      eqipmentSlots:
      <span v-for="slot in hero.eqipmentSlots" :key="slot"> {{ slot }}, </span>
    </div>
    <div>
      eqipmentItems:
      <span v-for="item in hero.eqipmentItems" :key="item.name">
        {{ item }},
      </span>
    </div>
    <div>
      backpackItems:
      <span v-for="item in hero.backpackItems" :key="item.name">
        {{ item }},
      </span>
    </div>
    <div>Money pouch: {{ hero.moneyPouch }}</div>
    <div>Notes: {{ hero.notes }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '~/components/Navbar'
import EquipmentItem from '~/components/dq/EquipmentItem'
export default {
  components: {
    Navbar,
    EquipmentItem,
  },
  computed: {
    ...mapGetters({
      hero: 'dq-the-heart-of-fire/hero',
      equipmentItems: 'dq-the-heart-of-fire/equipmentItems',
    }),
    heroId() {
      return this.$route.params.id.toString()
    },
  },
  methods: {
    getEquipmentItem(slot) {
      return this.equipmentItems.find(item => item.slot === slot)
    },
    rollHitpoints() {
      // roll 4d6 and take the two highest + 6
      return 1
    },
  },
}
/*
populate attributes
layout right side
populate eqipment and items, assign to slots
multi-panel view
hand font for entries
fantasy serif font for labels
*/
</script>

<style>
.is-wrapping {
  flex-wrap: wrap;
}
.no-padding {
  padding: 0;
}
.rustic-box {
  margin: 0.3rem;
  padding: 0.3rem;
  border: solid 2px #666;
  border-radius: 255px 9px 225px 9px/9px 225px 9px 255px;
  overflow: auto;
}
.equipment-box {
  height: 9rem;
}
.attribute-box {
  height: 4rem;
}
.hero-container {
  font: 1em serif;
}
.dq-label {
  text-transform: uppercase;
  font-variant-position: super;
  font-size: 0.7em;
  display: inline-block;
  vertical-align: top;
}
.dq-hero-name {
  font-size: 1.6em;
  line-height: 0.8em;
}
.dq-attribute {
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 1.6em;
}
</style>
