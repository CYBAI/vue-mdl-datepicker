<template>
  <div class="week-text-row">
    <span class="week-text" v-for="day in weekdays">{{day}}</span>
  </div>
</template>

<script>
import { dayAbbr } from './dateUtils';

export default {
  name: 'week-text',
  props: {
    weekTextArray: {
      type: Array,
      default() { return dayAbbr; },
    },
    firstDayOfWeek: {
      type: Number,
      default() { return 0; },
    },
  },
  data() {
    return {
      weekdays: this.weekTextArray,
      firstDay: this.firstDayOfWeek,
    };
  },
  beforeMount() {
    this.weekdays = this.weekdays.concat(this.weekdays.splice(0, this.firstDay));
  },
};
</script>

<style scoped>
.week-text-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 500;
  height: 20px;
  line-height: 15px;
  opacity: 0.5;
  text-align: center;
}

.week-text {
  width: 42px;
}
</style>