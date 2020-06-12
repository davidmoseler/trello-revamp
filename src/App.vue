<template>
  <v-app style="background-color: #dbdfcf">
    <v-app-bar height="45px" app color="primary" dark>
      <div class="d-flex align-center">
        <v-btn light color="#7da6d4" elevation="0" class="white--text">
          <v-icon>mdi-border-all</v-icon>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <span class="mr-2">Be happy</span>
      <v-avatar color="white" class="blue--text body-1">D</v-avatar>
    </v-app-bar>
    <v-content>
      <div class="card-grid">
        <v-card v-for="(list, idx) in lists" :key=idx rounded elevation="10" color="grey lighten-4">
          <div class="list-header">{{list}}</div>
            <v-card class="card">Test</v-card>
            <v-card class="card">Test</v-card>
            <v-card class="card">Test</v-card>
        </v-card>
      </div>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

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
      'Hello this is a list',
    ]
  })
};
</script>

<style>
@font-face {
    font-family: 'Segoe UI Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Segoe UI Regular'), url('/assets/fonts/Segoe UI.woff') format('woff');
}
.card-grid {
  display: grid;
  margin: 40px;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
.list-header {
  font-weight: bold;
  font-family: 'Segoe Ui Regular';
  padding: 10px 0 20px 20px;
}
.card {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 5px;
  padding: 3px;
}
</style>
