<template>
  <v-dialog v-model="dialog" max-width="450px" class="dialog">
    <v-card>
      <v-form>
        <div class="edit">
          <v-textarea
            @keydown="handleKeydown"
            solo
            autofocus
            required
            no-resize
            v-model="card.text"
          ></v-textarea>
        </div>
      </v-form>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">
          Save
        </v-btn>
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

<style scoped>
.edit {
  padding: 30px 30px 0px 30px;
}
.dialog {
  min-width: 100px !important;
}
</style>
