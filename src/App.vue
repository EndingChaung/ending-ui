<template lang="pug">
  #app kkkkk
    end-switch
    end-button
</template>

<script>
import EndSwitch from '../EndingUi/packages/switch/index';
import EndButton from '../EndingUi/packages/button/index';

export default {
  name: 'app',
  components: {
    EndSwitch,
    EndButton,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
h1, h2
  font-weight normal
ul
  list-style-type none
  padding 0
li
  display inline-block
  margin 0 10px
a
  color #42b983
</style>
