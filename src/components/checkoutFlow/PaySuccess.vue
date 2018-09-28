<template>
<div class="paySuccess">

  <img src="static/image/lg-付款成功.svg" alt="">
  <div class="continue">
    繼續逛逛
  </div>
</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../mixin';

.paySuccess {
    @include bannerStyle;
    background-image: url("../../../static/image/paySuccess.jpg");
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
img {
    width: 190px;
    margin-bottom: 50px;
}
.continue {
    padding: 16px 102px;
    background-color: #FFE180;
    @include pStyle(#3F5D45,24px);
    display: inline-block;
    cursor: pointer;
}
</style>
