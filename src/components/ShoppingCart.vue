<template>
<div class="shoppingCart">
  <div class="typesetting">
    <!-- <YourShoppingCart/> -->
    <Transport/>
    <div class="ShoppingInfoTag">
      <!-- <OrderSummery /> -->
      <ShoppingTag/>
    </div>
  </div>
  <!-- <PaySuccess /> -->
</div>
</template>

<script>
import PaySuccess from '@/components/checkoutFlow/PaySuccess'
import YourShoppingCart from '@/components/checkoutFlow/YourShoppingCart'
import OrderSummery from '@/components/checkoutFlow/OrderSummery'
import Transport from '@/components/checkoutFlow/Transport'
import ShoppingTag from '@/components/checkoutFlow/ShoppingTag'


export default {
  components: {
    PaySuccess,
    YourShoppingCart,
    OrderSummery,
    Transport,
    ShoppingTag
  }
}
</script>

<style lang="scss" scoped>
.shoppingCart {
    padding: 0 42px 30px;
}
.typesetting {
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
.ShoppingInfoTag {
    margin-left: 20px;
}
</style>
