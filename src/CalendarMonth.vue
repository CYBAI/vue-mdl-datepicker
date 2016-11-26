<template>
  <div class="calendar-month-container">
    <div class="calendar-weekdays-container">
      <div class="calendar-month-week-column">
        <week-row :selectedDate="selectedDate" :week="week" v-for="week in weekArray"></week-row>
      </div>
    </div>
  </div>
</template>

<script>
import WeekRow from './WeekRow';
import { getWeekArray } from './dateUtils';

export default {
  name: 'calendar-month',
  props: {
    weekArray: {
      type: Array,
      default() { return getWeekArray(new Date(), 0); },
    },
    displayDate: {
      type: Date,
      required: true,
    },
    selectedDate: {
      type: Date,
      required: true,
    },
    firstDayOfWeek: {
      type: Number,
      required: true,
    },
  },
  components: { WeekRow },
  computed: {
    weekArray() {
      return getWeekArray(this.displayDate, this.firstDayOfWeek);
    },
  },
};
</script>

<style scoped>
.calendar-month-container {
  height: 214px;
  overflow: hidden;
  position: relative;
}

.calendar-month-week-column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-weight: 400;
  height: 228px;
  line-height: 2;
  position: relative;
  text-align: center;
}

.calendar-weekdays-container {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
}
</style>
