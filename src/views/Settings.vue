<template>
  <div id="settings">
    <b-table :items="items" :fields="fields" @row-clicked="selectAlarm">
      <template v-slot:cell(preview)="data">
        <audio controls :src="'./alarms/' + data.item.file"></audio>
      </template>
      <template v-slot:cell(select)="data">
        <!-- 若item 是目前鬧鈴，icon 出現打勾 -->
        <font-awesome-icon v-if="data.item.file == alarm" :icon="['fas', 'check']"></font-awesome-icon>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data () {
    return {
      items: [
        {
          name: 'Lion King',
          file: 'lionking.mp3'
        },
        {
          name: 'Engine1',
          file: 'alarm_engine1.mp3'
        },
        {
          name: 'Engine2',
          file: 'alarm_engine2.mp3'
        }
      ],
      fields: [
        {
          key: 'name',
          label: '名稱'
        },
        {
          key: 'preview',
          label: '預覽'
        },
        {
          key: 'select',
          label: '選擇'
        }
      ]
    }
  },
  computed: {
    alarm () {
      return this.$store.getters.alarm
    }
  },
  methods: { // 呼叫store/index.js 裡的mutations 的selectAlarm (state, data)
    selectAlarm (item) { // 目前選擇的item
      this.$store.commit('selectAlarm', item.file) // 把資料傳到src/store 裡，selectAlarm (item.file) commit 到data
    }
  }
}
</script>
