<template>
  <draggable v-model="lists" group="lists" class="list-grid">
    <List v-for="(list, idx) in lists" :key="idx" :list="list" />
  </draggable>
</template>

<script>
import draggable from 'vuedraggable';
import List from '@/components/List.vue';

export default {
  name: 'ListGrid',

  components: {
    draggable,
    List
  },
  data: () => ({
    lists: [
      {
        title: 'Hello this is a list',
        cards: []
      },
      {
        title: 'Hello this is a list',
        cards: []
      },
      {
        title: 'Hello this is a list',
        cards: []
      },
      {
        title: 'Hello this is a list',
        cards: []
      },
      {
        title: 'Hello this is a list',
        cards: []
      }
    ]
  })
};
</script>

<style>
.list-grid {
  display: grid;
  margin: 40px;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
</style>
