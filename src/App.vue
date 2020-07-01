<template>
  <v-app style="background-color: #dbdfcf">
    <Login v-model="loginModal" />

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
    <v-main>
      <ListGrid />
      <v-bottom-navigation absolute>
        <v-btn @click="loginModal = true" width="100%">
          Save
        </v-btn>
      </v-bottom-navigation>
    </v-main>
  </v-app>
</template>

<script>
import ListGrid from '@/components/ListGrid.vue';
import Login from '@/components/Login.vue';

export default {
  name: 'App',

  components: {
    Login,
    ListGrid
  },
  data() {
    return {
      loginModal: false
    };
  }
};
</script>

<style>
@font-face {
  font-family: 'Segoe UI Regular';
  font-style: normal;
  font-weight: normal;
  src: local('Segoe UI Regular'), url('/assets/fonts/Segoe UI.woff') format('woff');
}
</style>
