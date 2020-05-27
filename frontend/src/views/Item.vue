<template>
  <div>
    <h1>{{ item.title }}</h1>
    <p>{{ item.description }}</p>
  </div>
</template>

<script>
import EventService from '@/services/EventService';

export default {
  props: ['id'],
  data() {
    return {
      item: {},
    };
  },
  created: function() {
    EventService.getItem(this.id)
      .then((response) => {
        this.item = response.data;
      })
      .catch((error) => {
        console.log('There was an error: ', error.response);
      });
  },
};
</script>

<style scoped></style>
