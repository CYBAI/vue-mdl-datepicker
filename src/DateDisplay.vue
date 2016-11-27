<template>
  <div class="date-display">
    <div class="datepicker-year-selection">
      <div @click="selectType('year')" style="position: absolute; height: 100%; width: 100%; top: 0px; left: 0px; transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;">
        <div :style="displayYearStyle">
          {{year}}
        </div>
      </div>
    </div>
    <div class="datepicker-date-selection">
      <div @click="selectType('month')" style="position: absolute; height: 100%; width: 100%; top: 0px; left: 0px; transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; opacity: 1; transform: translate(0px, 0px);">
        <div :style="displayDateStyle">
          {{displayDate}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dayList, monthList } from './dateUtils';

export default {
  name: 'date-display',
  props: {
    selectedDate: {
      type: Date,
      required: true,
    },
  },
  data() {
    return {
      selectedType: 'month',
    };
  },
  methods: {
    selectType(type) {
      this.selectedType = type;
      this.$parent.$emit('update-selected-type', type);
    },
  },
  computed: {
    displayDate() {
      return `${dayList[this.selectedDate.getDay()]}, ${monthList[this.selectedDate.getMonth()]} ${this.selectedDate.getDate()}`;
    },
    year() {
      return this.selectedDate.getFullYear();
    },
    displayDateStyle() {
      return {
        cursor: this.selectedType === 'month' ? 'default' : 'pointer',
      };
    },
    displayYearStyle() {
      return {
        cursor: this.selectedType === 'month' ? 'pointer' : 'default',
      };
    },
  },
};
</script>

<style scoped>
.date-display {
  width: 100%;
  height: auto;
  float: none;
  font-weight: 700;
  display: inline-block;
  background-color: rgb(0, 151, 167);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-bottom-left-radius: 0px;
  color: rgb(255, 255, 255);
  padding: 20px;
  box-sizing: border-box;
}

.datepicker-year-selection {
  position: relative;
  overflow: hidden;
  height: 16px;
  margin: 0px 0px 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  opacity: 0.7;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
}

.datepicker-date-selection {
  position: relative;
  overflow: hidden;
  height: 38px;
  display: block;
  font-size: 36px;
  line-height: 36px;
  opacity: 1;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  width: 100%; font-weight: 500;
}

.show-date {
  width: 100%;
  display: block;
}
</style>