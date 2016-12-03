import chai from 'chai';
import Vue from 'vue';
import CalendarCheckButton from 'src/components/CalendarCheckButton';

import { nextTick } from '../utils';

chai.should();

describe('CalendarCheckButton.vue', () => {
  let el;
  let vm;

  beforeEach(() => {
    el = document.createElement('div');
    vm = new Vue({
      render: h => h(
        CalendarCheckButton, {
          props: {
            text: 'OK',
            handleClick: function handleClick() {
              this.clicked = true;
            },
          },
        }
      ),
    }).$mount(el);
  });

  it('should render correct contents', () => {
    should.exist(vm.$el);
    vm.$el.nodeName.should.be.eql('BUTTON');
    vm.$el.className.should.be.eql('calendar-check-btn');

    const span = vm.$el.childNodes[0];
    span.className.should.be.eql('calendar-check-btn-text');
    span.textContent.should.be.eql('OK');
  });

  it('should trigger handleClick after click', (done) => {
    should.exist(vm.$el);
    should.not.exist(vm.$children[0].clicked);

    vm.$el.click();

    nextTick(vm)
      .then(() => {
        vm.$children[0].clicked.should.be.true;
      })
      .then(done, done);
  });
});
