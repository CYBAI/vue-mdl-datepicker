<template>
  <button
    v-if="isNotEmpty"
    @click="select"
    @mouseenter="hoverIn"
    @mouseleave="hoverOut"
    :disabled="disabled"
    tabindex="0" type="button" :class="buttonStyle"
  >
    <div :class="hoverStyle"></div>
    <span :class="dayStyle">{{toDate(day)}}</span>
  </button>
  <span v-else class="calendar-empty-day"></span>
</template>

<script>
import { getComponentRoot } from '../util/componentUtils';

export default {
  name: 'day-button',
  props: {
    day: {
      type: [Date, null],
    },
    autoOk: {
      type: Boolean,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: true,
    },
    selected: {
      type: Date,
      required: true,
    },
  },
  data() {
    return {
      componentRoot: getComponentRoot(this),
      hovered: false,
    };
  },
  methods: {
    toDate(day) {
      return day.getDate();
    },
    hoverIn() {
      if (!this.disabled) {
        this.hovered = true;
      }
    },
    hoverOut() {
      if (!this.disabled) {
        this.hovered = false;
      }
    },
    select() {
      if (!this.autoOk) {
        this.componentRoot.$emit('update-selected', this.day);
      } else {
        this.componentRoot.$emit('on-this-day', this.day);
      }
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
      const style = (this.isToday && this.isSelected) ? {
        'calendar-day-text': true,
        'calendar-today-text': false,
        'calendar-weekdays': !this.isToday && !this.isSelected,
        'calendar-day-selected': this.isSelected,
        'calendar-day-selected-text': this.isSelected,
      } : {
        'calendar-day-text': true,
        'calendar-today-text': this.isToday,
        'calendar-weekdays': !this.isToday && !this.isSelected,
        'calendar-day-selected': this.isSelected,
        'calendar-day-selected-text': this.isSelected,
      };

      if (this.hovered && !this.isSelected) {
        if (this.isToday) {
          style['calendar-today-text'] = !style['calendar-today-text'];
        } else {
          style['calendar-weekdays'] = !style['calendar-weekdays'];
        }
        style['calendar-day-selected-text'] = !style['calendar-day-selected-text'];
      }

      return style;
    },
    hoverStyle() {
      const style = (this.isSelected) ? {
        'calendar-day-bg': true,
        'calendar-day-bg-selected': true,
        'calendar-day-hover': false,
      } : {
        'calendar-day-bg': true,
        'calendar-day-bg-selected': false,
        'calendar-day-hover': false,
      };

      if (!this.isSelected) {
        style['calendar-day-hover'] = this.hovered;
      }

      return style;
    },
    buttonStyle() {
      return {
        'calendar-day-button': !this.disabled,
        'calendar-day-button-disabled': this.disabled,
      };
    },
  },
  mounted() {
    this.componentRoot.$on('update-selected', (selected) => {
      this.selectedDate = selected;
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

.calendar-day-button-disabled {
  border: 10px;
  box-sizing: border-box;
  display: inline-block;
  font-family: Roboto, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: default;
  text-decoration: none;
  margin: 0px;
  padding: 4px 0px;
  outline: none;
  font-size: inherit;
  font-weight: 400;
  opacity: 0.4;
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

.calendar-day-text {
  font-weight: 400;
  position: relative;
}

.calendar-day-selected-text {
  color: rgb(255, 255, 255);
}

.calendar-today-text {
  color: rgb(0, 188, 212);
}

.calendar-weekdays {
  color: rgba(0, 0, 0, 0.870588);
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