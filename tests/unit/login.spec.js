import Vue from 'vue';
import { mount } from '@vue/test-utils';
import Login from '@/components/Login.vue';
import Vuetify from 'vuetify';
import VueSession from 'vue-session';

Vue.use(Vuetify);
Vue.use(VueSession);

let vuetify;

describe('Login', () => {
  beforeEach(() => {
    vuetify = new Vuetify({});
  });

  test('should register user', async () => {
    const elem = document.createElement('div');
    document.body.appendChild(elem);

    const app = document.createElement('div');
    app.setAttribute('data-app', true);
    document.body.append(app);

    const wrapper = mount(Login, {
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

    let btn = wrapper.find('.open-register-modal-button');
    await btn.trigger('click');

    let input = wrapper.find('input[name=email]');
    input.value = 'davidmoseler';
    await input.trigger('input');

    input = wrapper.find('input[name=password]');
    input.value = '123';
    await input.trigger('input');

    input = wrapper.find('input[name=repeat-password]');
    input.value = '123';
    await input.trigger('input');

    input.value = '123';
    await input.trigger('input');

    btn = wrapper.find('.register-button');
    await btn.trigger('click');

    expect(wrapper.vm.$session.get('jwt')).toBe('mocktoken');
  });
});
