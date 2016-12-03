import chai from 'chai';
import Vue from 'vue';
import CalendarToolbar from 'src/components/CalendarToolbar';

import { monthFullList } from 'src/util/dateUtils';

import { nextTick } from '../utils';

chai.should();

describe('CalendarToolbar.vue', () => {
  let el;

  beforeEach(() => {
    el = document.createElement('div');
  });

  it('should render contents correctly', () => {
    const today = new Date();
    const vm = new Vue({
      render: h => h(
        CalendarToolbar, {
          props: {
            displayDate: today,
          },
        }),
    }).$mount(el);

    should.exist(vm.$el);
    vm.$el.className.should.be.eql('calendar-month-year-selection');

    const leftButton = vm.$el.childNodes[0];
    leftButton.className.should.be.eql('calendar-month-select-left');

    const container = vm.$el.childNodes[2];
    container.className.should.be.eql('calendar-month-year-text-container');
    container.childNodes[0].className.should.be.eql('calendar-month-year-text-animation');
    container.childNodes[0].childNodes[0].className.should.be.eql('calendar-month-year-text');
    container.childNodes[0].childNodes[0].textContent.should.be.eql(`${monthFullList[today.getMonth()]} ${today.getFullYear()}`);

    const rightButton = vm.$el.childNodes[4];
    rightButton.className.should.be.eql('calendar-month-select-right');
  });

  it('should go to previous month when clicking left-btn', (done) => {
    const today = new Date();
    const vm = new Vue({
      render: h => h(
        CalendarToolbar, {
          props: {
            displayDate: today,
          },
        }),
    }).$mount(el);

    should.exist(vm.$el);

    const thisComponent = vm.$children[0];
    thisComponent.showDate.should.be.eql(today);

    const leftButton = thisComponent.$el.firstChild;
    leftButton.click();

    nextTick(vm)
      .then(() => {
        thisComponent.showDate.should.be.eql(
          new Date(today.getFullYear(), today.getMonth() - 1, 15)
        );
      })
      .then(done, done);
  });

  it('should go to next month when clicking right-btn', (done) => {
    const today = new Date();
    const vm = new Vue({
      render: h => h(
        CalendarToolbar, {
          props: {
            displayDate: today,
          },
        }),
    }).$mount(el);

    should.exist(vm.$el);

    const thisComponent = vm.$children[0];
    thisComponent.showDate.should.be.eql(today);

    const rightButton = thisComponent.$el.lastChild;
    rightButton.click();

    nextTick(vm)
      .then(() => {
        thisComponent.showDate.should.be.eql(
          new Date(today.getFullYear(), today.getMonth() + 1, 15)
        );
      })
      .then(done, done);
  });
});
