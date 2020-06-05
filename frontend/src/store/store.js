import Vue from 'vue';
import Vuex from 'vuex';
import EventService from '@/services/EventService.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    itemList: [],
    item: {},
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
    ADD_ITEM(state, itemPayload) {
      state.itemList.push(itemPayload);
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
    CLEAR_INVENTORY(state) {
      state.playerInventory = [];
    },
  },
  actions: {
    fetchItems({ commit }) {
      return new Promise((resolve, reject) => {
        EventService.getItems()
          .then((response) => {
            commit('SET_ITEMS', response.data);
            resolve();
          })
          .catch((error) => {
            console.log('There was an error: ', error.response);
            reject();
          });
      });
    },
    fetchItem({ commit }, id) {
      return new Promise((resolve, reject) => {
        EventService.getItem(id)
          .then((response) => {
            commit('SET_ITEM', response.data);
            resolve();
          })
          .catch((error) => {
            console.log('There was an error: ', error.response);
            reject();
          });
      });
    },
    createItem({ commit }, item) {
      return new Promise((resolve, reject) => {
        EventService.postItem(item)
          .then(() => {
            commit('ADD_ITEM', item);
            resolve();
          })
          .catch((error) => {
            console.log('There was an error: ', error);
            reject();
          });
      });
    },
    fetchPeople({ commit }) {
      return new Promise((resolve, reject) => {
        EventService.getPeople()
          .then((response) => {
            commit('SET_PEOPLE', response.data);
            resolve();
          })
          .catch((error) => {
            console.log('There was an error: ', error.response);
            reject();
          });
      });
    },
    fetchPerson({ commit }, playerID) {
      return new Promise((resolve, reject) => {
        EventService.getPerson(playerID)
          .then((response) => {
            commit('SET_PLAYER', response.data);
            resolve();
          })
          .catch((error) => {
            console.log('There was an error: ', error.response);
            reject();
          });
      });
    },
    fetchInventory({ commit }, inventory) {
      return new Promise((resolve, reject) => {
        inventory.forEach((item) => {
          EventService.getItem(item.id)
            .then((response) => {
              commit('SET_INVENTORY', response.data);
              resolve();
            })
            .catch((error) => {
              console.log('There was an error: ', error.response);
              reject();
            });
        });
      });
    },
  },

  getters: {},
});
