import Vue from 'vue';
import { mount } from '@vue/test-utils';
import ListGrid from '@/components/ListGrid.vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

describe('ListGrid', () => {
  test('should add lists when +List is clicked', () => {
    const wrapper = mount(ListGrid, {
    });

    expect(wrapper.vm.lists.length).toBe(0)

    let newListCard = wrapper.findAllComponents({name: 'v-card'}).filter((card)=>{
      return card.html().includes('+List')
    })

    newListCard.trigger('click')

    expect(wrapper.vm.lists.length).toBe(1)

    newListCard = wrapper.findAllComponents({name: 'v-card'}).filter((card)=>{
      return card.html().includes('+List')
    })

    newListCard.trigger('click')

    expect(wrapper.vm.lists.length).toBe(2)
  })
})
