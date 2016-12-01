<template>
  <div class="calendar-year-container">
    <div ref="calenarYear" class="calendar-year-view">
      <div class="calendar-year-view-container">
        <calendar-year-button
          :selectedDate="selectedDate"
          :selectedYear="selectedYear" :year="year"
          v-for="year in yearList"
        ></calendar-year-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getYearsArray } from '../util/dateUtils';

import CalendarYearButton from './CalendarYearButton';

export default {
  name: 'calendar-year',
  components: { CalendarYearButton },
  props: {
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
  },
  data() {
    return {
      yearList: getYearsArray(
        this.minDate.getFullYear(), this.maxDate.getFullYear()
      ),
    };
  },
  methods: {
    scrollToSelectedYear() {
      const year = this.selectedYear;
      const selectedYearButton = document.getElementById(`mdl-calendar-year-btn-${year}`);

      if (!selectedYearButton) {
        return;
      }

      const container = this.$refs.calenarYear;
      const containerHeight = container.clientHeight;
      const yearButtonNodeHeight = selectedYearButton.clientHeight || 32;


      const scrollYOffset = (
        selectedYearButton.offsetTop + (yearButtonNodeHeight / 2)
      ) - (containerHeight / 2);

      container.scrollTop = scrollYOffset;
    },
  },
  computed: {
    selectedYear() {
      return this.selectedDate.getFullYear();
    },
  },
  mounted() {
    this.scrollToSelectedYear();
  },
  updated() {
    this.scrollToSelectedYear();
  },
};
</script>

<style scoped>
.calendar-year-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 310px;
  height: 272px;
  overflow: hidden;
  margin-top: 10px;
}

.calendar-year-view {
  background-color: rgb(255, 255, 255);
  height: inherit;
  line-height: 35px;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
}

.calendar-year-view-container {
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: center;
}
</style>