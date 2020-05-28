<template>
  <div>
    <b-card :title="player.name">
      <router-link :to="{ name: 'Inventory', params: { playerID: player.id } }">
        <b-button>Inventory</b-button>
      </router-link>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    player: Object,
  },
};
</script>

<style scoped></style>
