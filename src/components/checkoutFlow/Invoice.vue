<template>
<div class="invoice">
  <div class="content">
    <div class="title">
      發票
    </div>
    <div class="invoiceTypeButton">
      <div class="electonicInvoice " :class="{ buttonBackground:isElectionInvoice}" @click="useElectonic">
        電子發票
      </div>
      <div class="mailingInvoice" :class="{ buttonBackground:!isElectionInvoice}" @click="useMailing">
        郵寄發票
      </div>
    </div>
    <div class="" v-if="isElectionInvoice">
      <div class="email">
        電子郵件信箱
        <input type="text" placeholder="example@email.com">
      </div>
      <div class="uniformNumbers">
        統一編號（選填）
        <input type="text" placeholder="12346578">
      </div>
    </div>
    <div class="" v-else>
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
      <div class="uniformNumbers">
        統一編號（選填）
        <input type="text" placeholder="12346578">
      </div>
    </div>
  </div>
  <div class="nextButton">
    確認結帳
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      isElectionInvoice: true
    }
  },
  methods: {
    useElectonic: function() {
      this.isElectionInvoice = true
    },
    useMailing: function() {
      this.isElectionInvoice = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../mixin';
.invoice {
    width: 460px;
}
.content {
    @include payContentStyle();
}
.title {
    margin-bottom: 30px;
    font-size: 36px;
}
.invoiceTypeButton {
    display: flex;
    border: 1px solid #EAF0ED;
    box-sizing: border-box;
    margin-bottom: 30px;
}
.electonicInvoice,
.mailingInvoice {
    box-sizing: border-box;
    padding: 13px 54px;
    cursor: pointer;
}
.mailingInvoice {
    margin-left: 2px;
}
.buttonBackground {
    background-color: #EAF0ED;
    color: #3F5D45;
}
input {
    @include inputStyle;
}
.email,
.uniformNumbers {
    margin-top: 16px;
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
