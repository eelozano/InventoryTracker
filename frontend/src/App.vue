<template>
  <div>
    <b-container>
      <InventoryList />
    </b-container>
  </div>
</template>

<script>
import InventoryList from '@/components/InventoryList.vue';

export default {
  name: 'App',
  components: {
    InventoryList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
