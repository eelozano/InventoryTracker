<template>
  <div>
    <h1>Party List</h1>
    <PlayerCard
      v-for="player in peopleList"
      :key="player.id"
      :player="player"
    />
  </div>
</template>

<script>
import PlayerCard from '@/components/PlayerCard.vue';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      fields: ['name'],
    };
  },
  components: {
    PlayerCard: PlayerCard,
  },
  created: function() {
    this.$store.dispatch('fetchPeople');
  },
  computed: {
    ...mapState(['peopleList']),
  },
};
</script>
<style scoped></style>
