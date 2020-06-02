import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, { // vue-analytics: https://www.npmjs.com/package/vue-analytics
  id: 'UA-168230205-1  '
})
Vue.use(Vuex)

const timeLeft = parseInt(process.env.VUE_APP_TIMELEFT) // 注意環境檔變數要用parseInt()
const timeLeftBreak = parseInt(process.env.VUE_APP_TIMELEFT_BREAK)

export default new Vuex.Store({
  state: {
    todos: [],
    timeLeft: 0,
    alarm: 'alarm_engine1.mp3',
    current: '',
    isBreak: false
  },
  getters: { // 取state 資料的中介
    todos (state) {
      return state.todos
    },
    timeLeft (state) {
      return state.timeLeft
    },
    alarm (state) {
      return state.alarm
    },
    current (state) {
      return state.current
    },
    isBreak (state) {
      return state.isBreak
    }
  },
  mutations: { // 傳到state 資料的中介
    selectAlarm (state, data) {
      state.alarm = data
    },
    addTodo (state, data) {
      state.todos.push({
        name: data, // item 確定的名字
        edit: false,
        model: data // item 編輯中的名字
      })
    },
    delTodo (state, data) {
      state.todos.splice(data, 1)
    },
    editTodo (state, data) {
      state.todos[data].edit = !state.todos[data].edit
    },
    cancelTodo (state, data) {
      state.todos[data].edit = false
      state.todos[data].model = state.todos[data].name
    },
    saveTodo (state, data) {
      state.todos[data].edit = false
      state.todos[data].name = state.todos[data].model
    },
    dragTodo (state, data) {
      state.todos = data
    },
    countdown (state) {
      state.timeLeft--
    },
    start (state) {
      if (state.isBreak) state.current = 'Take a break!'
      else if (!state.isBreak) {
        state.current = state.todos[0].name
        state.todos.splice(0, 1) // at position 0, remove 1 item
      }
    },
    finish (state) {
      if (state.todos.length > 0) state.isBreak = !state.isBreak
      state.current = ''
      state.timeLeft = state.isBreak ? timeLeftBreak : timeLeft
    }

  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
