<template>
  <div class="calendar-table-month-box">
    <table class="calendar-table-month">
      <tr>
        <th v-for="date in dates" :key="date">{{ date }}</th>
      </tr>
      <tr v-for="(weekOfMonth, index) in daysOfMonth" :key="index">
        <td v-for="(day, index) in weekOfMonth" :key="index"
          :class="{ nextmonth: isNextMonth(day), previousmonth: isPreviousMonth(day), currentdate: isCurrentDate(day) }"
          @click='handleScheduleAdd'>{{ day.getDate() }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { DATES } from "../../constant.js"

export default {
  name: 'month-table',
  data: function() {
    return {
      dates: DATES
    }
  },
  computed: {
    currentDate: function() {
      return new Date();
    },
    currentYear: function() {
      return this.currentDate.getFullYear();
    },
    currentMonth: function() {
      return this.currentDate.getMonth();
    },
    currentDay: function() {
      return this.currentDate.getDate();
    },
    targetDate: function() {
      return new Date(this.$route.params.year, this.$route.params.month - 1, this.$route.params.day)
    },
    targetYear: function() {
      return this.targetDate.getFullYear();
    },
    targetMonth: function() {
      return this.targetDate.getMonth();
    },
    targetDay: function() {
      return this.targetDate.getDate();
    },
    firstDayOfMonth: function() {
      return new Date(this.targetYear, this.targetMonth, 1);
    },
    lastDayOfMonth: function() {
      return new Date(this.targetYear, this.targetMonth + 1, 0);
    },
    daysOfMonth: function() {
      let days = []
      for (let i = this.firstDayOfMonth.getDay(); i < (this.firstDayOfMonth.getDay() + this.lastDayOfMonth.getDate()); i++) {
        days[i] = new Date(this.targetYear, this.targetMonth, i - this.firstDayOfMonth.getDay() + 1);
      }
      for (let i = this.firstDayOfMonth.getDay(); i > 0; i--) {
        days[this.firstDayOfMonth.getDay() - i] = new Date(this.targetYear, this.targetMonth, 1 - i);
      }
      for (let i = (this.lastDayOfMonth.getDay() + 1); i < DATES.length; i++) {
        days[this.firstDayOfMonth.getDay() + this.lastDayOfMonth.getDate() + i - this.lastDayOfMonth.getDay() - 1] = new Date(this.targetYear, this.targetMonth + 1, i - this.lastDayOfMonth.getDay());
      }
      let daysOfMonth = []
      for (let i = 0; i < days.length / DATES.length; i++) {
        daysOfMonth.push(days.slice(DATES.length * i, DATES.length * (i + 1)))
      }
      return daysOfMonth
    }
  },
  methods: {
    isTargetMonth: function(day) {
      return day.getMonth() === this.targetMonth;
    },
    isNextMonth: function(day) {
      return day.getMonth() > this.targetMonth;
    },
    isPreviousMonth: function(day) {
      return day.getMonth() < this.targetMonth;
    },
    isCurrentDate: function(day) {
      return (day.getFullYear() === this.currentYear && day.getMonth() === this.currentMonth && day.getDate() === this.currentDay);
    },
    handleScheduleAdd: function() {
      this.$emit('schedule-add');
    }
  }
}
</script>

<style lang="scss">
.calendar-table-month-box {
  height: 84vh;
  width: 100%;
  padding-left: 2vh;
}

.calendar-table-month {
  table-layout: fixed;
  height: 84vh;
  width: 100%;
  margin-right: 0;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
  padding: 1vh;
  border-collapse: separate;

  tr {
    font-weight: bold;
    th {
      height: 2vh;
      background: #dd6867;
      box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);
      color: #fff;
      font-size: 2vh;
    }
    td {
      box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);
      vertical-align: text-top;
      font-size: 2vh;
      cursor: pointer;
      &:hover {
        background: #f0f0f0;
      }
      &:active {
        background: rgba(0,0,0,0.2);
      }
    }
    .nextmonth, .previousmonth {
      color: rgba(0,0,0,0.2);
    }
    .currentdate {
      color: #dd6867;
    }
  }
}
</style>
