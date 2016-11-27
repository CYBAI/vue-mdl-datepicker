<template>
  <button @click.prevent="click" type="button" class="calendar-check-btn">
    <span class="calendar-check-btn-text">{{text}}</span>
  </button>
</template>

<script>
export default {
  name: 'calendar-check-btn',
  props: {
    text: {
      type: String,
      required: true,
    },
    handleClick: {
      type: Function,
      default() { return () => {}; },
    },
  },
  methods: {
    click() {
      this.handleClick(false);
    },
  },
};
</script>

<style>
.calendar-check-btn {
  border: 10px;
  box-sizing: border-box;
  display: inline-block;
  font-family: Roboto, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  text-decoration: none;
  margin: 4px 8px 8px 0px;
  padding: 0px;
  outline: none;
  font-size: inherit;
  font-weight: inherit;
  transform: translate(0px, 0px);
  height: 36px;
  line-height: 36px; min-width: 64px; color: rgb(0, 188, 212); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; border-radius: 2px; position: relative; overflow: hidden; background-color: rgba(0, 0, 0, 0); text-align: center; max-height: 36px; user-select: none;
}

.calendar-check-btn-text {
  position: relative; padding-left: 16px; padding-right: 16px; vertical-align: middle; letter-spacing: 0px; text-transform: uppercase; font-weight: 500; font-size: 14px;
}
</style>