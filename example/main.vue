<template>
  <div id="app" class="component">
    <div>{{date1}}</div>
    <mdl-datepicker v-model="date1"></mdl-datepicker>

    <div>{{date2}}</div>
    <mdl-datepicker v-model="date2"></mdl-datepicker>
  </div>
</template>

<script>
import MdlDatepicker from 'vue-mdl-datepicker';

export default {
  name: 'app',
  components: {
    MdlDatepicker,
  },
  data() {
    return {
      date1: new Date(),
      date2: new Date(),
    };
  },
};
</script>
