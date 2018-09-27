<template>
<div class="shoppingCart">
  <div class="typesetting">
    <YourShoppingCart/>
    <OrderSummery/>
  </div>
  <!-- <PaySuccess /> -->
</div>
</template>

<script>
import PaySuccess from '@/components/PaySuccess'
import YourShoppingCart from '@/components/YourShoppingCart'
import OrderSummery from '@/components/OrderSummery'

export default {
  components: {
    PaySuccess,
    YourShoppingCart,
    OrderSummery
  }
}
</script>

<style lang="scss" scoped>
.shoppingCart {
    padding: 0 42px 30px;
}
.typesetting {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
</style>
