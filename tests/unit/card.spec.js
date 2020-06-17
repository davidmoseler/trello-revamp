import Vue from 'vue';
import { createLocalVue, mount } from '@vue/test-utils'
import Card from '@/components/Card.vue'
import Vuetify from 'vuetify';

Vue.use(Vuetify)

describe('Card', ()=>{
  test('has text', ()=>{
    const wrapper = mount(Card, {
      propsData: {
        card: {text: 'Texty text'}
      }
    })

    expect(wrapper.html()).toContain('Texty text');
  })
})
