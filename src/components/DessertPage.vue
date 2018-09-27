<template>
<div class="products">
  <div class="banner">
  </div>
  <div class="productList">
    <div class="menu">
      <div class="title">
        甜點類別
      </div>
      <div class="kind" v-for="item in kind" :key='item'>
        {{item}}
      </div>
    </div>
    <div class="list">
      <Product v-for="item in 6" class="productBlank" :key='item'></Product>
    </div>
  </div>
  <div class="pageNumber">
    <div class="numberStyle">
      <img src="static/image/baseline-arrow_left-24px.svg" alt="">
    </div>
    <div class="numberStyle" v-for="item in 3" :key='item'>
      {{item}}
    </div>
    <div class="numberStyle">
      <img src="static/image/baseline-arrow_right-24px.svg" alt="">
    </div>
  </div>
</div>
</template>

<script>
import Product from '@/components/Product'
export default {
  components: {
    Product
  },
  data() {
    return {
      kind: ['所有甜點', '本日精選', '人氣推薦', '新品上市']
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'mixin';
.products {
    text-align: right;
    padding: 0 42px;
}
.banner {
    @include bannerStyle;
    background-image: url("../../static/image/banner2.jpg");
}
.productList {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
.menu {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    .title {
        @include pStyle(#EAF0ED,24px);
        background-color: #3F5D45;
        padding: 16px 102px;
    }
    .kind {
        @include pStyle(#3F5D45,24px);
        border: 1px solid #EAF0ED;
        border-bottom: 0;
        padding: 16px 101px;

        cursor: pointer;
        &:hover {
            background-color: #EAF0E0;
        }
        &:last-child {
            border-bottom: 1px solid #EAF0ED;
        }
    }
}
.list {
    display: flex;
    flex-wrap: wrap;
    width: 620px;
    justify-content: space-between;
    .productBlank {
        margin-bottom: 20px;
    }
}
.pageNumber {
    display: inline-block;
    font-size: 0;
    margin-bottom: 60px;
    .numberStyle {
        display: inline-block;
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        @include pStyle(#3F5D45,16px);
        background-color: #EAF0ED;
        img {
            vertical-align: middle;
            &::after {
                content: '';
                height: 100%;
                display: inline-block;
                vertical-align: middle;
            }
        }
        &:hover {
            background-color: #3F5D45;
            @include pStyle(#fff,16px)
        }
    }
}
</style>
