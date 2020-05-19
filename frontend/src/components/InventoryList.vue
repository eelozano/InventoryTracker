<template>
  <div>
    <h1>Welcome to Inventory Tracker</h1>
    <b-table hover :items="itemList"></b-table>
  </div>
</template>

<script>
export default {
  props: {
    itemList: {
      type: Array,
      required: true
    }
  }
};
</script>
<style scoped>
</style>