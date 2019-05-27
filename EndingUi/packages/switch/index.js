// UniSwitch 是对应组件的名字，要记得在 moor-switch.vue 文件中还是 name 属性哦
import UniSwitch from './uni-switch.vue';
UniSwitch.install = Vue => Vue.component(UniSwitch.name, UniSwitch);
export default UniSwitch;
