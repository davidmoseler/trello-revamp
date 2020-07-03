import Vue from 'vue';
import { mount } from '@vue/test-utils';
import Login from '@/components/Login.vue';
import Vuetify from 'vuetify';
import VueSession from 'vue-session';

Vue.use(Vuetify);
Vue.use(VueSession);

let vuetify;
let wrapper;

const elem = document.createElement('div');
document.body.appendChild(elem);

const app = document.createElement('div');
app.setAttribute('data-app', true);
document.body.append(app);

describe('Login', () => {
  beforeEach(() => {
    vuetify = new Vuetify({});
    wrapper = mount(Login, {
      attachTo: elem,
      vuetify,
      propsData: {
        value: true
      },
      mocks: {
        config: {
          mockResources: true
        }
      }
    });
  });

  afterEach(() => {
    wrapper.vm.$session.destroy();
    wrapper.destroy();
  });

  test('should register user', async () => {
    let btn = wrapper.find('.open-register-modal-button');
    await btn.trigger('click');

    let input = wrapper.find('input[name=email]');
    input.element.value = 'user@mail.com';
    await input.trigger('input');

    input = wrapper.find('input[name=password]');
    input.element.value = '123';
    await input.trigger('input');

    input = wrapper.find('input[name=repeat-password]');
    input.element.value = '123';
    await input.trigger('input');

    btn = wrapper.find('.register-button');
    await btn.trigger('click');

    expect(wrapper.vm.$session.get('jwt')).toBe('mocktoken');

    wrapper.vm.$session.destroy();
    wrapper.destroy();
  });

  test('should login user', async () => {
    let input = wrapper.find('input[name=email]');
    input.element.value = 'user@mail.com';
    await input.trigger('input');

    input = wrapper.find('input[name=password]');
    input.element.value = '123';
    await input.trigger('input');

    const btn = wrapper.find('.login-button');
    await btn.trigger('click');

    expect(wrapper.vm.$session.get('jwt')).toBe('mocktoken');

    wrapper.vm.$session.destroy();
    wrapper.destroy();
  });

  test('should warn if email is invalid in login', async () => {
    const input = wrapper.find('input[name=email]');
    input.element.value = 'user';
    await input.trigger('input');

    expect(document.body.innerHTML).toContain('Invalid email format');

    wrapper.vm.$session.destroy();
    wrapper.destroy();
  });

  test('should warn if passwords do not match in register', async () => {
    const btn = wrapper.find('.open-register-modal-button');
    await btn.trigger('click');

    let input = wrapper.find('input[name=email]');
    input.element.value = 'new_user@mail.com';
    await input.trigger('input');

    input = wrapper.find('input[name=password]');
    input.element.value = '4321';
    await input.trigger('input');

    input = wrapper.find('input[name=repeat-password]');
    input.element.value = '432';
    await input.trigger('input');

    expect(document.body.innerHTML).toContain("Passwords don't match");
  });

  test('should warn if email is empty in login', async () => {
    let input = wrapper.find('input[name=email]');
    input.element.value = 'a';
    await input.trigger('input');
    input.element.value = '';
    await input.trigger('input');

    expect(document.body.innerHTML).toContain("This field is required");
  });

  test('should warn if the user does not exist', () => {});

  test('should warn if the password is wrong', () => {});
});
