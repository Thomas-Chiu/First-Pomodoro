<template lang="pug">
  #home
    hr
    h3 {{ currentText }}
    h4 {{ timeText }}
    //- 根據狀態碼來判斷顯示哪些按鈕
    b-btn(v-if="status != 1" @click="start")
      font-awesome-icon(:icon="['fas', 'play']")
    b-btn(v-if="status == 1" @click="pause")
      font-awesome-icon(:icon="['fas', 'pause']")
    b-btn(v-if="todos.length > 0" @click="finish(true)")
      font-awesome-icon(:icon="['fas', 'step-forward']")
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      status: 0, // 定義狀態碼 0 = 停止、1 = 播放、2 = 暫停
      timer: 0
    }
  },
  computed: {
    currentText () { // current.length > 0 代表字串裡有文字
      return this.current.length > 0 ? this.current : this.todos.length > 0 ? 'Click to start.' : 'All done.'
    },
    timeText () {
      const min = Math.floor(this.timeLeft / 60)
      const sec = Math.floor(this.timeLeft % 60)
      return `${min} : ${sec}`
    },
    timeLeft () {
      return this.$store.getters.timeLeft
    },
    current () {
      return this.$store.getters.current
    },
    todos () {
      return this.$store.getters.todos
    },
    alarm () {
      return this.$store.getters.alarm
    }
  },
  methods: {
    start () {
      if (this.status === 2) { // 若暫停後繼續
        this.status = 1
        this.timer = setInterval(() => {
          this.$store.commit('countdown')
          if (this.timeLeft <= 0) this.finish(false) // 用finish(bool) 判斷是否播alarm 音效
        }, 1000)
      } else { // 開始新倒數
        if (this.todos.length > 0) {
          this.$store.commit('start')
          this.status = 1
          this.timer = setInterval(() => {
            this.$store.commit('countdown')
            if (this.timeLeft <= 0) this.finish(false)
          }, 1000)
        }
      }
    },
    pause () {
      clearInterval(this.timer)
      this.status = 2
    },
    finish (bool) {
      clearInterval(this.timer)
      this.status = 0
      this.$store.commit('finish')
      if (!bool) { // 這邊不清楚要問
        const audio = new Audio()
        audio.src = './alarms/' + this.alarm
        audio.play()
      } if (this.todos.length > 0) {
        this.start()
      } else {
        setTimeout(() => { // 先有鬧鈴聲再alert
          alert("You're all done!")
        }, 500)
      }
    }
  }
}
</script>
