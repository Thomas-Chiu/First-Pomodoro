<template lang="pug">
  #report(class="container h-100")
    .row(class="h-100")
      WCartesian(:dataset="chartData" responsive)
        WLine(curve dot datakey="one")
        WLine(curve dot datakey="two")
        WXAxis(datakey="name")
        WYAxis
</template>

<script>
export default {
  name: 'Report',
  data () {
    return {
      chartData: [ // pending：這邊chart 的value 要設周一到周日的變數(每天完成的番茄數)，圖表才會自動更新
        { name: 'Mon', one: 5 },
        { name: 'Tue', one: 12 },
        { name: 'Wed', one: 8 },
        { name: 'Thu', one: 6 },
        { name: 'Fri', one: 9 },
        { name: 'Sat', one: 15 },
        { name: 'Sun', one: 2 }
      ]
    }
  }
}
</script>
