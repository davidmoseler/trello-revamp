import Vue from 'vue';
import { mount } from '@vue/test-utils';
import ListGrid from '@/components/ListGrid.vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

describe('ListGrid', () => {
  test('should add lists when +List is clicked', () => {
    const wrapper = mount(ListGrid, {});

    expect(wrapper.vm.lists.length).toBe(0);

    let newListCard = wrapper.findAllComponents({ name: 'v-card' }).filter(card => {
      return card.html().includes('+List');
    });

    newListCard.trigger('click');

    expect(wrapper.vm.lists.length).toBe(1);

    newListCard = wrapper.findAllComponents({ name: 'v-card' }).filter(card => {
      return card.html().includes('+List');
    });

    newListCard.trigger('click');

    expect(wrapper.vm.lists.length).toBe(2);
  });

  test('should delete lists', async () => {
    const wrapper = mount(ListGrid, {});

    wrapper.vm.lists = [
      { id: 0, title: 'My title', cards: [{ id: 0, text: 'Text' }] },
      { id: 1, title: 'My other title', cards: [] }
    ];

    expect(wrapper.vm.lists.length).toBe(2);

    await Vue.nextTick();

    let list = wrapper.findAllComponents({ name: 'List' }).at(1);
    await list.find('.trash-icon').trigger('click');

    expect(wrapper.vm.lists.length).toBe(1);

    expect(wrapper.vm.lists.slice(-1)[0].title).toBe('My title');

    list = wrapper.findAllComponents({ name: 'List' }).at(0);
    await list.find('.trash-icon').trigger('click');

    expect(wrapper.vm.lists.length).toBe(0);
  });
});
