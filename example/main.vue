<template>
  <div id="app" class="component">
    <div>{{date1}}</div>
    <mdl-datepicker
      v-model="date1"
      :default="date1"
      :maxDate="date1Max"
    ></mdl-datepicker>

    <div>{{date2}}</div>
    <mdl-datepicker
      v-model="date2"
      :autoOk="true"
      :disableYearSelection="true"
      :formatDate="formatDate"
    ></mdl-datepicker>

    <div>{{date3}}</div>
    <mdl-datepicker
      v-model="date3"
      :minDate="date3Min"
      :maxDate="date3Max"
      :shouldDisableDate="disableWeekends"
    ></mdl-datepicker>
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
    const today = new Date();

    return {
      date1: new Date(today.getFullYear(), today.getMonth(), 1),
      date1Max: new Date(today.getFullYear(), today.getMonth(), 15),
      date2: today,
      date3: today,
      date3Min: new Date(today.getFullYear(), today.getMonth(), 1),
      date3Max: new Date(today.getFullYear(), today.getMonth(), 25),
    };
  },
  methods: {
    disableWeekends(date) {
      return date.getDay() === 0 || date.getDay() === 6;
    },
    formatDate(date) {
      return date ? date.toDateString() : null;
    },
  },
};
</script>
