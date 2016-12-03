import chai from 'chai';
import Vue from 'vue';
import DayButton from 'src/components/DayButton';

import { nextTick } from '../utils';

chai.should();

describe('DayButton.vue', () => {
  let el;
  let vm;

  beforeEach(() => {
    el = document.createElement('div');
  });

  it('should render correct contents', () => {
    const today = new Date();
    vm = new Vue({
      render: h => h(
        DayButton, {
          props: {
            day: today,
            autoOk: false,
            disabled: false,
            selected: today,
          },
        },
      ),
    }).$mount(el);

    should.exist(vm.$el);
    vm.$el.className.should.be.eql('calendar-day-button');

    const thisComponent = vm.$children[0];

    thisComponent.$el.firstChild.className.should.be.eql('calendar-day-bg calendar-day-bg-selected');
    thisComponent.$el.lastChild.className.should.be.eql('calendar-day-text calendar-day-selected calendar-day-selected-text');
  });

  it('should render empty day', () => {
    const today = new Date();
    vm = new Vue({
      render: h => h(
        DayButton, {
          props: {
            day: null,
            autoOk: false,
            disabled: false,
            selected: today,
          },
        },
      ),
    }).$mount(el);

    should.exist(vm.$el);
    vm.$el.className.should.be.eql('calendar-empty-day');
  });

  it('should change selected day on click', (done) => {
    const today = new Date();
    const prevDay = new Date(
      today.getFullYear(), today.getMonth(), today.getDate() - 1
    );
    vm = new Vue({
      data: {
        selected: prevDay,
      },
      render: function render(h) {
        return h(
          DayButton, {
            props: {
              day: today,
              autoOk: false,
              disabled: false,
              selected: this.selected,
            },
          },
        );
      },
    }).$mount(el);

    should.exist(vm.$el);

    const thisComponent = vm.$children[0];

    thisComponent.componentRoot.$on(
      'update-selected',
      function update(selected) { // eslint-disable-line
        vm.selected = selected;
      }
    );

    thisComponent.isSelected.should.be.false;
    thisComponent.isToday.should.be.true;

    thisComponent.$el.click();

    nextTick(vm)
      .then(() => {
        thisComponent.isSelected.should.be.true;
        thisComponent.isToday.should.be.true;
      })
      .then(done, done);
  });
});
