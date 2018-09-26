<template>
<div id="app">
  <Header/>
  <router-view class="minHeight" />
  <Footer/>
</div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
body {
  margin: 0;
}

body::-webkit-scrollbar {
  display: none
}


#app {
  margin: 0 auto;
  width: 1024px;
}


.minHeight {
  min-height: calc(100vh - 541px)
}
</style>
