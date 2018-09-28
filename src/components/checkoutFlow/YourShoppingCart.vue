<template>
<div class="yourShoppingCart">
  <div class="title">
    您的購物車
  </div>
  <div class="shoppingList" v-for="item in 3" :key='item'>
    <div class="productInfo">
      <img src="static/image/1.jpg" class="image">
      <div class="info">
        <div class="name">
          焦糖馬卡龍
        </div>
        <div class="price">
          NT$ 450
        </div>
      </div>
      <el-input-number v-model="num1" min="1"></el-input-number>
      <div class="subTitle">
        NT$ 900
      </div>
      <img src="static/image/baseline-delete_outline-24px.svg">
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../mixin';
.yourShoppingCart {
    width: 620px;
}
.title {
    height: 100%;
    text-align: center;
    background-color: #EAF0ED;
    @include pStyle(#3F5D45,24px);
    padding: 16px 0;
}
.productInfo {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #EAF0ED;
    .image {
        width: 110px;
        height: 110px;
    }
    .info {
        @include pStyle(#3F5D45,20px);
    }
    .subTitle {
        @include pStyle(#3F5D45,20px);
    }
}
</style>
