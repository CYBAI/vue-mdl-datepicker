<template>
  <div v-if="selectedType === 'month'" class="calendar-month-root">
    <calendar-toolbar :displayDate="displayDate"></calendar-toolbar>
    <week-text :firstDayOfWeek="firstDayOfWeek"></week-text>
    <calendar-month
      :displayDate="displayDate"
      :selectedDate="selectedDate"
      :firstDayOfWeek="firstDayOfWeek"
    ></calendar-month>
  </div>
  <div v-else class="calendar-year-root">
    <calendar-year :selectedDate="selectedDate"></calendar-year>
  </div>
</template>

<script>
import WeekText from './WeekText';
import CalendarToolbar from './CalendarToolbar';
import CalendarMonth from './CalendarMonth';
import CalendarYear from './CalendarYear';

export default {
  name: 'calendar',
  components: {
    WeekText,
    CalendarToolbar,
    CalendarMonth,
    CalendarYear,
  },
  props: {
    firstDayOfWeek: {
      type: Number,
      required: true,
    },
    selectedDate: {
      type: Date,
      required: true,
    },
  },
  data() {
    return {
      componentRoot: this.$parent.$parent,
      displayDate: new Date(
        this.selectedDate.getFullYear(), this.selectedDate.getMonth(), 15
      ),
      selectedType: 'month',
    };
  },
  mounted() {
    this.componentRoot.$on('update-display-calendar', (displayDate) => {
      this.displayDate = displayDate;
    });

    this.componentRoot.$on('update-selected-type', (type) => {
      this.selectedType = type;
    });
  },
};
</script>

<style scoped>
.calendar-month-root {
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  flex-direction: column;
  font-size: 12px;
  font-weight: 400;
  padding: 0px 8px;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
}

.calendar-year-root {
  display: flex;
  flex-direction: column;
}
</style>
