<template>
  <div id="home">
    <h1>{{ currentText }}</h1>
    <h2>{{ timeText }}</h2>
    <b-btn variant="info" v-if="status != 1" @click="start">
      <!-- 根據狀態碼來判斷顯示哪些按鈕 -->
      <font-awesome-icon :icon="['fas', 'play']"></font-awesome-icon>
    </b-btn>
    <b-btn variant="info" v-if="status == 1" @click="pause">
      <font-awesome-icon :icon="['fas', 'pause']"></font-awesome-icon>
    </b-btn>
    <b-btn variant="info" v-if="current.length > 0 || todos.length > 0" @click="finish(true)">
      <font-awesome-icon :icon="['fas', 'step-forward']"></font-awesome-icon>
    </b-btn>
  </div>
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
    currentText () {
      return this.current.length > 0 ? this.current : this.todos.length > 0 ? '點擊開始' : '無事項'
    },
    timeText () {
      const min = Math.floor(this.timeLeft / 60)
      const sec = Math.floor(this.timeLeft % 60)
      return `${min}：${sec}`
    },
    alarm () {
      return this.$store.getters.alarm
    },
    timeLeft () {
      return this.$store.getters.timeLeft
    },
    current () {
      return this.$store.getters.current
    },
    todos () {
      return this.$store.getters.todos
    }
  },
  methods: {
    start () {
      if (this.status === 2) { // 暫停後繼續
        this.status = 1
        this.timer = setInterval(() => {
          this.$store.commit('countdown')
          if (this.timeLeft <= 0) {
            this.finish(false) // finish(用true false 來判斷要不要播音樂)
          }
        }, 1000)
      } else { // 開始新倒數
        if (this.todos.length > 0) {
          this.$store.commit('start')
          this.status = 1
          this.timer = setInterval(() => {
            this.$store.commit('countdown')
            if (this.timeLeft <= 0) {
              this.finish(false)
            }
          }, 1000)
        }
      }
    },
    finish (skip) {
      clearInterval(this.timer)
      this.status = 0
      this.$store.commit('finish')
      if (!skip) {
        const audio = new Audio()
        audio.src = './alarms/' + this.alarm
        audio.play()
      } if (this.todos.length > 0) {
        this.start()
      } else {
        alert('結束')
      }
    },
    pause () {
      clearInterval(this.timer)
      this.status = 2
    }
  }
}
</script>
