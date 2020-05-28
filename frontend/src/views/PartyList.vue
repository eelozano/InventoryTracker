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
import EventService from '@/services/EventService.js';
import PlayerCard from '@/components/PlayerCard.vue';

export default {
  data() {
    return {
      peopleList: [],
      fields: ['name'],
    };
  },
  components: {
    PlayerCard: PlayerCard,
  },
  created: function() {
    EventService.getPeople()
      .then((response) => {
        this.peopleList = response.data;
      })
      .catch((error) => {
        console.log('There was an error: ', error.response);
      });
  },
};
</script>
<style scoped></style>
