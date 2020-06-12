<template>
  <div class="list-grid">
    <List v-for="(list, idx) in lists" :key="idx" :title="list" />
  </div>
</template>

<script>
import List from '@/components/List.vue';

export default {
  name: 'ListGrid',

  components: {
    List
  },
  data: () => ({
    lists: [
      'Hello this is a list',
      'Hello this is a list',
      'Hello this is a list',
      'Hello this is a list',
      'Hello this is a list',
      'Hello this is a list',
      'Hello this is a list',
      'Hello this is a list',
      'Hello this is a list',
      'Hello this is a list',
      'Hello this is a list'
    ]
  })
};
</script>

<style scoped>
.list-grid {
  display: grid;
  margin: 40px;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
</style>
