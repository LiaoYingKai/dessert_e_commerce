<template>
<div class="shoppingTag">
  <div class="orderSummery">
    <div class="title">
      訂單摘要
    </div>
    <div class="content" v-for="(item,index) in info" :key='index'>
      <span>{{item.text}}</span><span>NT$ {{item.price}}</span>
    </div>
  </div>
  <div class="shoppingList">
    <div class="title">
      購物清單
    </div>
    <div class="content" v-for="(item,index) in info" :key='index'>
      <img src="static/image/1.jpg">
      <div class="productInfo">
        <p>焦糖馬卡龍</p>
        <p>NT$ 900</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      info: [{
        text: '小計',
        price: '2,700'
      }, {
        text: '運費',
        price: '300'
      }, {
        text: '總計',
        price: '3000'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../mixin';
.shoppingTag {
    width: 300px;
    text-align: center;
}
.orderSummery {
    border: 1px #EAF0ED solid;
    .content:last-child {
        font-size: 20px;
        color: #8DA291;
    }
}
.title {
    padding: 16px 0;
    @include pStyle(#8DA291,24px);
    background-color: #EAF0ED;
}
.content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include pStyle(#8DA291,16px);
    margin: 16px;
}
.shoppingList {
    border: 1px #EAF0ED solid;
    margin-top: 20px;
    .content {
        justify-content: flex-start;
        text-align: left;
    }
    img {
        margin-right: 20px;
        width: 120px;
        height: 80px;
    }
    .productInfo {
        p {
            @include pStyle(#8DA291,16px);
            &:nth-child(2) {
                font-size: 20px;
                color: #8DA291;
            }
        }
    }
}
</style>
