<template>
  <div class="side-bar">
    <ScheduleAddButton @task-add='handleScheduleAdd'></ScheduleAddButton>
    <MiniCalendarCard></MiniCalendarCard>
  </div>
</template>

<script>
import MiniCalendarCard from '../molecules/MiniCalendarCard.vue'
import ScheduleAddButton from '../molecules/ScheduleAddButton.vue'

export default {
  name: 'side-bar',
  components: {
    MiniCalendarCard,
    ScheduleAddButton
  },
  methods: {
    handleScheduleAdd: function() {
      this.$emit('schedule-add');
    }
  }
}
</script>

<style lang="scss">
.side-bar {
  height: 84vh;
  width: 30vh;
}
</style>
