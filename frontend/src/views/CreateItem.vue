<template>
  <div>
    <b-form @submit.prevent="createItem">
      <b-form-group
        id="name-group"
        label="Name"
        label-for="name"
        description="Enter a unique name for this item"
      >
        <b-form-input id="title" v-model="item.title"></b-form-input>
      </b-form-group>
      <b-form-group
        id="description-group"
        label="Description"
        label-for="description"
      >
        <b-form-textarea
          id="description"
          v-model="item.description"
        ></b-form-textarea>
      </b-form-group>
      <b-button type="submit">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      item: this.createFreshItem(),
    };
  },
  methods: {
    createFreshItem() {
      const id = Math.floor(Math.random() * 10000000);
      return {
        id: id,
        title: '',
        description: '',
      };
    },
    createItem() {
      this.$store.dispatch('createItem', this.item).then(() => {
        this.$router.push({
          name: 'Item',
          params: { id: this.item.id },
        });
        this.item = this.createFreshItem();
      });
    },
  },
  computed: {
    ...mapState(['itemList']),
  },
};
</script>

<style scoped></style>
