<template>
  <div>
    <nav>
      <div id="nav">
        <router-link :to="{ name: 'Items' }">Inventory List</router-link> |
        <router-link :to="{ name: 'Party' }">Party</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
