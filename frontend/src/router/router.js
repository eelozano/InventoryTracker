import Vue from 'vue';
import VueRouter from 'vue-router';
import InventoryList from '@/views/InventoryList.vue';
import PartyList from '@/views/PartyList.vue';
import Item from '@/views/Item.vue';
import PlayerInventory from '@/views/PlayerInventory.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PartyList,
  },
  {
    path: '/items',
    name: 'Items',
    component: InventoryList,
  },
  {
    path: '/items/:id',
    name: 'Item',
    component: Item,
    props: true,
  },
  {
    path: '/party',
    name: 'Party',
    component: PartyList,
  },
  {
    path: '/party/:playerID',
    name: 'Inventory',
    component: PlayerInventory,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
