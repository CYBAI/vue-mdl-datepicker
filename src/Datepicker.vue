<template>
  <div @keyup.esc.prevent="handleOpenDialog(false)">
    <datepicker-input
      :date="date"
      :handleOpenDialog="handleOpenDialog"
      placeholder="Choose a day..."
    ></datepicker-input>
    <div v-if="opened" class="datepicker-root">
      <div class="datepicker-container">
        <div class="calendar-container">
          <date-display :selectedDate="selected"></date-display>
          <calendar-dialog
            :selectedDate="selected"
            :handleOpenDialog="handleOpenDialog"
            :firstDayOfWeek="firstDayOfWeek"
          ></calendar-dialog>
        </div>
      </div>
      <datepicker-overlay :handleOpenDialog="handleOpenDialog" :opened="opened"></datepicker-overlay>
    </div>
  </div>
</template>

<script>
import DateDisplay from './components/DateDisplay';
import CalendarDialog from './components/CalendarDialog';
import DatepickerInput from './components/DatepickerInput';
import DatepickerOverlay from './components/DatepickerOverlay';

export default {
  name: 'mdl-datepicker',
  components: { CalendarDialog, DateDisplay, DatepickerOverlay, DatepickerInput },
  props: {
    firstDayOfWeek: {
      type: Number,
      default() { return 0; },
    },
    selectedDate: {
      type: Date,
      default() { return new Date(); },
    },
    value: {
      type: Date,
    },
  },
  data() {
    return {
      selected: this.selectedDate,
      opened: false,
      date: undefined,
    };
  },
  methods: {
    handleOpenDialog(opened) {
      this.opened = opened;
      if (this.date) {
        this.selected = this.date;
      }
    },
  },
  mounted() {
    this.$on('update-selected', (selectedDay) => {
      this.selected = selectedDay;
    });

    this.$on('on-this-day', (selected) => {
      this.date = selected;
      this.opened = !this.opened;
      this.$emit('input', this.selected);
    });
  },
};
</script>

<style scoped>
.datepicker-root {
  position: fixed;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  z-index: 1500;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  transition: left 0ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  padding: 70.5px 0px 0px;
  min-height: 434px;
  min-width: 310px;
}

.datepicker-container {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  position: relative;
  width: 310px;
  max-width: 768px;
  margin: 0px auto;
  z-index: 1500;
  opacity: 1;
  transform: translate(0px, 64px);
}

.calendar-container {
  color: rgba(0, 0, 0, 0.870588);
  background-color: rgb(255, 255, 255);
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.247059) 0px 14px 45px, rgba(0, 0, 0, 0.219608) 0px 10px 18px;
  border-radius: 2px;
}
</style>