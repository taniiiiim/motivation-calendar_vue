<template>
  <div class="task-add-box">
    <input class="task-add-btn" type="button" value="+" @click="handleTaskAdd" />
  </div>
</template>

<script>
export default {
  name: 'task-add-button',
  methods: {
    handleTaskAdd: function() {
      this.$emit('task-add');
    }
  }
}
</script>

<style lang="scss">
.task-add-btn {
  background: #fff;
  height: 15vh;
  width: 15vh;
  line-height: 8vh;
  border: 1px solid #dd6867;
  border-radius: 7.5vh;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
  box-sizing: border-box;
  color: #dd6867;
  font-size: 8vh;
  font-family: serif;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    border: 2px solid #dd6867;
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
</style>
