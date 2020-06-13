<template>
  <draggable v-model="lists" group="lists" class="list-grid">
    <List @deleteList="deleteList" v-for="list in lists" :key="list.id" :list="list" />
    <v-card
      @click="addList"
      class="list"
      rounded
      elevation="10"
      max-height="250px"
      color="grey lighten-2"
    >
      +List
    </v-card>
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
    lists: [],
    runningIndex: 0
  }),
  methods: {
    addList() {
      this.lists.push({
        id: this.runningIndex,
        title: 'Hello this is a list',
        cards: []
      });
      this.runningIndex++;
    },
    deleteList(id) {
      const idx = this.lists.findIndex(list => list.id == id);
      this.lists.splice(idx, 1);
    }
  }
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
