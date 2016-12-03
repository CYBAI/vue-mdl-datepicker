import Vue from 'vue';

function nextTick(vm) {
  return new Promise((resolve) => {
    if (!vm) {
      Vue.nextTick(resolve);
    } else {
      vm.$nextTick(resolve);
    }
  });
}

export default {
  nextTick,
};
