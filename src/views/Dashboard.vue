<template>
  <div>
    <div id="nav">
      <router-link to="/admin/coupons">優惠券列表</router-link> |
      <router-link to="/admin/orders">訂單列表</router-link> |
      <router-link to="/admin/products">產品列表</router-link> |
      <router-link to="/admin/pictures">圖片儲存列表</router-link>
    </div>
    <hr />
    <router-view />
  </div>
</template>
