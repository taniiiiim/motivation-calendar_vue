<template>
  <div class="calendar-header">
    <div class="title">
      <p>MOTIVATION<br>CALENDAR</p>
    </div>
    <div class="current-day">
      <span>{{currentDay}}</span>
    </div>
    <div class="target-month">
      <p>{{targetMonth | monthsInEnglish}} {{targetYear}}</p>
    </div>
    <div class="day-shift-btns">
      <i class="fa fa-caret-left" aria-hidden="true" @click="handleshiftBack"></i>
      <i class="fa fa-caret-right" aria-hidden="true" @click="handleshiftForward"></i>
    </div>
    <div class="today-nav">
      <input class="today-nav-btn" type="button" value="Today" @click="handleshiftToToday" :disabled="isTargetCurrent"/>
    </div>
    <div class="time-scope">
      <select class="time-scope-box" name="time-scope" @change="handleTimeScopeChange">
        <option
          v-for="( val, key ) in timeScopes"
          :key="key"
          :value="key"
          :selected="key === pageTitle">{{ val }}</option>
      </select>
    </div>
  </div>
</template>

<script>
import { MONTHS, TIME_SCOPES } from "../../constant.js"

export default {
  name: 'calendar-header',
  data: function() {
    return {
      timeScopes: TIME_SCOPES
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
    isTargetCurrent: function() {
      return (this.targetYear === this.currentYear) && (this.targetMonth === this.currentMonth) && (this.targetDay === this.currentDay);
    }
  },
  filters: {
    monthsInEnglish: function(month) {
      return MONTHS[month];
    }
  },
  methods: {
    handleshiftBack: function() {
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
    handleshiftForward: function() {
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
      }      this.$router.push({
        path: `/calendar/${this.pageTitle}/${shiftForwardDate.getFullYear()}/${shiftForwardDate.getMonth() + 1}/${shiftForwardDate.getDate()}`
      })
    },
    handleshiftToToday: function() {
      this.$router.push({
        path: `/calendar/${this.pageTitle}/${this.currentYear}/${this.currentMonth + 1}/${this.currentDay}`
      })
    },
    handleTimeScopeChange: function(e) {
      this.$router.push({
        path: `/calendar/${e.target.value}/${this.targetYear}/${this.targetMonth + 1}/${this.targetDay}`
      })
    }
  }
}
</script>

<style lang="scss">
.calendar-header {
  margin: 0;
  width: 98vw;
  height: 10vh;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
  overflow: hidden;
}

.title {
  height: 10vh;
  width: 30vh;
  p {
    color: #dd6867;
    line-height: 3.5vh;
    font-size: 3.5vh;
    margin-top: 1.5vh;
    margin-bottom: 1.5vh;
  }
  float: left;
}

.current-day {
  margin: 1.5vh 0 1.5vh 2vh;
  height: 7vh;
  width: 7vh;
  line-height: 7vh;
  background: #dd6867;
  border: 1px solid #dd6867;
  border-radius: 3.5vh;
  color: #fff;
  font-size: 3.5vh;
  float: left;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);
}

.target-month {
  height: 10vh;
  width: 35vh;
  margin-left: 5vh;
  p {
    color: #000;
    line-height: 4vh;
    font-size: 4vh;
    margin-top: 3vh;
    margin-bottom: 3vh;
  }
  float: left;
}

.day-shift-btns {
  height: 7vh;
  margin: 1.5vh 0 1.5vh 5vh;
  display: inline-flex;
  float: left;
}

.fa {
  height: 7vh;
  width: 7vh;
  border: 1px solid #dd6867;
  border-radius: 3.5vh;
  box-sizing: border-box;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);
  color: #dd6867;
  line-height: 7vh;
  font-size: 6vh;
  cursor: pointer;

  &-caret-left {
    padding-right: 1vh;
  }

  &-caret-right {
    margin-left: 2vh;
    padding-left: 1vh;
  }

  &:hover {
    border: 2px solid #dd6867;
    box-shadow: 0 1px 4px 0 #dd6867;
  }

  &:active {
    background: #dd6867;
    color: #fff;
    box-shadow: 0 2px 8px 0 rgba(221,104,103,0.2);
  }
}

.today-nav {
  height: 10vh;
  width: 15vh;
  margin-right: 5vh;

  &-btn {
    height: 7vh;
    width: 15vh;
    margin: 1.5vh 0;
    background: #fafafb;
    border: 1px solid #f0f0f0;
    border-radius: 2px;
    box-sizing: border-box;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);
    cursor: pointer;
    color: #777;
    line-height: 7vh;
    font-size: 3.5vh;
    font-family: serif;

    &:hover {
      border-color: #dd6867;
      box-shadow: 0 2px 8px 0 rgba(221,104,103,0.2);
      color: #dd6867;
    }

    &:active {
      background: #dd6867;
      box-shadow: 0 2px 8px 0 rgba(221,104,103,0.2);
      color: #fff;
    }

    &:focus {
      outline: none;
    }

    &:disabled {
      border-color: #fff;
      color: rgb(170, 170, 170);
      box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
    }
  }
  float: right;
}

.time-scope {
  height: 10vh;
  width: 15vh;
  margin-right: 5vh;
  &-box {
    height: 7vh;
    width: 15vh;
    margin: 1.5vh 0;
    background: #fafafb;
    border: 1px solid #f0f0f0;
    border-radius: 2px;
    box-sizing: border-box;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);
    cursor: pointer;
    color: #777;
    line-height: 7vh;
    font-size: 3.5vh;
    font-family: serif;
    text-align: center;

    &:hover {
      border-color: #dd6867;
      box-shadow: 0 2px 8px 0 rgba(221,104,103,0.2);
      color: #dd6867;
    }

    &:active {
      background: #dd6867;
      box-shadow: 0 2px 8px 0 rgba(221,104,103,0.2);
      color: #fff;
    }

    &:focus {
      outline: none;
    }
  }
  float: right;
}
</style>
