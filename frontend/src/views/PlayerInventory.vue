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
import EventService from '@/services/EventService.js';

export default {
  props: ['playerID'],
  data() {
    return {
      player: {},
      itemList: [],
    };
  },
  created: function() {
    EventService.getPerson(this.playerID)
      .then((response) => {
        this.player = response.data;
        this.player.itemsOwned.forEach((item) => {
          EventService.getItem(item.id)
            .then((response) => {
              this.itemList.push(response.data);
            })
            .catch((error) => {
              console.log('There was an error: ', error.response);
            });
        });
      })
      .catch((error) => {
        console.log('There was an error: ', error.response);
      });
  },
};
</script>

<style scoped></style>
