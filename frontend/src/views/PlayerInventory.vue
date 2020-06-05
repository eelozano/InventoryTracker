<template>
  <div>
    <h1>{{ player.name }}'s Inventory</h1>
    <ul>
      <li v-for="item in playerInventory" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: ['playerID'],

  created: function() {
    this.$store.dispatch('fetchPerson', this.playerID).then(() => {
      this.$store.dispatch('fetchInventory', this.player.itemsOwned);
    });
  },
  computed: {
    ...mapState(['playerInventory', 'player']),
  },
};
</script>

<style scoped></style>
