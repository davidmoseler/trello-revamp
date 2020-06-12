<template>
  <v-card rounded elevation="10" height="250px" color="grey lighten-4">
    <div class="list-header">{{ list.title }}</div>
    <draggable v-model="list.cards" group="cards" class="list-body">
      <Card v-for="(card, idx) in list.cards" :key="idx" :text="card" />
    </draggable>
    <v-dialog v-model="dialog" width="30%" height="60%">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" class="plus-button grey--text" bottom text height="20%" width="100%">+ Add Card</v-btn>
      </template>

      <v-card-text>
      </v-card-text>

      <v-divider></v-divider>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Add Card
        </v-card-title>
        <v-form
          ref="form"
          lazy-validation
        >
          <div class="textarea">
            <v-textarea
              v-model="newCard.text"
              solo
              height="100px"
              required
            ></v-textarea>
          </div>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="grey--text"
            @click="addCard"
          >
            + Add Card
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
  },
  data: () => ({
    dialog: false,
    newCard: {
      text: ""
    }
  }),
  methods: {
    addCard(){
      this.dialog = false
      this.list.cards.push(this.newCard.text)
      this.newCard.text = ""
    }
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
.textarea {
  margin: 20px 30px -30px 30px;
}
</style>
