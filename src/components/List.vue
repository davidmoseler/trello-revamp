<template>
  <v-card rounded elevation="10" height="200px" color="grey lighten-4">
    <div class="list-header">{{ list.title }}</div>
    <draggable v-model="list.cards" group="cards" class="list-body">
      <Card v-for="(card, idx) in list.cards" :key="idx" :text="card" />
    </draggable>
  </v-card>
</template>

<script>
import draggable from 'vuedraggable';
import Card from '@/components/Card.vue';

export default {
  name: 'List',

  props: ['list'],
  components: {
    draggable,
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
