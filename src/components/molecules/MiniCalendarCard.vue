<template>
  <div class="mini-calendar-box">
    <div class="mini-calendar-header">
      <div class="target-month">
        <p>{{targetMonth | monthsInEnglish}} {{targetYear}}</p>
      </div>
      <div class="day-shift-btns">
        <i class="fa fa-caret-left" aria-hidden="true" @click="handleShiftBack"></i>
        <i class="fa fa-caret-right" aria-hidden="true" @click="handleShiftForward"></i>
      </div>
    </div>
    <table class="mini-calendar-table">
      <tr>
        <th v-for="(date, index) in dates" :key="index">{{ date }}</th>
      </tr>
      <tr v-for="(weekOfMonth, index) in daysOfMonth" :key="index">
        <td v-for="(day, index) in weekOfMonth" :key="index"
          :class="{ nextmonth: isNextMonth(day), previousmonth: isPreviousMonth(day), currentdate: isCurrentDate(day), targetdate: !isCurrentDate(day) && isTargetDate(day) }"
          @click='handleShiftToSelectedDate'>{{ day.getDate() }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { MONTHS, DATE_CHARS } from "../../constant.js"

export default {
  name: 'mini-calendar-card',
  data: function() {
    return {
      dates: DATE_CHARS
    }
  },
  computed: {
    pageTitle: function() {
      return this.$route.meta.pageTitle
    },
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
      for (let i = (this.lastDayOfMonth.getDay() + 1); i < DATE_CHARS.length; i++) {
        days[this.firstDayOfMonth.getDay() + this.lastDayOfMonth.getDate() + i - this.lastDayOfMonth.getDay() - 1] = new Date(this.targetYear, this.targetMonth + 1, i - this.lastDayOfMonth.getDay());
      }
      let daysOfMonth = []
      for (let i = 0; i < days.length / DATE_CHARS.length; i++) {
        daysOfMonth.push(days.slice(DATE_CHARS.length * i, DATE_CHARS.length * (i + 1)))
      }
      return daysOfMonth
    }
  },
  filters: {
    monthsInEnglish: function(month) {
      return MONTHS[month];
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
    isTargetDate: function(day) {
      return (day.getFullYear() === this.targetYear && day.getMonth() === this.targetMonth && day.getDate() === this.targetDay);
    },
    isCurrentDate: function(day) {
      return (day.getFullYear() === this.currentYear && day.getMonth() === this.currentMonth && day.getDate() === this.currentDay);
    },
    handleShiftBack: function() {
      let shiftBackDate
      switch (this.pageTitle) {
        case "day":
          shiftBackDate =  new Date(this.targetYear, this.targetMonth, this.targetDay - 1);
          break;
        case "week":
          shiftBackDate =  new Date(this.targetYear, this.targetMonth, this.targetDay - 7);
          break;
        case "month":
          shiftBackDate =  new Date(this.targetYear, this.targetMonth - 1, this.targetDay);
          break;
        case "year":
          shiftBackDate =  new Date(this.targetYear - 1, this.targetMonth, this.targetDay);
          break;
        default:
      }
      this.$router.push({
        path: `/calendar/${this.pageTitle}/${shiftBackDate.getFullYear()}/${shiftBackDate.getMonth() + 1}/${shiftBackDate.getDate()}`
      })
    },
    handleShiftForward: function() {
      let shiftForwardDate
      switch (this.pageTitle) {
        case "day":
          shiftForwardDate =  new Date(this.targetYear, this.targetMonth, this.targetDay + 1);
          break;
        case "week":
          shiftForwardDate =  new Date(this.targetYear, this.targetMonth, this.targetDay + 7);
          break;
        case "month":
          shiftForwardDate =  new Date(this.targetYear, this.targetMonth + 1, this.targetDay);
          break;
        case "year":
          shiftForwardDate =  new Date(this.targetYear + 1, this.targetMonth, this.targetDay);
          break;
        default:
      }
      this.$router.push({
        path: `/calendar/${this.pageTitle}/${shiftForwardDate.getFullYear()}/${shiftForwardDate.getMonth() + 1}/${shiftForwardDate.getDate()}`
      })
    },
    handleShiftToSelectedDate: function(e) {
      let selectedDate;
      switch(e.target.className) {
        case "nextmonth":
          selectedDate = new Date(this.targetYear, this.targetMonth + 1, e.target.innerHTML);
          break;
        case "previousmonth":
          selectedDate = new Date(this.targetYear, this.targetMonth - 1, e.target.innerHTML);
          break;
        default:
          selectedDate = new Date(this.targetYear, this.targetMonth, e.target.innerHTML);
          break;
      }
      if (selectedDate.getFullYear() !== this.targetYear || selectedDate.getMonth() !== this.targetMonth || selectedDate.getDate() !== this.targetDay) {
        this.$router.push({
          path: `/calendar/${this.pageTitle}/${selectedDate.getFullYear()}/${selectedDate.getMonth() + 1}/${selectedDate.getDate()}`
        })
      }
    }
  }
}
</script>

<style lang="scss">
.mini-calendar-box {
  transform: translate(0, 2vh);
  height: 35vh;
  width: 30vh;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
}

.mini-calendar-header {
  height: 5vh;
  width: 100%;
  display: flex;

  .target-month {
    height: 100%;
    margin: 0;
    p {
      color: #000;
      line-height: 2.4vh;
      font-size: 2.4vh;
      margin: 1.3vh auto 2vh 1.3vh;
      text-align: left;
    }
  }

  .day-shift-btns {
    height: 100%;
    margin: 1vh 0 1vh auto;
    display: inline-flex;

    .fa {
      width: 5vh;
      color: #777;
      font-size: 3vh;
      cursor: pointer;

      &:hover {
        color: #dd6867;
      }

      &:active {
        color: rgba(221,104,103,0.2);
      }
    }
  }
}



.mini-calendar-table {
  table-layout: fixed;
  height: 30vh;
  width: 30vh;
  tr {
    th {
      color: #dd6867;
    }
    td {
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
      color: #fff;
      background: #dd6867;
      .targetdate {
        color: #fff;
      }
      &:hover {
        background: rgba(221,104,103,1);
      }
    }
    .targetdate {
      color: #dd6867;
    }
  }
}

</style>
