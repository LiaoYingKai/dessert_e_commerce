<template>
<div class="login">
  <div class="oweselfnLogin">
    <div class="title">
      <span>——</span>會員登入<span>——</span>
    </div>
    <div class="account">
      <input type="text" placeholder="電子信箱/手機號碼">
    </div>
    <div class="password">
      <input type="text" placeholder="請輸入使用者密碼">
    </div>
    <div class="rememberMe">
      <input type="checkbox"> 記住我
    </div>
    <div class="loginButton">
      登入帳號
    </div>
  </div>
  <div class="thirdPartyLogin">
    <div class="title">
      <span>——</span> 連結社群帳號 <span>——</span>
    </div>
    <div class="thirdPart" v-for="item in thirdParts">
      {{item}}
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      thirdParts: ['facebook', 'Google', 'YAHOO!']
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'mixin';
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    min-height: 390px;
}
.oweselfnLogin {
    @include loginBox;
    .title {
        padding: 40px 0;
        text-align: center;
    }
    .account {}
    .password {}
    .rememberMe {}
    .loginButton {
        width: 100%;
        padding: 16px 0;
        background-color: #FFE180;
        text-align: center;
    }
}
.thirdPartyLogin {
    @include loginBox;
    text-align: center;
    padding: 40px 30px;
    .thirdPart {
        box-sizing: border-box;
        width: 330px;
        padding: 18px 0;
        text-align: center;
        background-color: #FFFFFF;
        color: #8DA291;
    }
}
</style>
