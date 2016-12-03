import chai from 'chai';
import Vue from 'vue';
import WeekRow from 'src/components/WeekRow';

import { getWeekArray } from 'src/util/dateUtils';

chai.should();

describe('WeekRow.vue', () => {
  const today = new Date();
  const week = getWeekArray(today, 0)[0];
  let el;

  beforeEach(() => {
    el = document.createElement('div');
  });

  it('should render contents correctly', () => {
    const vm = new Vue({
      render: h => h(
        WeekRow, {
          props: {
            week,
            autoOk: false,
            minDate: new Date(today.getFullYear() - 1, today.getMonth(), 1),
            maxDate: new Date(today.getFullYear() + 1, today.getMonth(), 15),
            selectedDate: today,
          },
        }),
    }).$mount(el);

    should.exist(vm.$el);
    vm.$el.className.should.be.eql('calendar-month-week-row');
    vm.$el.childNodes.should.have.length(7);
    Array.from(vm.$el.childNodes).forEach((dayButton, idx) => {
      if (week[idx]) {
        dayButton.nodeName.should.be.eql('BUTTON');
      } else {
        dayButton.className.should.be.eql('calendar-empty-day');
      }
    });
  });
});
