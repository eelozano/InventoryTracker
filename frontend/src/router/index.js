import Vue from 'vue';
import VueRouter from 'vue-router';
import InventoryList from '@/components/InventoryList.vue';
import Item from '@/views/Item.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/items',
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
    path: '/',
    name: 'About',
    component: InventoryList,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
