<template>
  <div class="calendar-dialog">
    <calendar
      :selectedDate="selectedDate"
      :firstDayOfWeek="firstDayOfWeek"
    ></calendar>
    <div class="calendar-check-btn-section">
      <calendar-check-btn :handleClick="handleOpenDialog" text="Cancel"></calendar-check-btn>
      <calendar-check-btn :handleClick="isOk" text="OK"></calendar-check-btn>
    </div>
  </div>
</template>

<script>

import Calendar from './Calendar';
import CalendarCheckBtn from './CalendarCheckButton';

export default {
  name: 'calendar-dialog',
  components: { Calendar, CalendarCheckBtn },
  props: {
    firstDayOfWeek: {
      type: Number,
      required: true,
    },
    handleOpenDialog: {
      type: Function,
      required: true,
    },
    selectedDate: {
      type: Date,
      required: true,
    },
  },
  data() {
    return {
      componentRoot: this.$parent,
    };
  },
  methods: {
    isOk() {
      this.componentRoot.$emit('on-this-day', this.selectedDate);
    },
  },
};
</script>

<style scoped>
.calendar-dialog {
  display: flex;
  flex-direction: column;
}

.calendar-check-btn-section {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0px;
  max-height: 48px;
  padding: 0px;
}
</style>