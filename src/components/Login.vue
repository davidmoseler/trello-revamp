<template>
  <div>
    <v-dialog @input="closeLoginModal" :value="loginModal" max-width="450px">
      <v-card class="card">
        <v-card-title>
          Login before you can save to your account
        </v-card-title>
        <v-container>
          <v-text-field name="email" label="Email" />
          <v-text-field name="password" label="Password" type="password" />
          <v-btn @click="login" class="login-button">Login</v-btn>
          <v-btn
            @click="
              loginModal = false;
              registerModal = true;
            "
            class="open-register-modal-button"
            >Register instead</v-btn
          >
        </v-container>
      </v-card>
    </v-dialog>
    <v-dialog @input="closeRegisterModal" :value="registerModal" max-width="450px">
      <v-card class="card">
        <v-card-title>
          Register a new user
        </v-card-title>
        <v-container>
          <v-text-field name="email" label="Email" />
          <v-text-field name="password" label="Password" type="password" />
          <v-text-field name="repeat-password" label="Repeat Password" type="password" />
          <v-btn @click="register" class="register-button">Register</v-btn>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import repositoryFactory from '@/repositories/repositoryFactory';

export default {
  name: 'Login',

  props: ['value'],
  data() {
    return {
      loginModal: this.value,
      registerModal: false,
      authRepository: repositoryFactory.get('auth', this.$root.config)
    };
  },
  watch: {
    value(value) {
      if (value) {
        this.loginModal = true;
      } else {
        this.loginModal = false;
        this.registerModal = false;
      }
    }
  },
  methods: {
    async login() {
      const res = await this.authRepository.authenticate('idontexist', '123');
      if (res.ok) {
        this.$session.start();
        this.$session.set('jwt', res.jwt);
      }
    },
    async register() {
      let res = await this.authRepository.register('idontexist', '123');
      if (res.ok) {
        res = await this.authRepository.authenticate('idontexist', '123');
        this.$session.start();
        this.$session.set('jwt', res.jwt);
      }
    },
    closeLoginModal() {
      this.loginModal = false;
      if (!this.registerModal) {
        this.$emit('input', false);
      }
    },
    closeRegisterModal() {
      this.registerModal = false;
      if (!this.loginModal) {
        this.$emit('input', false);
      }
    }
  }
};
</script>

<style scoped>
.card {
  overflow: auto;
  padding-bottom: 3px;
}
.login-button,
.register-button {
  float: right;
  margin: 4px;
}
.open-register-modal-button {
  float: left;
  margin: 4px;
}
</style>
