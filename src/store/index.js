import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const timeLeft = parseInt(process.env.VUE_APP_TIMELEFT) // 從這裡引用環境檔的變數
const timeLeftBreak = parseInt(process.env.VUE_APP_TIMELEFT_BREAK)

export default new Vuex.Store({
  state: { // 在state 定義番茄鐘預設的狀態
    todos: [],
    timeLeft, // key 值和變數名稱一樣可不用寫value
    alarm: 'alarm_engine1.mp3',
    current: '',
    breakTime: false
  },
  getters: {
    alarm (state) {
      return state.alarm
    },
    todos (state) {
      return state.todos
    },
    timeLeft (state) {
      return state.timeLeft
    },
    current (state) {
      return state.current
    },
    breakTime (state) {
      return state.breakTime
    }
  },
  mutations: {
    selectAlarm (state, data) { // 不懂要問
      state.alarm = data
    },
    addTodo (state, data) {
      state.todos.push({ // 一次push 3個東西，名稱
        name: data,
        edit: false,
        model: data
      })
    },
    dragTodo (state, data) {
      state.todos = data
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
    start (state) {
      if (state.breakTime) {
        state.current = '休息一下'
      } else if (!state.breakTime) {
        state.current = state.todos[0].name
        state.todos.splice(0, 1)
      }
    },
    countdown (state) {
      state.timeLeft--
    },
    finish (state) {
      if (state.todos.length > 0) {
        state.breakTime = !state.breakTime
      }
      state.current = ''
      state.timeLeft = state.breakTime ? timeLeftBreak : timeLeft
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
