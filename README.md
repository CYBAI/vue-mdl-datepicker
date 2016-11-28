# vue-mdl-datepicker

> Material Design Datepicker for Vue.js

## Install

```sh
# via yarn
yarn add vue-mdl-datepicker

# or via npm
npm install --save vue-mdl-datepicker
```

## Usage
```vue
<template>
  <div>{{date}}</div>
  <mdl-datepicker
    v-model="date"
    :default="date"
  ></mdl-datepicker>
</template>

<script>
import 'vue-mdl-datepicker/dist/vue-mdl-datepicker.css';
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
- [x] Default date
- [x] First day of week
- [ ] Format date
- [x] Max date
- [x] Min date
- [x] Should disabled date
- [ ] Disable year selection
- [ ] Portrait / Landscape
- [ ] Transitions
- [ ] Unit tests

# LICENSE

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016 CYBAI

