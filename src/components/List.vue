<template>
  <v-card class="list" rounded elevation="10" max-height="250px" color="grey lighten-4">
    <div class="list-header">{{ list.title }}</div>
    <draggable v-model="list.cards" group="cards" class="list-body">
      <Card @click.native="openEdit(card)" v-for="card in list.cards" :key="card.id" :card="card" />
      <v-card v-if="newCard.on" class="card">
        <v-text-field solo v-model="newCard.text" @keydown="test($event)"> </v-text-field>
      </v-card>
      <v-card @click="newCard.on = true" v-else class="card">+ Add Card</v-card>
    </draggable>
    <EditCard
      :editing="editingCard"
      :card="currentCard"
      @edited="editingCard = false"
      @click:outside="editingCard = false"
    />
  </v-card>
</template>

<script>
import draggable from 'vuedraggable';
import Card from '@/components/Card.vue';
import EditCard from '@/components/EditCard.vue';

export default {
  name: 'List',

  props: ['list'],
  components: {
    draggable,
    Card,
    EditCard
  },
  data: () => ({
    editingCard: false,
    newCard: {
      on: false,
      text: ''
    },
    runningIndex: 0,
    currentCard: {}
  }),
  methods: {
    addCard() {
      const card = {
        id: this.runningIndex,
        text: this.newCard.text
      };
      this.runningIndex++;
      this.list.cards.push(card);
      this.newCard.on = false;
      this.newCard.text = '';
    },
    openEdit(card) {
      this.editingCard = true;
      this.currentCard = card;
    },
    test(e) {
      if (e.key == 'Enter') {
        this.addCard();
      }
    }
  }
};
</script>

<style>
.list {
  display: inline-block !important;
}
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
