<template>
<div class="orderSummery">
  <div class="summery">
    <div class="title">
      訂單摘要
    </div>
    <div class="info" v-for="(item,index) in info" :key='index'>
      <span>{{item.text}}</span><span>NT$ {{item.price}}</span>
    </div>
  </div>
  <div class="checkout">
    結帳
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
.orderSummery {
    width: 300px;
    background-color: #3F5D45;
}
.summery {
    padding: 0 18px;
    .title {
        text-align: center;
        padding: 16px 0;
        height: 100%;
        @include pStyle(#EAF0ED,24px);
        border-bottom: 2px solid #EAF0ED;
    }
    .info {
        display: flex;
        justify-content: space-between;
        @include pStyle(#EAF0ED,16px);
        margin: 8px 0;

        &:last-child {
            @include pStyle(#EAF0ED,24px);
            margin: 16px 0;
        }
        &:first-child {
            margin-top: 16px 0;
        }
    }
}
.checkout {
    text-align: center;
    @include pStyle(#3F5D45,24px);
    background-color: #FFE180;
    height: 100%;
    padding: 16px 0;
    cursor: pointer;
}
</style>
