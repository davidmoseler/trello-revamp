<template>
  <v-dialog v-model="dialog" width="30%" height="60%">
    <v-card-text> </v-card-text>

    <v-divider></v-divider>

    <v-card>
      <h1 class="headline grey lighten-2">
        Edit Card
        <v-icon @click="deleteCard" style="float: right!important" right>mdi-delete</v-icon>
      </h1>
      <v-form ref="form" lazy-validation>
        <div class="textarea">
          <v-textarea
            @keydown="handleKeydown"
            solo
            autofocus
            height="100px"
            required
            no-resize
            v-model="card.text"
          ></v-textarea>
        </div>
      </v-form>
      <v-card-actions>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'EditCard',

  props: ['editing', 'card'],
  components: {},
  data: () => ({
    dialog: false
  }),
  watch: {
    dialog(value) {
      if (!value) {
        this.$emit('edited', true);
      }
    },
    editing(value) {
      if (value) {
        this.dialog = true;
      }
    }
  },
  methods: {
    handleKeydown(e) {
      if (e.key == 'Enter') {
        this.dialog = false;
        this.$emit('edited', true);
        e.preventDefault();
      }
    },
    deleteCard() {
      this.$emit('deleteCard', this.card.id);
      this.dialog = false;
      this.$emit('edited', true);
    }
  }
};
</script>

<style>
.textarea {
  margin: 20px 30px -30px 30px;
}
</style>
