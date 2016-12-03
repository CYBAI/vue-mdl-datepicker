# vue-mdl-datepicker

[![Build Status](http://img.shields.io/travis/CYBAI/vue-mdl-datepicker.svg?style=flat-square)](https://travis-ci.org/CYBAI/vue-mdl-datepicker)

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

## Props

|         Name         |    Type    |      Default     |                       Description                     |
|----------------------|------------|------------------|-------------------------------------------------------|
|    firstDayOfWeek    |  `Number`  |         0        |  The fist day of the week, where 0 represents Sunday. |
|        default       |   `Date`   |                  |  Default selected date                                |
|         autoOk       |  `Boolean` |       false      |  If true, automatically ok and close datepicker       |
| disableYearSelection |  `Boolean` |       false      |  If true, year selection will be disabled             |
|        maxDate       |   `Date`   |  date + 100 year |  Maximum selected date                                |
|        minDate       |   `Date`   |  date - 100 year |  Minimum selected date                                |
|   shouldDisableDate  | `Function` |                  |  Function return those days should be disabled        |
|      formatDate      | `Function` |     YYYY-MM-dd   |  Function return format of displayed date             |
|      orientation     |  `String`  |    `portrait`    |  Orientation of datepicker, `portrait` or `landscape` |

### TODO
- [ ] Transitions

# LICENSE

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016 CYBAI

