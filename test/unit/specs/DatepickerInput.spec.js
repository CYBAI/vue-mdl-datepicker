import chai from 'chai';
import Vue from 'vue';
import DatepickerInput from 'src/components/DatepickerInput';

import { nextTick } from '../utils';

chai.should();

describe('DatepickerInput.vue', () => {
  let el;

  beforeEach(() => {
    el = document.createElement('div');
  });

  it('should render contents correctly', () => {
    const vm = new Vue({
      render: h => h(
        DatepickerInput, {
          props: {
            formatDate: function formatDate(date) {
              return date.toDateString();
            },
            date: new Date(),
          },
        }),
    }).$mount(el);

    should.exist(vm.$el);
    const inputContainer = vm.$el.firstChild;

    inputContainer.className.should.be.eql('datepicker-input-container');

    inputContainer.childNodes[0].className.should.be.eql('datepicker-input-text');
    inputContainer.childNodes[0].style.opacity.should.be.eql('0');
    inputContainer.childNodes[0].textContent.should.be.eql('Choose a date...');

    inputContainer.childNodes[2].className.should.be.eql('datepicker-input-portrait');
    inputContainer.childNodes[2].nodeName.should.be.eql('INPUT');

    const underlines = inputContainer.childNodes[4];
    underlines.firstChild.className.should.be.eql('datepicker-input-underline');
    underlines.lastChild.className.should.be.eql('datepicker-input-underline-animation');
  });

  it('should update opened on click', (done) => {
    const vm = new Vue({
      render: h => h(
        DatepickerInput, {
          props: {
            formatDate: function formatDate(date) {
              return date.toDateString();
            },
            date: new Date(),
            handleOpenDialog: function handleOpenDialog(opened) {
              this.clicked = opened;
            },
          },
        }),
    }).$mount(el);

    should.exist(vm.$el);
    const thisComponent = vm.$children[0];
    const input = thisComponent.$el.firstChild.childNodes[2];

    should.not.exist(thisComponent.clicked);
    input.click();

    nextTick(vm)
      .then(() => {
        thisComponent.clicked.should.be.true;
      })
      .then(done, done);
  });
});
