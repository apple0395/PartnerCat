<template>
  <div class="product">
    <loading :active.sync="isLoading"></loading>
    <h2>單一產品資訊(後台)</h2>
  </div>
</template>

<script>

export default {
  data() {
    return {
      product: {},
      isLoading: false,
    };
  },
  created() {
    this.isLoading = true;
    console.log('id', this.$route.params.id);
    const { id } = this.$route.params;
    this.$http.get(`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then((res) => {
        console.log(res);
        this.product = res.data.data;
        this.isLoading = false;
      });
  },
};
</script>
