<template>
  <div>
    <b-container>
      <InventoryList :itemList="items" />
    </b-container>
  </div>
</template>

<script>
import InventoryList from "./components/InventoryList.vue";

var sampleItems = [
  {
    name: "Club",
    description: "Club Description"
  },
  {
    name: "Dagger",
    description: "Dagger Description"
  },
  {
    name: "Greatclub",
    description: "Greatclub Description"
  },
  {
    name: "Handaxe",
    description: "Handaxe Description"
  },
  {
    name: "Javelin",
    description: "Javelin Description"
  },
  {
    name: "Light hammer",
    description: "Light hammer Description"
  },
  {
    name: "Mace",
    description: "Mace Description"
  },
  {
    name: "Quarterstaff",
    description: "Quarterstaff Description"
  },
  {
    name: "Sickle",
    description: "Sickle Description"
  },
  {
    name: "Spear",
    description: "Spear Description"
  }
];

export default {
  name: "App",
  components: {
    InventoryList
  },
  data() {
    return {
      items: sampleItems
    };
  }
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
