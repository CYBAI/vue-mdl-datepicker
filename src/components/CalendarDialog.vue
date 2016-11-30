<template>
  <div class="calendar-dialog">
    <calendar
      :autoOk="autoOk"
      :minDate="minDate"
      :maxDate="maxDate"
      :selectedDate="selectedDate"
      :firstDayOfWeek="firstDayOfWeek"
      :shouldDisableDate="shouldDisableDate"
    ></calendar>
    <div v-if="!autoOk" class="calendar-check-btn-section">
      <calendar-check-btn :handleClick="handleOpenDialog" text="Cancel"></calendar-check-btn>
      <calendar-check-btn :handleClick="isOk" text="OK"></calendar-check-btn>
    </div>
  </div>
</template>

<script>
import Calendar from './Calendar';
import CalendarCheckBtn from './CalendarCheckButton';

import { getComponentRoot } from '../util/componentUtils';

export default {
  name: 'calendar-dialog',
  components: { Calendar, CalendarCheckBtn },
  props: {
    autoOk: {
      type: Boolean,
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
    shouldDisableDate: {
      type: Function,
    },
  },
  data() {
    return {
      componentRoot: getComponentRoot(this),
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