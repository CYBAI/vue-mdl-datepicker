<template>
  <div class="calendar-month-week-row">
    <day-button :selected="selectedDate" :day="day" v-for="day in week"></day-button> 
  </div>
</template>

<script>
import DayButton from './DayButton';

export default {
  name: 'week-row',
  props: {
    week: {
      type: Array,
      required: true,
    },
    selectedDate: {
      type: Date,
      required: true,
    },
  },
  components: { DayButton },
};
</script>

<style scoped>
.calendar-month-week-row {
  height: 34px;
  display: flex;
  margin-bottom: 2px;
  flex-direction: row;
  justify-content: space-around;
}
</style>