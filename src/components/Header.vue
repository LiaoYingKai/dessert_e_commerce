<template>
<div class="header">
  <div class="logo">
    <img src="static/image/logo-all-dark.svg" alt="">
  </div>
  <div class="navBar">
    <ul>
      <li>
        <router-link :to="{ name: 'HomePage', params: {} }">
          首頁
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'DessertPage', params: {} }">
          甜點
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Login', params: {} }">
          登入
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'ShoppingCart', params: {} }">
          <img src="static/image/baseline-shopping_cart-24px.svg" alt="">
        </router-link>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import 'mixin';
.header {
    width: 100%;
    box-sizing: border-box;
    padding: 30px 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo {
    img {
        width: auto;
        height: 40px;
    }
}
ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    li {
        margin-left: 60px;
        a {
            text-decoration: none;
            @include pStyle(#3F5D45,16px);
        }
    }
}
</style>
