<template>
  <div>
    <v-card class="card">{{ card.text }}</v-card>
  </div>
</template>

<script>
export default {
  name: 'Card',

  props: ['card']
};
</script>

<style scoped>
.card {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 5px;
  padding: 3px;
}
</style>
