<template>
  <div class="calendar-table-box">
    <div class="calendar-table">
      <span class="mini-month-carendar-box" v-for="month in months" :key="month">
        {{ month }}
      </span>
    </div>
  </div>
</template>

<script>
import { MONTHS } from '../../constant'

export default {
  name: 'year-table',
  data: function() {
    return {
      months: MONTHS
    }
  }
}
</script>

<style lang="scss">
.calendar-table-box {
  height: 84vh;
  width: 100%;
  padding-left: 2vh;
  overflow: hidden;
}

.calendar-table {
  height: 84vh;
  width: 100%;
  margin-right: 0;
  background-color: #fff;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
  padding: 1vh;
  border-collapse: separate;
  display: flex;

  .mini-month-carendar-box {
    width: 25vh;
    flex-wrap: wrap;
  }
}
<style>
