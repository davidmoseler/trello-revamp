<template>
  <v-card class="list" rounded elevation="10" max-height="250px" color="grey lighten-4">
    <v-text-field
      v-if="editingTitle"
      class="list-title title-edit"
      hide-details="auto"
      flat
      autofocus
      solo
      v-model="list.title"
      @keydown="editTitleKeyDown($event)"
    >
    </v-text-field>
    <div v-else class="list-title" @click="editingTitle = true">{{ list.title }}</div>
    <v-icon class="trash-icon" width="10%" right @click="deleteList">mdi-delete</v-icon>
    <div class="list-body">
      <draggable v-model="list.cards" group="cards">
        <Card
          @click.native="openEdit(card)"
          v-for="card in list.cards.filter(card => !card.hidden)"
          :key="card.id"
          :card="card"
        />
      </draggable>
      <v-card class="new-card" v-if="newCard">
        <v-text-field
          hide-details="auto"
          flat
          autofocus
          solo
          v-model="list.cards.slice(-1)[0].text"
          @keydown="newCardKeyDown($event)"
        >
        </v-text-field>
      </v-card>
    </div>
    <v-card flat @click="addCard">
      <v-btn block depressed color="grey lighten-4 grey--text" class="add-card">
        + Add Card
      </v-btn>
    </v-card>
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
    editingTitle: false,
    editingCard: false,
    newCard: false,
    runningIndex: 0,
    currentCard: {}
  }),
  methods: {
    addCard() {
      const card = {
        id: this.runningIndex,
        text: '',
        hidden: true
      };
      this.runningIndex++;
      this.list.cards.push(card);
      this.newCard = true;
    },
    openEdit(card) {
      this.editingCard = true;
      this.currentCard = card;
    },
    newCardKeyDown(e) {
      if (e.key == 'Enter') {
        this.list.cards.slice(-1)[0].hidden = false;
        this.newCard = false;
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
  },
  mounted() {
    this.editingTitle = !this.list.title;
  }
};
</script>

<style scoped>
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
.list-title {
  width: 85%;
  float: left;
  font-weight: bold;
  font-family: 'Segoe Ui Regular';
  padding: 20px 0 20px 20px;
}
.title-edit {
  padding: 8px 0 8px 8px;
}
.list-body {
  clear: both;
  max-height: 60%;
  overflow: auto;
}
.new-card {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 5px;
  padding: 0px;
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
.textarea {
  margin: 20px 30px -30px 30px;
}
</style>
