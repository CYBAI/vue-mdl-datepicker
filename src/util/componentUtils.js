import Vue from 'vue';

function getComponentRoot(vm) {
  if (!vm) {
    return new Vue();
  }

  return (vm.$parent && vm.$parent.$refs.mdlDatepicker) ?
    vm.$parent : getComponentRoot(vm.$parent);
}

export default {
  getComponentRoot,
};
