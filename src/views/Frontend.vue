<template>
  <div>
    <div id="nav">
        <router-link to="/home">首頁</router-link> |
        <router-link to="/about">關於 Partner Cat</router-link> |
        <router-link to="/products">產品列表</router-link> |
        <router-link to="/cart">購物車</router-link>
    </div>
    <hr />
    <router-view/>
  </div>
</template>
