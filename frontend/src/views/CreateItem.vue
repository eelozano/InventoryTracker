<template>
  <div>
    <b-form @submit.prevent="createItem">
      <b-form-group
        id="name-group"
        label="Name"
        label-for="name"
        description="Enter a unique name for this item"
      >
        <b-form-input id="name"></b-form-input>
      </b-form-group>
      <b-form-group
        id="description-group"
        label="Description"
        label-for="description"
      >
        <b-form-textarea id="description"></b-form-textarea>
      </b-form-group>
      <b-button type="submit">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  methods: {
    createItem: {},
  },
};
</script>

<style scoped></style>
