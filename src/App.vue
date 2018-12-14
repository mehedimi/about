<template>
  <div id="app">
    <Navbar></Navbar>
    <transition enter-active-class="animated fadeIn">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Asap:400,600');
  *{
    font-family: 'Asap', sans-serif !important;
  }
  body{
    background-color: rgba(17, 17, 19, 0.02);
  }
  .container{
    margin: auto;
  }
  .text-decoration-none{
    text-decoration: none;
  }
  .m-0{
    margin: 0;
  }
  .mb-2{
    margin-bottom: 2em;
  }

  .is-full{
    width: 100%;
  }
  .is-text-upper{
    text-transform: uppercase;
  }
  .is-text-lower{
    text-transform: lowercase;
  }
  @media (max-width: 1366px) and (min-width: 980px) {
    .container{
      max-width: 1000px;
    }
  }
  @media (min-width: 1367px) {
    .container{
      max-width: 1366px;
    }
  }

</style>