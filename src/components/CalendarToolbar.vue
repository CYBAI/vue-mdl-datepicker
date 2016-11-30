<template>
  <div class="calendar-month-year-selection">
    <button @click="prevMonth" type="button" class="calendar-month-select-left">
      <left-arrow></left-arrow>
    </button>
    <div class="calendar-month-year-text-container">
      <div class="calendar-month-year-text-animation">
        <div class="calendar-month-year-text">{{showMonthYear(showDate)}}</div>
      </div>
    </div>
    <button @click="nextMonth" type="button" class="calendar-month-select-right">
      <right-arrow></right-arrow>
    </button>
  </div>
</template>

<script>
import { monthFullList } from '../util/dateUtils';
import { getComponentRoot } from '../util/componentUtils';

import LeftArrow from './LeftArrowSVG';
import RightArrow from './RightArrowSVG';

export default {
  name: 'calendar-toolbar',
  props: {
    displayDate: {
      type: Date,
      required: true,
    },
  },
  data() {
    return {
      showDate: this.displayDate,
      componentRoot: getComponentRoot(this),
    };
  },
  components: { LeftArrow, RightArrow },
  methods: {
    showMonthYear(date) {
      return `${monthFullList[date.getMonth()]} ${date.getFullYear()}`;
    },
    prevMonth() {
      this.showDate = new Date(
        this.showDate.getFullYear(),
        this.showDate.getMonth() - 1,
        15,
      );
      this.componentRoot.$emit('update-display-calendar', this.showDate);
    },
    nextMonth() {
      this.showDate = new Date(
        this.showDate.getFullYear(),
        this.showDate.getMonth() + 1,
        15,
      );
      this.componentRoot.$emit('update-display-calendar', this.showDate);
    },
  },
};
</script>

<style scoped>
.calendar-month-year-selection {
  display: flex;
  justify-content: space-between;
  background-color: inherit;
  height: 48px;
}

.calendar-month-select-left {
  border: 10px;
  box-sizing: border-box;
  display: inline-block;
  font-family: Roboto, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  text-decoration: none;
  margin: 0px;
  padding: 12px;
  outline: none;
  font-size: 0px;
  font-weight: inherit;
  transform: translate(0px, 0px);
  position: relative;
  overflow: visible;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  width: 48px;
  height: 48px;
  background: none;
}

.calendar-month-select-right {
  border: 10px;
  box-sizing: border-box;
  display: inline-block;
  font-family: Roboto, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  text-decoration: none;
  margin: 0px;
  padding: 12px;
  outline: none;
  font-size: 0px;
  font-weight: inherit;
  transform: translate(0px, 0px);
  position: relative;
  overflow: visible;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  width: 48px;
  height: 48px;
  background: none;
}

.calendar-month-year-text-container {
  position: relative;
  overflow: hidden;
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  width: 100%;
}

.calendar-month-year-text-animation {
  top: 0px;
  left: 0px;
  transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
}

.calendar-month-year-text {
  padding-top: 12px;
}
</style>