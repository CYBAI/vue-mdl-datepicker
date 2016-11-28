<template>
  <div class="calendar-month-week-row">
    <day-button
      :selected="selectedDate"
      :disabled="getDisableDates(day)"
      :day="day" v-for="day in week"
    ></day-button> 
  </div>
</template>

<script>
import { isBetweenDates } from '../util/dateUtils';

import DayButton from './DayButton';

export default {
  name: 'week-row',
  props: {
    week: {
      type: Array,
      required: true,
    },
    minDate: {
      type: Date,
      required: true,
    },
    maxDate: {
      type: Date,
      required: true,
    },
    selectedDate: {
      type: Date,
      required: true,
    },
    shouldDisableDate: {
      type: Function,
    },
  },
  components: { DayButton },
  methods: {
    getDisableDates(day) {
      if (day === null) return false;
      let disabled = !isBetweenDates(day, this.minDate, this.maxDate);
      if (!disabled && this.shouldDisableDate) {
        disabled = this.shouldDisableDate(day);
      }

      return disabled;
    },
  },
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