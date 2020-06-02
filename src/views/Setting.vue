<template lang="pug">
  #settings
    b-table(:items="items" :fields="fields" @row-clicked="selectAlarm")
      template(v-slot:cell(preview)="data")
        audio(controls :src="'./alarms/' + data.item.file")
      template(v-slot:cell(select)="data")
        font-awesome-icon(v-if="data.item.file == alarm" :icon="['fas', 'check']")
</template>

<script>
export default {
  name: 'Setting',
  data () {
    return {
      items: [
        {
          name: 'Engine 1',
          file: 'alarm_engine1.mp3'
        }, {
          name: 'Engine 2',
          file: 'alarm_engine2.mp3'
        }, {
          name: 'Lion King',
          file: 'lionking.mp3'
        }
      ],
      fields: [
        {
          key: 'name',
          label: '名稱'
        }, {
          key: 'preview',
          label: '預覽'
        }, {
          key: 'select',
          label: '選擇'
        }
      ]
    }
  },
  computed: {
    alarm () { // 接getters 的資料
      return this.$store.getters.alarm
    }
  },
  methods: {
    selectAlarm (item) { // 丟mutations 的資料
      this.$store.commit('selectAlarm', item.file)
    }
  }
}
</script>
