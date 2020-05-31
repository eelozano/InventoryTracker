import Vue from 'vue';
import Vuex from 'vuex';
import EventService from '@/services/EventService.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    itemList: [],
    item: [],
    peopleList: [],
    player: {},
    playerInventory: [],
  },
  mutations: {
    SET_ITEMS(state, itemsPayload) {
      state.itemList = itemsPayload;
    },
    SET_ITEM(state, itemPayload) {
      state.item = itemPayload;
    },
    SET_PEOPLE(state, peoplePayload) {
      state.peopleList = peoplePayload;
    },
    SET_PLAYER(state, playerPayload) {
      state.player = playerPayload;
    },
    SET_INVENTORY(state, inventoryPayload) {
      state.playerInventory.push(inventoryPayload);
    },
  },
  actions: {
    fetchItems({ commit }) {
      EventService.getItems()
        .then((response) => {
          commit('SET_ITEMS', response.data);
        })
        .catch((error) => {
          console.log('There was an error: ', error.response);
        });
    },
    fetchItem({ commit }, id) {
      EventService.getItem(id)
        .then((response) => {
          commit('SET_ITEM', response.data);
        })
        .catch((error) => {
          console.log('There was an error: ', error.response);
        });
    },
    fetchPeople({ commit }) {
      EventService.getPeople()
        .then((response) => {
          commit('SET_PEOPLE', response.data);
        })
        .catch((error) => {
          console.log('There was an error: ', error.response);
        });
    },
    fetchPerson({ commit }, playerID) {
      EventService.getPerson(playerID)
        .then((response) => {
          commit('SET_PLAYER', response.data);
        })
        .catch((error) => {
          console.log('There was an error: ', error.response);
        });
    },
    fetchInventory({ commit }, inventory) {
      inventory.forEach((item) => {
        EventService.getItem(item.id)
          .then((response) => {
            commit('SET_INVENTORY', response.data);
          })
          .catch((error) => {
            console.log('There was an error: ', error.response);
          });
      });
    },
  },

  getters: {},
});
