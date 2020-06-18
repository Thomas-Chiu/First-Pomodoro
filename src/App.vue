<template lang='pug'>
  #app
    b-navbar(id="nav")
      router-link(to='/')
        font-awesome-icon(:icon="['fab', 'android']")
      span  |
      router-link(to='/list')
        font-awesome-icon(:icon="['fas', 'stream']")
      span  |
      router-link(to='/')
        font-awesome-icon(:icon="['far', 'plus-square']")
      span  |
      router-link(to='/report')
        font-awesome-icon(:icon="['fas', 'chart-bar']")
      span  |
      router-link(to='/setting')
        font-awesome-icon(:icon="['fas', 'cog']")
    //- keeo-alive 很重要，切換分頁時仍繼續執行倒數動作
    keep-alive
      router-view
</template>
