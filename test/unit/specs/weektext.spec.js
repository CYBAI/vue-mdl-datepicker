import chai from 'chai';
import Vue from 'vue';
import WeekText from 'src/components/WeekText';

chai.should();

describe('WeekText.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(WeekText),
    });
    vm.$el.className.should.be.eql('week-text-row');
  });
});
