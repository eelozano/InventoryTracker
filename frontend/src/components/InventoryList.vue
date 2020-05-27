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
import EventService from '@/services/EventService.js';

export default {
  data() {
    return {
      itemList: [],
      fields: ['title', 'description'],
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
