<template>
  <draggable v-model="lists" group="lists" class="list-grid">
    <List @deleteList="deleteList" v-for="list in lists" :key="list.id" :list="list" />
    <v-card
      @click="addList"
      class="list grey--text"
      rounded
      elevation="10"
      max-height="250px"
      color="grey lighten-2"
    >
      <div class="card-fill">
        <h3 class="plus-list">
          +List
        </h3>
      </div>
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
        title: '',
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

<style scoped>
.list-grid {
  display: grid;
  margin: 40px;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
.card-fill {
  display: table;
  width: 100%;
  height: 100%;
}
.plus-list {
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}
</style>
