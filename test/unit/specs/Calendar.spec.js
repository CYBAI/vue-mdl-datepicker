import chai from 'chai';
import Vue from 'vue';
import Calendar from 'src/components/Calendar';

import { nextTick } from '../utils';

chai.should();

describe('Calendar.vue', () => {
  let el;

  beforeEach(() => {
    el = document.createElement('div');
  });

  it('should render contents correctly', () => {
    const today = new Date();
    const vm = new Vue({
      render: h => h(
        Calendar, {
          props: {
            autoOk: false,
            minDate: new Date(today.getFullYear() - 1, today.getMonth(), 1),
            maxDate: new Date(today.getFullYear() + 1, today.getMonth(), 15),
            firstDayOfWeek: 0,
            selectedDate: today,
          },
        }),
    }).$mount(el);

    should.exist(vm.$el);
    vm.$el.className.should.be.eql('calendar-month-root');

    vm.$el.childNodes[0].className.should.be.eql('calendar-month-year-selection');
    vm.$el.childNodes[2].className.should.be.eql('week-text-row');
    vm.$el.childNodes[4].className.should.be.eql('calendar-month-container');
  });

  it('should show calendar-year when click year-selection', (done) => {
    const today = new Date();
    const vm = new Vue({
      render: h => h(
        Calendar, {
          props: {
            autoOk: false,
            minDate: new Date(today.getFullYear() - 1, today.getMonth(), 1),
            maxDate: new Date(today.getFullYear() + 1, today.getMonth(), 15),
            firstDayOfWeek: 0,
            selectedDate: today,
          },
        }),
    }).$mount(el);

    should.exist(vm.$el);
    const thisComponent = vm.$children[0];
    thisComponent.selectedType.should.be.eql('month');

    thisComponent.componentRoot.$emit('update-selected-type', 'year');

    nextTick(vm)
      .then(() => {
        thisComponent.selectedType.should.be.eql('year');
      })
      .then(done, done);
  });
});
