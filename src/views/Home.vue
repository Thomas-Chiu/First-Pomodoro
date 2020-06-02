<template lang="pug">
  #home
    b-list-group(id="taskInfo")
      b-list-group-item DATE
      b-list-group-item Task Name
      b-list-group-item Color
    #bb8(class="row")
      img(:src="'./img/icons/bb-8_icon.png'" class="col-12")
      h3(class="col-12") {{ currentText }}
      h4(class="col-12") {{ timeText }}
      //- 根據狀態碼來判斷顯示哪些按鈕
      radial-progress-bar(id="progress" :diameter="diameter" :startColor="startColor" :stopColor="stopColor" :innerStrokeColor="innerStrokeColor" :completed-steps="timeLeft" :total-steps="totalSteps" :animateSpeed="animateSpeed" :timingFunc="timingFunc" :isClockwise="isClockwise")
      b-btn(id="play" @click="start" variant="link")
        font-awesome-icon(:icon="['fas', 'play']")
      b-btn(id="pause" @click="pause" variant="link")
        font-awesome-icon(:icon="['fas', 'pause']")
      b-btn(id="forward" @click="finish(true)" variant="link")
        font-awesome-icon(:icon="['fas', 'fast-forward']")
      b-btn(id="backward" variant="link")
        font-awesome-icon(:icon="['fas', 'fast-backward']")
</template>

<script>
import RadialProgressBar from 'vue-radial-progress'
const timeLeftOG = parseInt(process.env.VUE_APP_TIMELEFT) // 注意環境檔變數要用parseInt()

export default {
  name: 'Home',
  data () {
    return {
      status: 0, // 定義狀態碼 0 = 停止、1 = 播放、2 = 暫停
      timer: 0,
      // completedSteps: this.$store.getters.timeLeft, // 以下是RadialProgressBar 的變數
      totalSteps: timeLeftOG,
      diameter: 175,
      startColor: '#e6664d',
      stopColor: '#e6664d',
      innerStrokeColor: '#093830',
      animateSpeed: 750,
      timingFunc: 'linear',
      isClockwise: false
    }
  },
  components: {
    RadialProgressBar
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
          if (this.timeLeft <= 0) {
            setTimeout(() => { // 讓countdown 倒數到0
              this.finish(false) // 用finish(bool) 判斷是否播alarm 音效
            }, 500)
          }
        }, 1000)
      } else { // 開始新倒數
        if (this.todos.length > 0) {
          this.$store.commit('start')
          this.status = 1
          this.timer = setInterval(() => {
            this.$store.commit('countdown')
            if (this.timeLeft <= 0) {
              setTimeout(() => {
                this.finish(false)
              }, 500)
            }
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
