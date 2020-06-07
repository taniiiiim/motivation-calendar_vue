<template>
  <div class="calendar-header">
    <div class="title">
      <p>MOTIVATION<br>CALENDAR</p>
    </div>
    <div class="target-month">
      <p>{{year}}/{{month}}</p>
    </div>
    <div class="day-shift-btns">
      <i class="fa fa-caret-left" aria-hidden="true"></i>
      <i class="fa fa-caret-right" aria-hidden="true"></i>
    </div>
    <div class="today-nav">
      <p>Today<p/>
    </div>
    <div class="time-scope">
      <p>Month</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'calendar-header',
  computed: {
    year: function() {
      return this.$route.params.year;
    },
    month: function() {
      return this.$route.params.month;
    },
    day: function() {
      return this.$route.params.day;
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
    line-height: 3vh;
    font-size: 3vh;
    margin-top: 2vh;
    margin-bottom: 2vh;
  }
  float: left;
}

.target-month {
  height: 10vh;
  width: 10vh;
  margin-left: 2vh;
  p {
    color: #000;
    line-height: 3vh;
    font-size: 3vh;
    margin-top: 3.5vh;
    margin-bottom: 3.5vh;
  }
  float: left;
}

.day-shift-btns {
  height: 10vh;
  margin-left: 2vh;
  display: inline-flex;
  float: left;
}

.shift-btn {
  &-left {
    background: #fff;
    height: 4vh;
    width: 4vh;
    border-top: 2vh solid transparent;
    border-right: 3.5vh solid #fafafb;
    border-bottom: 2vh solid transparent;
    font-size: 50px;
    font-family: serif;
    cursor: pointer;

    &:hover {
      border: 3px solid #dd6867;
      font-size: 50px;
      box-shadow: 0 2px 8px 0 rgba(221,104,103,0.8);
    }

    &:active {
      background: #dd6867;
      color: #fff;
      box-shadow: 0 2px 8px 0 rgba(221,104,103,0.2);
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
  &-right {
    background: #fff;
    height: 4vh;
    width: 4vh;
    border-top: 2vh solid transparent;
    border-left: 3.5vh solid #fafafb;
    border-bottom: 2vh solid transparent;
    font-size: 50px;
    font-family: serif;
    cursor: pointer;

    &:hover {
      border: 3px solid #dd6867;
      font-size: 50px;
      box-shadow: 0 2px 8px 0 rgba(221,104,103,0.8);
    }

    &:active {
      background: #dd6867;
      color: #fff;
      box-shadow: 0 2px 8px 0 rgba(221,104,103,0.2);
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
}

.today-nav {
  height: 10vh;
  width: 10vh;
  margin-left: 2vh;
  p {
    color: #000;
    line-height: 3vh;
    font-size: 3vh;
    margin-top: 3.5vh;
    margin-bottom: 3.5vh;
  }
  float: right;
}

.time-scope {
  height: 10vh;
  width: 10vh;
  margin-left: 2vh;
  p {
    color: #000;
    line-height: 3vh;
    font-size: 3vh;
    margin-top: 3.5vh;
    margin-bottom: 3.5vh;
  }
  float: right;
}
</style>
