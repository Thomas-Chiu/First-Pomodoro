<template lang='pug'>
  #app
    #nav
      router-link(to='/') Home
      span  |
      router-link(to='/list')  List
      span  |
      router-link(to='/settings')  Settings
    //- keeo-alive 很重要，切換分頁時仍繼續執行倒數動作
    keep-alive
      router-view

</template>

<style lang="stylus">
body
  background #999
#app
  // font-family Avenir, Helvetica, Arial, sans-serif
  text-align center
  color #2c3e50
  margin-top 60px
  a
    font-size 1.3rem
    color #000
    &:hover
      color tomato
</style>
