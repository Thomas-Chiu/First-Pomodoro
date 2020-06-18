<template lang="pug">
  #list(class="pt-3")
    b-table-simple
      b-thead
        b-tr
          b-th Task
          b-th Action
      draggable(v-model="todos" tag="tbody" v-bind="dragOption")
        //- list 表格
        b-tr(v-if="todos.length == 0")
          b-td(colspan="2") No new task.
        b-tr(v-else v-for="(todo, index) in todos" :key="index")
          b-td
            //- 當編輯list item
            b-form-input(v-if="todo.edit" v-model="todo.model" class="inputEdit")
            b-btn(v-if="todo.edit" variant="link" class="text-black-50" @click="cancelTodo(index)")
              font-awesome-icon(:icon="['fas', 'undo']")
            b-btn(v-if="todo.edit" variant="link" class="text-black-50" @click="saveTodo(index)")
              font-awesome-icon(:icon="['fas', 'save']")
            span(v-else) {{ todo.name }}
          b-td
            //- 編輯 & 刪除icon
            b-btn(variant="link" class="rounded-circle btnAction" @click="editTodo(index)")
              font-awesome-icon(:icon="['fas', 'pen']")
            b-btn(variant="link" class="rounded-circle btnAction" @click="delTodo(index)")
              font-awesome-icon(:icon="['fas', 'times']")
    b-input(v-model="newTodo" class="inputAdd" maxlength="15" placeholder="Input a task!")
    b-btn(variant="warning" class="btnAdd" @click="addTodo") Add
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      newTodo: '',
      dragOption: {
        animation: 200
      }
    }
  },
  computed: { // computed 裡的function 只能讀取，不能寫入
    todos: {
      get () { // 從getters 取資料
        return this.$store.getters.todos
      },
      set (value) { // 傳資料到mutations 的dragTodo 函式
        this.$store.commit('dragTodo', value)
      }
    }
  },
  methods: {
    addTodo () {
      if (this.newTodo.length === 0) alert('Please input text.')
      else this.$store.commit('addTodo', this.newTodo)
    },
    delTodo (index) {
      this.$store.commit('delTodo', index)
    },
    editTodo (index) {
      this.$store.commit('editTodo', index)
    },
    cancelTodo (index) {
      this.$store.commit('cancelTodo', index)
    },
    saveTodo (index) {
      this.$store.commit('saveTodo', index)
    }
  }
}
</script>
