<template>
  <div>
    <h1>{{ item.title }}</h1>
    <p>{{ item.description }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: ['id'],

  created: function() {
    this.$store.dispatch('fetchItem', this.id);
  },
  computed: {
    ...mapState(['item']),
  },
};
</script>

<style scoped></style>
