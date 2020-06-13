<template>
  <v-card class="list" rounded elevation="10" max-height="250px" color="grey lighten-4">
    <v-text-field
      v-if="editingTitle"
      class="list-header"
      hide-details="auto"
      flat
      autofocus
      solo
      v-model="list.title"
      @keydown="editTitleKeyDown($event)"
    >
    </v-text-field>
    <div v-else class="list-header" @click="editingTitle = true">{{ list.title }}</div>
    <v-icon class="trash-icon" width="10%" right @click="deleteList">mdi-delete</v-icon>
    <div class="list-body">
      <draggable v-model="list.cards" group="cards">
        <Card
          @click.native="openEdit(card)"
          v-for="card in list.cards"
          :key="card.id"
          :card="card"
        />
      </draggable>
    </div>
    <v-card class="add-card" v-if="newCard.on">
      <v-text-field
        hide-details="auto"
        flat
        autofocus
        solo
        v-model="newCard.text"
        @keydown="newCardKeyDown($event)"
      >
      </v-text-field>
    </v-card>
    <v-card
      color="grey lighten-4 grey--text"
      flat
      class="add-card"
      @click="newCard.on = true"
      v-else
      >+ Add Card</v-card
    >
    <EditCard
      :editing="editingCard"
      :card="currentCard"
      @edited="editingCard = false"
      @click:outside="editingCard = false"
      @deleteCard="deleteCard"
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
    editingTitle: true,
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
    newCardKeyDown(e) {
      if (e.key == 'Enter') {
        this.addCard();
      }
    },
    editTitleKeyDown(e) {
      if (e.key == 'Enter') {
        this.editingTitle = false;
      }
    },
    deleteCard(id) {
      const idx = this.list.cards.findIndex(card => card.id == id);
      this.list.cards.splice(idx, 1);
    },
    deleteList() {
      this.$emit('deleteList', this.list.id);
    }
  }
};
</script>

<style>
.list {
  display: inline-block !important;
}
.trash-icon {
  width: 10%;
  float: left;
  padding: 20px 0 0px 0px;
  margin: 0 !important;
  box-sizing: border-box;
}
.list-header {
  width: 85%;
  float: left;
  font-weight: bold;
  font-family: 'Segoe Ui Regular';
  padding: 20px 0 20px 20px;
}
.list-body {
  clear: both;
  max-height: 60%;
  overflow: auto;
}
.add-card {
  width: 100%;
  text-align: center;
  padding-right: 30px;
  bottom: 0px;
  margin-top: 5px;
  margin-bottom: 0px;
  padding-bottom: 0px;
}
.plus-button {
  font-size: 20px !important;
  text-transform: none !important;
}
.textarea {
  margin: 20px 30px -30px 30px;
}
</style>
