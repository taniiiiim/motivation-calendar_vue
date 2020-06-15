<template>
  <div class="calendar-view">
    <CalendarHeader></CalendarHeader>
    <div class="calendar-content-box">
      <SideBar @schedule-add='openScheduleAddModal'></SideBar>
      <router-view @schedule-add='openScheduleAddModal'></router-view>
    </div>
    <transition>
      <ScheduleAddModal v-if="shouldOpenScheduleAddModal" @close='closeScheduleAddModal'></ScheduleAddModal>
    </transition>
  </div>
</template>

<script>
import CalendarHeader from '../organisms/CalendarHeader.vue'
import SideBar from '../organisms/SideBar.vue'
import ScheduleAddModal from '../organisms/ScheduleAddModal'

export default {
  name: 'calendar',
  data: function() {
    return {
      shouldOpenScheduleAddModal: false
    }
  },
  components: {
    CalendarHeader,
    SideBar,
    ScheduleAddModal
  },
  methods: {
    openScheduleAddModal: function() {
      this.shouldOpenScheduleAddModal = true
    },
    closeScheduleAddModal: function() {
      this.shouldOpenScheduleAddModal = false
    },
  }
}
</script>

<style lang="scss">
.calendar-view {
  width: 98vw;
  min-width: 150vh;
  height: 98vh;
  margin: 0 auto;
}

.calendar-content-box {
  width: 98vw;
  min-width: 150vh;
  height: 87vh;
  margin-top: 2vh;
  display: flex;
}
</style>
