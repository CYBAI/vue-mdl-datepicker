<template>
  <div>
    <div class="datepicker-input-container">
      <div class="datepicker-input-text" :style="isPlaceholder">{{placeholder}}</div>
      <input
        @click="handleOpenDialog(true)"
        type="text" :value="selectedDate" class="datepicker-input-portrait"
      >
      <div>
        <hr class="datepicker-input-underline">
        <hr class="datepicker-input-underline-animation">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'datepicker-input',
  props: {
    placeholder: {
      type: String,
      default() { return 'Choose a date...'; },
    },
    handleOpenDialog: {
      type: Function,
    },
    date: {
      type: Date,
    },
  },
  computed: {
    isPlaceholder() {
      return this.date ? {
        opacity: 0,
      } : {
        opacity: 1,
      };
    },
    selectedDate() {
      return this.date ?
        `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${this.date.getDate()}` :
        null;
    },
  },
};
</script>

<style>
.datepicker-input-container {
  cursor: auto;
  width: 256px;
  height: 48px;
  font-size: 16px;
  line-height: 24px;
  position: relative;
  display: inline-block;
  background-color: transparent;
  font-family: Roboto, sans-serif;
  transition: height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
}

.datepicker-input-text {
  bottom: 12px;
  position: absolute;
  color: rgba(0, 0, 0, 0.298039);
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
}

.datepicker-input-portrait {
  padding: 0px;
  position: relative;
  width: 100%;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  color: rgba(0, 0, 0, 0.870588);
  cursor: inherit;
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  height: 100%;
  -webkit-appearance: textfield;
}

.datepicker-input-underline {
  border-top: none rgb(224, 224, 224);
  border-right: none rgb(224, 224, 224);
  border-bottom: 1px solid rgb(224, 224, 224);
  border-left: none rgb(224, 224, 224);
  border-image: initial;
  bottom: 8px;
  box-sizing: content-box;
  margin: 0px;
  position: absolute;
  width: 100%;
}

.datepicker-input-underline-animation {
  border-top: none rgb(0, 188, 212);
  border-right: none rgb(0, 188, 212);
  border-bottom: 2px solid rgb(0, 188, 212);
  border-left: none rgb(0, 188, 212);
  border-image: initial;
  bottom: 8px;
  box-sizing: content-box;
  margin: 0px;
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
}
</style>