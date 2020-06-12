<template>
  <v-card rounded elevation="10" height="200px" color="grey lighten-4">
    <div class="list-header">{{ title }}</div>
    <div class="list-body">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </v-card>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  name: 'List',

  props: ['title'],
  components: {
    Card
  }
};
</script>

<style>
.list-header {
  font-weight: bold;
  font-family: 'Segoe Ui Regular';
  padding: 10px 0 20px 20px;
}
.list-body {
  overflow: auto;
  height: 70%;
}
</style>
