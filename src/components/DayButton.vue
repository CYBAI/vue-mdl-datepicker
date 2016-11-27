<template>
  <button
    v-if="isNotEmpty"
    @click="select"
    @mouseenter="hoverIn"
    @mouseleave="hoverOut"
    tabindex="0" type="button" class="calendar-day-button"
  >
    <div :class="hoverStyle"></div>
    <span :class="dayStyle">{{toDate(day)}}</span>
  </button>
  <span v-else class="calendar-empty-day"></span>
</template>

<script>
export default {
  name: 'day-button',
  props: {
    day: {
      type: [Date, null],
    },
    selected: {
      type: Date,
      required: true,
    },
  },
  data() {
    return {
      componentRoot: this.$parent.$parent.$parent.$parent.$parent,
    };
  },
  methods: {
    toDate(day) {
      return day.getDate();
    },
    hoverIn() {
      if (!this.isSelected) {
        this.hoverStyle['calendar-day-hover'] = true;
        if (this.isToday) {
          this.dayStyle['calendar-today-text'] = !this.dayStyle['calendar-today-text'];
        } else {
          this.dayStyle['calendar-weekdays'] = !this.dayStyle['calendar-weekdays'];
        }
        this.dayStyle['calendar-day-selected-text'] = !this.dayStyle['calendar-day-selected-text'];
      }
    },
    hoverOut() {
      if (!this.isSelected) {
        this.hoverStyle['calendar-day-hover'] = false;
        if (this.isToday) {
          this.dayStyle['calendar-today-text'] = !this.dayStyle['calendar-today-text'];
        } else {
          this.dayStyle['calendar-weekdays'] = !this.dayStyle['calendar-weekdays'];
        }
        this.dayStyle['calendar-day-selected-text'] = !this.dayStyle['calendar-day-selected-text'];
      }
    },
    select() {
      this.componentRoot.$emit('update-selected', this.day);
    },
  },
  computed: {
    isNotEmpty() {
      return !!this.day;
    },
    isSelected() {
      return this.day ? (
        this.day.getFullYear() === this.selected.getFullYear() &&
        this.day.getMonth() === this.selected.getMonth() &&
        this.day.getDate() === this.selected.getDate()
      ) : false;
    },
    isToday() {
      const today = new Date();
      return this.day ? (
        this.day.getFullYear() === today.getFullYear() &&
        this.day.getMonth() === today.getMonth() &&
        this.day.getDate() === today.getDate()
      ) : false;
    },
    dayStyle() {
      return (this.isToday && this.isSelected) ? {
        'calendar-today-text': false,
        'calendar-weekdays': !this.isToday && !this.isSelected,
        'calendar-day-selected': this.isSelected,
        'calendar-day-selected-text': this.isSelected,
      } : {
        'calendar-today-text': this.isToday,
        'calendar-weekdays': !this.isToday && !this.isSelected,
        'calendar-day-selected': this.isSelected,
        'calendar-day-selected-text': this.isSelected,
      };
    },
    hoverStyle() {
      return (this.isSelected) ? {
        'calendar-day-bg': true,
        'calendar-day-bg-selected': true,
        'calendar-day-hover': false,
      } : {
        'calendar-day-bg': true,
        'calendar-day-bg-selected': false,
        'calendar-day-hover': false,
      };
    },
  },
  mounted() {
    this.$on('update-selected', (selected) => {
      this.componentRoot.selectedDate = selected;
    });
  },
};
</script>

<style scoped>
.calendar-day-button {
  border: 10px;
  box-sizing: border-box;
  display: inline-block;
  font-family: Roboto, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  text-decoration: none;
  margin: 0px;
  padding: 4px 0px;
  outline: none;
  font-size: inherit;
  font-weight: 400;
  position: relative;
  width: 42px;
  background: none;
}

.calendar-day-bg {
  background-color: rgb(0, 151, 167);
  border-radius: 50%;
  height: 34px;
  left: 4px;
  opacity: 0;
  position: absolute;
  top: 0px;
  transform: scale(0);
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  width: 34px;
}

.calendar-day-bg-selected {
  opacity: 1;
  transform: scale(1);
}

.calendar-day-hover {
  background-color: rgb(0, 151, 167);
  border-radius: 50%;
  height: 34px;
  left: 4px;
  opacity: .6;
  position: absolute;
  top: 0px;
  transform: scale(1);
  transition: all 450ms cubic-bezier(0.23, 1, 0.320, 1) 0ms;
  width: 34px;
}

.calendar-day-selected {
  background-color: rgb(0, 151, 167);
  border-radius: 50%;
  height: 34px;
  opacity: 1;
  position: absolute;
  top: 0px;
  transform: scale(1);
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  width: 34px;
}

.calendar-day-selected-text {
  color: rgb(255, 255, 255);
  font-weight: 400;
  position: relative;
}

.calendar-today-text {
  color: rgb(0, 188, 212);
  font-weight: 400;
  position: relative;
}

.calendar-weekdays {
  color: rgba(0, 0, 0, 0.870588);
  font-weight: 400;
  position: relative;
}

.calendar-empty-day {
  box-sizing: border-box;
  font-weight: 400;
  padding: 4px 0px;
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  width: 42px;
}
</style>