<template>
  <v-card class="card">{{ text }}</v-card>
</template>

<script>
export default {
  name: 'Card',

  props: ['text']
};
</script>

<style>
.card {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 5px;
  padding: 3px;
}
</style>
