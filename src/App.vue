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
