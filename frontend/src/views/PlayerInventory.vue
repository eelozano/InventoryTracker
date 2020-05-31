<template>
  <div>
    <h1>{{ player.name }}'s Inventory</h1>
    <ul>
      <li v-for="item in itemList" :key="item.id">
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
    this.$store.dispatch('fetchPerson', this.playerID);
    this.$store.dispatch('fetchInventory', player.itemsOwned);
  },
  computed: {
    ...mapState(['itemList', 'player']),
  },
};
</script>

<style scoped></style>
