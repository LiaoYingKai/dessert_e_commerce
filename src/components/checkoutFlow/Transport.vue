<template>
<div class="transport">
  <div class="content">
    <div class="title">
      運送
    </div>
    <div class="name">
      <div class="firstName">
        姓氏<br>
        <input type="text" placeholder="王">
      </div>
      <div class="lastName">
        名字<br>
        <input type="text" placeholder="小明">
      </div>
    </div>
    <div class="phone">
      電話<br>
      <input type="text" placeholder="0912-345-678">
    </div>
    <div class="address">
      地址<br>
      <div class="city">
        <input type="text" placeholder="高雄市">
      </div>
      <div class="area">
        <input type="text" placeholder="新興區">
      </div>
      <div class="road">
        <input type="text" placeholder="幸福路 520 號">
      </div>
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

<style lang="scss" scoped>
@import '../mixin';
.transport {
    width: 460px;
}
.content {
    @include payContentStyle();
}
.title {
    font-size: 36px;
    margin-bottom: 30px;
}
.firstName,
.lastName {
    width: 49%;
    display: inline-block;
}
.name {
    display: flex;
    .lastName {
        margin-left: 8px;
    }
}

input {
    @include inputStyle();
}

.area,
.city {
    width: 49%;
    display: inline-block;
}
.area {
    margin-left: 2px;
}

.nextButton {
    @include nextButtonStyle();
}
</style>
