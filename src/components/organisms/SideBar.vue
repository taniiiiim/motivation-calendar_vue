<template>
  <div class="side-bar">
    <div class="task-add-box">
      <input class="task-add-btn" type="button" value="+"/>
    </div>
    <div class="side-calendar-box">
    </div>
  </div>
</template>

<script>
export default {
  name: 'side-bar'
}
</script>

<style lang="scss">
.side-bar {
  height: 84vh;
  width: 30vh;
}

.task-add-btn {
  background: #fff;
  height: 15vh;
  width: 15vh;
  line-height: 10vh;
  border: 1px solid #dd6867;
  border-radius: 7.5vh;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
  color: #dd6867;
  font-size: 8vh;
  font-family: serif;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    border: 3px solid #dd6867;
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

.side-calendar-box {
  transform: translate(0, 2vh);
  height: 30vh;
  width: 30vh;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
}
</style>
