import webcam from "./webcam.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("v-webcam", webcam);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

webcam.install = install;

export default webcam;