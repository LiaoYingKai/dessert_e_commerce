<template>
<div class="homePage">
  <div class="banner">
  </div>
  <div class="filterBar">
    <div class="filterItem" v-for="item in filterBar">
      {{item}}
    </div>
  </div>
  <div class="homePageContent">
    <img src="static/image/1.jpg" alt="" class="matchingImage">
    <div class="context">
      青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
      <br>
      <br> 是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
    </div>
    <img src="static/image/lg-為什麼選擇了做甜點.svg" alt="" class="title">
  </div>
  <div class="homePageContent">
    <div class="context">
      青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
      <br>
      <br> 是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
    </div>
    <img src="static/image/lg-為什麼一定要吃甜點.svg" class='title'>
    <img src="static/image/2.jpg" class="matchingImage">
  </div>
  <div class="slogan">
    <img src="static/image/lg-想吃甜點是不需要理由的.svg" alt="" class="title">
  </div>
  <div class="productList">
    <Product v-for="item in 3">
    </Product>
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
      filterBar: ['本日精選', '人氣推薦', '新品上市']
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'mixin';
.homePage {
    padding: 0 42px;
}
.banner {
    @include bannerStyle;
    background-image: url("../../static/image/banner1.jpg");
}
.filterBar {
    display: flex;
    justify-content: center;
    position: relative;
    top: -60px;
    .filterItem {
        cursor: pointer;
        background-color: #3F5D45;
        opacity: 0.8;
        -webkit-writing-mode: vertical-lr;
        padding: 60px 110px;
        @include pStyle(#fff,24px);
        line-height: 1;
        &:hover {
            color: #3F5D45;
        }
        &:hover {
            opacity: 0.8;
            background-color: #FFE180;
        }
    }
}
.homePageContent {
    padding: 0 42px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: 460px;
    background-image: linear-gradient(to bottom , #fff 20px,#EAF0ED 20px, #EAF0ED 440px , #fff 440px);
    margin-bottom: 60px;
    .matchingImage {
        width: 460px;
        height: 460px;
    }
    .context {
        font-size: 16px;
        font-family: sans-serif;
        color: #8DA291;
        -webkit-writing-mode: vertical-rl;
        align-self: center;
        word-break: break-all;
        height: 300px;
        line-height: 2.5;
    }
    .title {
        width: 90px;
        height: auto;
    }
}
.slogan {
    text-align: center;
    margin-bottom: 60px;
    img {
        width: 90px;
        height: auto;
    }
}
.productList {
    margin-bottom: 60px;
    display: flex;
    justify-content: space-between;
}
</style>
