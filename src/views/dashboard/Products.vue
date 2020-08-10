<template>
  <div class="products">
    <loading :active.sync="isLoading"></loading>
    <h2>後台產品列表管理</h2>
    <table>
      <tr v-for="item in products" :key="item.key">
        <td> {{item.title}} </td>
        <td> {{item.origin_price}} </td>
        <td> <button type="button" @click="goPage(item)">進入頁面</button> </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      isLoading: false,
    };
  },
  methods: {
    goPage(item) {
      console.log(this.$route);
      this.$router.push(`/admin/product/${item.id}`);
    },
  },
  created() {
    this.isLoading = true;
    console.log('UUID', process.env.VUE_APP_UUID);
    this.$http.get(`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        console.log(res);
        this.products = res.data.data;
        this.isLoading = false;
      });
  },
};
</script>
