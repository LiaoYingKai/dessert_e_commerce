<template>
<div class="shoppingCart">
  <PaySuccess />
</div>
</template>

<script>
import PaySuccess from '@/components/PaySuccess'
export default {
  components: {
    PaySuccess
  }
}
</script>

<style lang="scss" scoped>
.shoppingCart {
    padding: 0 42px 30px;
}
</style>
