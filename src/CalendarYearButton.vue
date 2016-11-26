<template>
  <button
    @click="updateYear"
    :id="id"
    type="button"
    class="calendar-year-btn"
  >
    <span :class="calendarYearTextStyle">{{year}}</span>
  </button>
</template>

<script>
import bus from './eventBus';

export default {
  name: 'calendar-year-button',
  props: {
    selectedDate: {
      type: Date,
      required: true,
    },
    selectedYear: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      id: `mdl-calendar-year-btn-${this.year}`,
    };
  },
  methods: {
    updateYear() {
      const selected = new Date(
        this.year,
        this.selectedDate.getMonth(),
        this.selectedDate.getDate(),
      );

      bus.$emit('update-selected', selected);
      bus.$emit('update-display-calendar', selected);
    },
  },
  computed: {
    calendarYearTextStyle() {
      return this.selectedYear === this.year ? {
        'calendar-year-text': true,
        'calendar-year-text-selected': true,
        'calendar-year-text-not-selected': false,
      } : {
        'calendar-year-text': true,
        'calendar-year-text-selected': false,
        'calendar-year-text-not-selected': true,
      };
    },
  },
};
</script>

<style scoped>
.calendar-year-text {
  align-self: center;
  position: relative;
  top: -1px;
}

.calendar-year-text:hover {
  color: rgb(0, 188, 212);
}

.calendar-year-text-not-selected {
  color: rgba(0, 0, 0, 0.870588);
  font-size: 17px;
  font-weight: 400;
}

.calendar-year-text-selected {
  color: rgb(0, 188, 212);
  font-size: 26px;
  font-weight: 500;
}

.calendar-year-btn {
  border: 10px;
  box-sizing: border-box;
  display: block;
  font-family: Roboto, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  text-decoration: none;
  margin: 0px auto;
  padding: 0px;
  outline: none;
  font-size: 14px;
  font-weight: inherit;
  position: relative;
  text-align: center;
  line-height: inherit;
  background: none;
}
</style>