import message from "./message";
import "./style.less";

export default {
  install(Vue, options) {
    Vue.prototype.$message = message(options);
  },
};
