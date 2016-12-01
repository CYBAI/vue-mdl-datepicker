import chai from 'chai';
import Vue from 'vue';
import CalendarDialog from 'src/components/CalendarDialog';

chai.should();

describe('CalendarDialog.vue', () => {
  let el;

  beforeEach(() => {
    el = document.createElement('div');
  });

  it('should render contents correctly', () => {
    const today = new Date();
    const vm = new Vue({
      render: h => h(
        CalendarDialog, {
          props: {
            autoOk: false,
            minDate: new Date(today.getFullYear() - 1, today.getMonth(), 1),
            maxDate: new Date(today.getFullYear() + 1, today.getMonth(), 15),
            firstDayOfWeek: 0,
            handleOpenDialog: function handleOpenDialog(opened) {
              this.clicked = opened;
            },
            selectedDate: today,
          },
        }),
    }).$mount(el);

    should.exist(vm.$el);
    vm.$el.className.should.be.eql('calendar-dialog');
    vm.$children[0].$el.firstChild.className.should.be.eql('calendar-month-root');
    vm.$children[0].$el.lastChild.className.should.be.eql('calendar-check-btn-section');
  });
});
