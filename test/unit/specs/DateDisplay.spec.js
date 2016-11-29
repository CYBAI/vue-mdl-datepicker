import chai from 'chai';
import Vue from 'vue';
import DateDisplay from 'src/components/DateDisplay';

import { dayList, monthList } from 'src/util/dateUtils';
import { nextTick } from '../utils';

chai.should();

describe('DateDisplay.vue', () => {
  let el;

  beforeEach(() => {
    el = document.createElement('div');
  });

  it('should render contents correctly', () => {
    const vm = new Vue({
      render: h => h(
        DateDisplay, {
          props: {
            selectedDate: new Date(),
            disableYearSelection: false,
          },
        }),
    }).$mount(el);

    should.exist(vm.$el);
    vm.$el.className.should.be.eql('date-display');

    const yearSelection = vm.$el.firstChild;
    const dateSelection = vm.$el.lastChild;

    should.exist(yearSelection);
    should.exist(dateSelection);

    yearSelection.className.should.be.eql('datepicker-year-selection');
    dateSelection.className.should.be.eql('datepicker-date-selection');

    yearSelection.childNodes[0].childNodes[0].style.cursor
      .should.be.eql('pointer');
    dateSelection.childNodes[0].childNodes[0].style.cursor
      .should.be.eql('default');

    const thisComponent = vm.$children[0];

    const displayDate = `${dayList[thisComponent.selectedDate.getDay()]}, ${monthList[thisComponent.selectedDate.getMonth()]} ${thisComponent.selectedDate.getDate()}`;
    thisComponent.displayDate.should.be.eql(displayDate);
    thisComponent.year.should.be.eql(thisComponent.selectedDate.getFullYear());
  });

  it('should change selected type on click', (done) => {
    const vm = new Vue({
      render: h => h(
        DateDisplay, {
          props: {
            selectedDate: new Date(),
            disableYearSelection: false,
          },
        }),
    }).$mount(el);

    should.exist(vm.$el);

    const thisComponent = vm.$children[0];
    const yearSelection = vm.$el.firstChild;
    const dateSelection = vm.$el.lastChild;

    thisComponent.selectedType.should.be.eql('month');
    yearSelection.childNodes[0].childNodes[0].click();

    nextTick(vm)
      .then(() => {
        dateSelection.childNodes[0].childNodes[0].click();
        return nextTick(vm);
      })
      .then(() => {
        thisComponent.selectedType.should.be.eql('month');
      })
      .then(done, done);
  });
});
