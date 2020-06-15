<template>
  <div class="carendar-table-box">
    <div class="carendar-table">
    </div>
  </div>
</template>

<script>
export default {
  name: 'week-table'
}
</script>

<style lang="scss">
.carendar-table-box {
  height: 84vh;
  width: 100%;
  padding-left: 2vh;
  display: block;
}

.carendar-table {
  height: 84vh;
  width: 100%;
  margin-right: 0;
  background-color: #fff;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
  padding: 1vh;
  display: flex;
  overflow: hidden;
}
</style>
