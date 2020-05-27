<template>
  <div>
    <b-card :title="person.name" />
  </div>
</template>

<script>
export default {
  props: {
    person: Object,
  },
};
</script>

<style scoped></style>
