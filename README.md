# vue-mdl-datepicker

> Material Design Datepicker for Vue.js

## Usage
```vue
<template>
  <div>{{date}}</div>
  <mdl-datepicker v-model="date"></mdl-datepicker>
</template>

<script>
import MdlDatepicker from 'vue-mdl-datepicker';

export default {
  name: 'MyComponent',
  components: { MdlDatepicker },
  data() {
    return {
      date: new Date(),
    };
  },
};
</script>
```

### TODO
- [x] Select date
- [x] Select year
- [ ] Auto ok
- [ ] Default date
- [x] First day of week
- [ ] Format date
- [ ] Max date
- [ ] Min date
- [ ] Should disabled date
- [ ] Disable year selection
- [ ] Portrait / Landscape
- [ ] Transitions
- [ ] Unit tests
