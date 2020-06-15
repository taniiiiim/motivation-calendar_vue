<template>
  <div class="carendar-table-box">
    <div class="carendar-table">
      <div class="mini-month-carendar-box" v-for="month in months" :key="month">
        {{ month }}
      </div>
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

  .mini-month-carendar-box {
    width: 25vh;
    box-sizing: border-box;
  }
}
<style>
