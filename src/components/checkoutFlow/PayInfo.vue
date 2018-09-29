<template>
<div class="payInfo">
  <div class="content">
    <div class="title">
      付款
    </div>
    <div class="creditCardNumber">
      信用卡卡號<br>
      <input type="text" placeholder="9012-3456-7890-1234">
    </div>
    <div class="creditCardName">
      持卡人姓名<br>
      <div class="firstName">
        <input type="text" placeholder="王">
      </div>
      <div class="lastName">
        <input type="text" placeholder="小明">
      </div>
    </div>
    <div class="creditCardValidityPeriod">
      有效期限<br>
      <div class="month">
        <input type="text" placeholder="月">
      </div>
      <div class="day">
        <input type="text" placeholder="年">
      </div>
    </div>
    <div class="creditCardLastThirdNumber">
      後面末三碼<br>
      <input type="text" placeholder="123">
    </div>
  </div>
  <div class="nextButton">
    下一步
  </div>
</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped="">
@import '../mixin';
.payInfo {
    width: 460px;
}
.content {
    @include payContentStyle();
    @include pStyle(#EAF0ED,20px);
}
.title {
    font-size: 36px;
    margin-bottom: 30px;
}

input {
    @include inputStyle();
}
.creditCardLastThirdNumber,
.day,
.firstName,
.lastName,
.month {
    display: inline-block;
    width: 49%;
}
.day,
.lastName {
    margin-left: 2px;
}

.nextButton {
    @include nextButtonStyle();
}
</style>
