<template>
  <div class="calendar-view">
    <CalendarHeader></CalendarHeader>
    <div class="calendar-content-box">
      <SideBar></SideBar>
      <router-view />
    </div>
  </div>
</template>

<script>
import CalendarHeader from '../organisms/CalendarHeader.vue'
import SideBar from '../organisms/SideBar.vue'

export default {
  name: 'calendar',
  components: {
    CalendarHeader,
    SideBar
  }
}
</script>

<style lang="scss">
.calendar-view {
  width: 98vw;
  height: 98vh;
  margin: 0 auto;
}

.calendar-content-box {
  width: 98vw;
  height: 87vh;
  margin-top: 2vh;
  display: flex;
}
</style>
