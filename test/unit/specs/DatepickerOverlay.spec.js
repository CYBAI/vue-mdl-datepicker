import chai from 'chai';
import Vue from 'vue';
import DatepickerOverlay from 'src/components/DatepickerOverlay';

import { nextTick } from '../utils';

chai.should();

describe('DatepickerOverlay.vue', () => {
  let el;

  beforeEach(() => {
    el = document.createElement('div');
  });

  it('should not show overlay', () => {
    const vm = new Vue({
      render: h => h(
        DatepickerOverlay, {
          props: {
            opened: false,
          },
        }),
    }).$mount(el);

    should.exist(vm.$el);
    vm.$el.className.should.be.eql('datepicker-overlay');
    vm.$el.style.display.should.be.eql('none');
  });

  it('should show overlay', () => {
    const vm = new Vue({
      render: h => h(
        DatepickerOverlay, {
          props: {
            opened: true,
          },
        }),
    }).$mount(el);

    should.exist(vm.$el);
    vm.$el.className.should.be.eql('datepicker-overlay');
    vm.$el.style.display.should.be.eql('');
  });

  it('should hide overlay on click correctly', (done) => {
    const vm = new Vue({
      render: h => h(
        DatepickerOverlay, {
          props: {
            opened: true,
            handleOpenDialog: function handleOpenDialog(opened) {
              this.clicked = opened;
            },
          },
        }),
    }).$mount(el);

    should.exist(vm.$el);
    const thisComponent = vm.$children[0];

    should.not.exist(thisComponent.clicked);

    thisComponent.$el.click();

    nextTick(vm)
      .then(() => {
        thisComponent.clicked.should.be.false;
      })
      .then(done, done);
  });
});
