<template>
  <div id="app" class="component">
    <div>{{date}}</div>
    <button @click="clickToShowDate">Click</button>
    <mdl-datepicker ref="date"></mdl-datepicker>
  </div>
</template>

<script>
import MdlDatepicker from './Datepicker';

export default {
  name: 'app',
  components: {
    MdlDatepicker,
  },
  data() {
    return {
      date: undefined,
    };
  },
  methods: {
    clickToShowDate() {
      this.date = this.$refs.date.selected;
    },
  },
};
</script>
