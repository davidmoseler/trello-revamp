import Vue from 'vue';
import { mount } from '@vue/test-utils';
import List from '@/components/List.vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

let vuetify;

describe('List', () => {
  beforeEach(() => {
    vuetify = new Vuetify({});
  });

  test('should display received title', () => {
    const wrapper = mount(List, {
      propsData: {
        list: {
          id: 0,
          title: 'Title of list',
          cards: []
        }
      }
    });

    expect(wrapper.html()).toContain('Title of list');
  });

  test('should not start editing the title if its passed in', () => {
    const wrapper = mount(List, {
      propsData: {
        list: {
          id: 0,
          title: 'Title of list',
          cards: []
        }
      }
    });

    expect(wrapper.vm.editingTitle).toBe(false);
  });

  test('should start editing the title if its not passed in', async () => {
    const node = document.createElement('div');
    node.setAttribute('id', 'app');
    document.body.appendChild(node);

    const wrapper = mount(List, {
      attachTo: '#app',
      propsData: {
        list: {
          id: 0,
          cards: []
        }
      }
    });

    expect(wrapper.vm.list.title).toBeFalsy();

    await Vue.nextTick();
    const input = wrapper.find('input');

    expect(document.activeElement).toBe(input.element);

    input.element.value = 'title';
    input.trigger('input');

    expect(wrapper.vm.list.title).toBe('title');
    wrapper.destroy();
  });

  test('should display card text if its passed in', () => {
    const wrapper = mount(List, {
      propsData: {
        list: {
          id: 0,
          cards: [{ text: 'Texty text' }]
        }
      }
    });

    expect(wrapper.html()).toContain('Texty text');
  });

  test('should have an add card button', () => {
    const wrapper = mount(List, {
      propsData: {
        list: {
          id: 0,
          cards: []
        }
      }
    });

    expect(wrapper.html().toLowerCase()).toContain('add card');
  });

  test('should have an add card button', () => {
    const wrapper = mount(List, {
      propsData: {
        list: {
          id: 0,
          cards: []
        }
      }
    });

    const buttons = wrapper.findAll('button').filter(button => {
      return button
        .html()
        .toLowerCase()
        .includes('add card');
    });
    expect(buttons.length).not.toBe(0);
  });

  test('should edit a new card title when add card button is clicked', async () => {
    const node = document.createElement('div');
    node.setAttribute('id', 'app');
    document.body.appendChild(node);

    const wrapper = mount(List, {
      attachTo: '#app',
      propsData: {
        list: {
          id: 0,
          title: 'title',
          cards: []
        }
      }
    });

    const addCardButton = wrapper
      .findAll('button')
      .filter(button => {
        return button
          .html()
          .toLowerCase()
          .includes('add card');
      })
      .at(0);

    await addCardButton.trigger('click');

    expect(wrapper.vm.list.cards.length).toBe(1);
    expect(wrapper.vm.list.cards.slice(-1)[0].text).toBe('');

    const input = wrapper.find('input');

    expect(document.activeElement).toBe(input.element);

    input.element.value = 'title';
    input.trigger('input');

    expect(wrapper.vm.list.cards.slice(-1)[0].text).toBe('title');
    wrapper.destroy();
  });

  test('should edit card when clicked', async () => {
    const node = document.createElement('div');
    node.setAttribute('id', 'app');
    document.body.appendChild(node);

    const app = document.createElement('div');
    app.setAttribute('data-app', true);
    document.body.append(app);

    const wrapper = mount(List, {
      attachTo: '#app',
      vuetify,
      propsData: {
        list: {
          id: 0,
          title: 'title',
          cards: [{ id: 0, text: 'To be edited' }]
        }
      }
    });

    const card = wrapper
      .findAllComponents({ name: 'Card' })
      .filter(c => {
        return c
          .html()
          .toLowerCase()
          .includes('to be edited');
      })
      .at(0);

    expect(card.html()).toContain('To be edited');

    await card.trigger('click');

    const input = wrapper.find('textarea');
    input.element.value = 'Successfully edited';
    input.trigger('input');

    expect(wrapper.vm.list.cards.slice(-1)[0].text).toBe('Successfully edited');
    wrapper.destroy();
  });
});
