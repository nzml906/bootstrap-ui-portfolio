import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from '../components/index.vue';
import Nav from '../components/nav.vue';
import CallToAction from '../components/call-to-action.vue';
import Contacts from '../components/contacts.vue';
import Contents from '../components/contents.vue';
import Features from '../components/features.vue';
import Footers from '../components/footers.vue';
import Forms from '../components/forms.vue';
import Headers from '../components/headers.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    components: { default: Index, header: Nav }
  },

  {
    path: '/call-to-action',
    name: 'call-to-action',
    components: { default: CallToAction, header: Nav }
  },

  {
    path: '/contacts',
    name: 'contacts',
    components: { default: Contacts, header: Nav }
  },

  {
    path: '/contents',
    name: 'contents',
    components: { default: Contents, header: Nav }
  },

  {
    path: '/features',
    name: 'features',
    components: { default: Features, header: Nav }
  },

  {
    path: '/footers',
    name: 'footers',
    components: { default: Footers, header: Nav }
  },

  {
    path: '/forms',
    name: 'forms',
    components: { default: Forms, header: Nav }
  },

  {
    path: '/headers',
    name: 'headers',
    components: { default: Headers, header: Nav }
  }
];

const router = new VueRouter({
  routes
});

export default router;
