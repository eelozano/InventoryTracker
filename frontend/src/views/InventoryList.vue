<template>
  <div>
    <h1>Inventory List</h1>
    <b-table
      hover
      sticky-header
      :items="itemList"
      :fields="fields"
      :primary-key="'id'"
    >
      <template v-slot:cell(title)="data"
        ><router-link :to="{ name: 'Item', params: { id: data.item.id } }">{{
          data.value
        }}</router-link></template
      >
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      fields: ['title', 'description'],
    };
  },
  created: function() {
    this.$store.dispatch('fetchItems');
  },
  computed: {
    ...mapState(['itemList']),
  },
};
</script>
<style scoped></style>
