import chai from 'chai';
import Vue from 'vue';
import CalendarYear from 'src/components/CalendarYear';

chai.should();

describe('CalendarYear.vue', () => {
  let el;
  let vm;

  beforeEach(() => {
    const today = new Date();
    el = document.createElement('div');
    vm = new Vue({
      render: h => h(
        CalendarYear, {
          props: {
            minDate: new Date(today.getFullYear() - 1, today.getMonth(), 1),
            maxDate: new Date(today.getFullYear() + 1, today.getMonth(), 15),
            selectedDate: today,
          },
        },
      ),
    }).$mount(el);
  });

  it('should render correct contents', () => {
    const today = new Date();

    should.exist(vm.$el);
    vm.$el.className.should.be.eql('calendar-year-container');

    const yearView = vm.$el.childNodes[0];
    yearView.className.should.be.eql('calendar-year-view');

    const yearViewContainer = yearView.childNodes[0];
    yearViewContainer.className.should.be.eql('calendar-year-view-container');

    yearViewContainer.childNodes.should.have.length(3);
    Array.from(yearViewContainer.childNodes).forEach((yearButton, idx) => {
      yearButton.id.should.be.contain((today.getFullYear() + idx) - 1);
    });
  });
});
