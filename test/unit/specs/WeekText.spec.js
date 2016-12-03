import chai from 'chai';
import Vue from 'vue';
import WeekText from 'src/components/WeekText';
import { dayAbbr } from 'src/util/dateUtils';

chai.should();

describe('WeekText.vue', () => {
  let el;

  beforeEach(() => {
    el = document.createElement('div');
  });

  it('should render correct contents', () => {
    const vm = new Vue({
      render: h => h(WeekText),
    }).$mount(el);

    should.exist(vm.$el);
    vm.$el.className.should.be.eql('week-text-row');
    vm.$el.childNodes.should.have.length(7);
    Array.from(vm.$el.childNodes).forEach(($el) => {
      $el.className.should.be.eql('week-text');
    });
  });

  it('should setup default weekdays and firstDay correctly', () => {
    const vm = new Vue({
      render: h => h(WeekText),
    }).$mount(el);

    const thisComponent = vm.$children[0];

    should.exist(thisComponent.weekdays);
    thisComponent.weekdays.should.have.length(7);
    thisComponent.weekdays.should.be.eql(dayAbbr);

    should.exist(thisComponent.firstDay);
    thisComponent.firstDay.should.be.eql(0);
  });

  it('should setup weekdays and firstDay from props correctly', () => {
    const firstDayOfWeek = 1;
    const weekTextArray = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const vm = new Vue({
      render: h => h(WeekText, { props: { firstDayOfWeek } }),
    }).$mount(el);

    const thisComponent = vm.$children[0];

    should.exist(thisComponent.weekdays);
    thisComponent.weekdays.should.have.length(7);
    thisComponent.weekdays.should.be.eql(weekTextArray);

    should.exist(thisComponent.firstDay);
    thisComponent.firstDay.should.be.eql(1);
  });
});
