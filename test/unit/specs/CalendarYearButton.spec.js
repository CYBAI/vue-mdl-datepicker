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
      data: {
        selected: today,
        selectedYear: today.getFullYear(),
      },
      render: function render(h) {
        return h(
          CalendarYearButton, {
            props: {
              selectedDate: this.selected,
              selectedYear: this.selectedYear,
              year: today.getFullYear() + 1,
            },
          }
        );
      },
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

  it('should click year button correctly', (done) => {
    should.exist(vm.$el);

    const thisComponent = vm.$children[0];

    thisComponent.componentRoot.$on(
      'update-selected',
      function update(selected) { // eslint-disable-line
        vm.selected = selected;
        vm.selectedYear = selected.getFullYear();
      }
    );

    thisComponent.selectedYear.should.be.eql(thisComponent.year - 1);

    thisComponent.$el.click();

    nextTick(vm)
      .then(() => {
        thisComponent.selectedYear.should.be.eql(thisComponent.year);
      })
      .then(done, done);
  });
});
