<template>
<div class="footer">
  <div class="emailFooter">
    <img src="static/image/logo-light.svg" alt="">
    <span>訂閱你我的甜蜜郵件</span>
    <div class="goEmail">
      <img src="static/image/baseline-email-24px.svg" alt="">
      <div class="arrow">
        <img src="static/image/baseline-arrow_forward-24px.svg" alt="">
      </div>
    </div>
  </div>
  <div class="contactInfoFooter">
    <div class="footerCompanyInfo">
      <div class="footerCompanyAddress">
        <img src="static/image/logotype.svg" alt="">
        <p>07-1234-5678<br>sweetaste@email.com<br>800高雄市新興區幸福路520號</p>
      </div>
      <img src="static/image/sm-今天是個吃甜點的好日子.svg" alt="">
    </div>
    <div class="footerCompanyWebInfo">
      <div class="footerIcon">
        <img src="static/image/ic-line@.svg">
        <img src="static/image/ic-facebook.svg">
      </div>
      <div class="footerSlogan">
        <span>©2018 Sweetaste* All Rights Reserved</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import 'minix';
.footer {
    width: 100%;
}
.emailFooter {
    height: 30px;
    padding: 30px 126px;
    background-color: #3F5D45;
    display: flex;
    align-items: center;
    img {
        width: 40px;
        margin-right: 20px;

    }
    span {
        font-size: 24px;
        font-family: sans-serif;
        margin: 0;
        color: #EAF0ED;
    }
    .goEmail {
        width: 380px;
        background-color: #EAF0ED;
        display: flex;
        justify-content: space-between;
        margin-left: 115px;
        img {
            width: 24px;
            margin: 12px;
        }
        .arrow {
            display: inline-block;
            background-color: #FFE180;
        }
    }
}

.contactInfoFooter {
    padding: 30px 126px;
    background-color: #EAF0ED;
}
.footerCompanyInfo {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    img {
        height: 221px;
    }
}
.footerCompanyAddress {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    img {
        height: auto;
    }
    p {
        @include pStyle;
    }
}
.footerCompanyWebInfo {
    display: flex;
    justify-content: space-between;
}
.footerIcon {
    img {
        height: 32px;
        width: 32px;
    }
}
.footerSlogan {
    span {
        @include pStyle;
    }
    &::before {
        content: '';
        width: 0;
        height: 100%;
        display: inline-block;
    }
}
</style>
