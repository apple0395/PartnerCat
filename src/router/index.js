import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/Frontend.vue'),
    children: [
      {
        path: 'home',
        component: () => import('../views/frontend/Home.vue'),
      },
      {
        path: 'about',
        component: () => import('../views/frontend/About.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/frontend/Products.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../views/frontend/Product.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/frontend/ShoppingCart.vue'),
      },
      {
        path: 'cart/checkout',
        component: () => import('../views/frontend/Checkout.vue'),
      },
      {
        path: 'cart/checkover',
        component: () => import('../views/frontend/CheckoutOver.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/dashboard/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'coupons',
        component: () => import('../views/dashboard/Coupons.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/dashboard/Products.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../views/dashboard/Product.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/dashboard/Orders.vue'),
      },
      {
        path: 'pictures',
        component: () => import('../views/dashboard/PicManagement.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
