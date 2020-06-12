<template>
  <v-card rounded elevation="10" height="250px" color="grey lighten-4">
    <div class="list-header">{{ list.title }}</div>
    <draggable v-model="list.cards" group="cards" class="list-body">
      <Card v-for="(card, idx) in list.cards" :key="idx" :text="card" />
    </draggable>
    <v-btn class="plus-button grey--text" flat bottom text height="20%" width="100%">+ Add Card</v-btn>
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
  height: 60%;
}
.plus-button {
  padding-right: 30px !important;
  font-size: 20px !important;
  text-transform: none !important;
}
</style>
