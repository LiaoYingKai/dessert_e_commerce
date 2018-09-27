<template>
<div class="product">
  <div class="productImage">
    <div class="productTag">
      本日精選
    </div>
    <img src="static/image/baseline-favorite_border-24px.svg" alt="">
  </div>
  <div class="productInfo">
    <div class="name">
      焦糖馬卡龍
    </div>
    <div class="price">
      NT$ 450
    </div>
  </div>
  <div class="addShoppingCart">
    加入購物車
  </div>
</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import 'mixin';
.product {
    width: 300px;
}
.productImage {
    width: 300px;
    height: 315px;
    background-position: center;
    background-size: cover;
    background-image: url("../../static/image/1.jpg");
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .productTag {
        @include pStyle(#EAF0ED,16px);
        background-color: #3F5D45;
        padding: 10px;
        display: inline-block;
        -webkit-writing-mode: vertical-lr;
        line-height: 1;
        margin-left: 20px;
    }
    img {
        margin: 20px 20px 0 0;
    }
}
.productInfo {
    display: flex;
    .name {
        border: 1px #EAF0ED solid;
        @include pStyle(#3F5D45,20px);
        padding: 14px 33px;
    }
    .price {
        border: 1px #EAF0ED solid;
        border-left: 0;
        @include pStyle(#3F5D45,20px);
        font-weight: bold;
        padding: 14px 27px;
    }
}

.addShoppingCart {
    @include pStyle(#3F5D45,24px);
    padding: 16px 90px;
    cursor: pointer;
    background-color: #EAF0ED;
}
</style>
