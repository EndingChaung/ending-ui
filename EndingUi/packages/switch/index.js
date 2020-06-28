// EndSwitch 是对应组件的名字，要记得在 moor-switch.vue 文件中还是 name 属性哦
import EndSwitch from './end-switch.vue';
EndSwitch.install = Vue => Vue.component(EndSwitch.name, EndSwitch);
export default EndSwitch;
