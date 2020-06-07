<template>
  <div class="month-table">
    <div class="month-table-box">
    </div>
  </div>
</template>

<script>
export default {
  name: 'month-table'
}
</script>

<style lang="scss">
.month-table {
  height: 84vh;
  width: 100%;
  padding-left: 2vh;
}

.month-table-box {
  height: 84vh;
  width: 100%;
  margin-right: 0;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
}
</style>
