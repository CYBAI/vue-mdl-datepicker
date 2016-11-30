import chai from 'chai';
import Vue from 'vue';
import CalendarYearButton from 'src/components/CalendarYearButton';

import { nextTick } from '../utils';

chai.should();

describe('CalendarYearButton.vue', () => {
  let el;
  let vm;

  beforeEach(() => {
    const today = new Date();
    el = document.createElement('div');
    vm = new Vue({
      render: h => h(
        CalendarYearButton, {
          props: {
            selectedDate: today,
            selectedYear: today.getFullYear(),
            year: today.getFullYear() + 1,
          },
        }
      ),
    }).$mount(el);
  });

  it('should render correct contents', () => {
    should.exist(vm.$el);
    vm.$el.nodeName.should.be.eql('BUTTON');
    vm.$el.className.should.be.eql('calendar-year-btn');

    const defaultClassList = [
      'calendar-year-text',
      'calendar-year-text-not-selected',
    ];

    const span = vm.$el.childNodes[0];
    span.className.should.be.eql(defaultClassList.join(' '));
    span.textContent.should.be.eql(`${vm.$children[0].year}`);
  });

  xit('should click year button correctly', (done) => {
    should.exist(vm.$el);

    const thisComponent = vm.$children[0];
    thisComponent.selectedYear.should.be.eql(thisComponent.year - 1);

    thisComponent.$el.click();

    nextTick(vm)
      .then(() => {
        thisComponent.selectedYear.should.be.eql(thisComponent.year);
      })
      .then(done, done);
  });
});
