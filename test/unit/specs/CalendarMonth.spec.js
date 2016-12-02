import chai from 'chai';
import Vue from 'vue';
import CalendarMonth from 'src/components/CalendarMonth';

chai.should();

describe('CalendarMonth.vue', () => {
  let el;
  let vm;

  beforeEach(() => {
    el = document.createElement('div');
  });

  it('should render correct contents', () => {
    const today = new Date();
    vm = new Vue({
      render: h => h(
        CalendarMonth, {
          props: {
            autoOk: false,
            minDate: new Date(today.getFullYear() - 1, today.getMonth(), 1),
            maxDate: new Date(today.getFullYear() + 1, today.getMonth(), 15),
            displayDate: today,
            selectedDate: today,
            firstDayOfWeek: 0,
          },
        },
      ),
    }).$mount(el);

    should.exist(vm.$el);
    vm.$el.className.should.be.eql('calendar-month-container');
    vm.$el.childNodes[0].className.should.be.eql('calendar-weekdays-container');
    vm.$el.childNodes[0].childNodes[0].className
      .should.be.eql('calendar-month-week-column');
    vm.$el.childNodes[0].childNodes[0].childNodes
      .should.have.length(vm.$children[0].weekArray.length);
  });
});
