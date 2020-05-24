<template>
  <div>
    <h1>Welcome to Inventory Tracker</h1>
    <b-table hover :items="itemList"></b-table>
  </div>
</template>

<script>
import EventService from '@/services/EventService.js';

export default {
  data() {
    return {
      itemList: [],
    };
  },
  created: function() {
    EventService.getItems()
      .then((response) => {
        console.log(response.data);
        this.itemList = response.data;
      })
      .catch((error) => {
        console.log('There was an error: ', error.response);
      });
  },
};
</script>
<style scoped></style>
