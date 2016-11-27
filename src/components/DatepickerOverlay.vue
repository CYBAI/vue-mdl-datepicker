<template>
  <div
    v-show="opened"
    @click="handleOpenDialog(false)"
    class="datepicker-overlay"
  ></div>
</template>

<script>
export default {
  name: 'datepicker-overlay',
  props: {
    opened: {
      type: Boolean,
      required: true,
    },
    handleOpenDialog: {
      type: Function,
    },
  },
};
</script>

<style scoped>
.datepicker-overlay {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.541176);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  will-change: opacity;
  transform: translateZ(0px);
  transition: left 0ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 400ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  z-index: 1400;
}
</style>