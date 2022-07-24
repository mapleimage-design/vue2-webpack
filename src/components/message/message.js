import Notification from "./notification";

/**
 * @type {number} 显示时长
 */
let defaultDuration = 3;
/**
 * @type {string} 距离顶部的距离
 * 50px
 */
let defaultTop;
let messageInstance;
/**
 * @type {number|string} 唯一值
 */
let key = 1;
/**
 * @type {string} 前缀class
 */
let preCls = "maple";
/**
 * @type {string} transition name
 */
let transitionName = "move-up";
/**
 * @type {()=> HTMLElement} 挂载容器
 */
let getContainer = () => document.body;
/**
 * @type {number} 最大显示个数
 */
let maxCount = 3;

function getMessageInstance(callback) {
  if (messageInstance) {
    callback(messageInstance);
    return;
  }
  Notification.newInstance(
    {
      preCls,
      transitionName,
      maxCount,
      getContainer,
      style: { top: defaultTop },
    },
    (instance) => {
      if (messageInstance) {
        callback(messageInstance);
      }
      messageInstance = instance;
      callback(instance);
    }
  );
}
/**
 * 提供静态方法/vue插件的形式
 */
const message = {
  /**
   *
   * @param {{maxCount: number, getContainer: ()=>void, preCls: string, duration: number, top: string}} options
   */
  config(options) {
    if (options.maxCount) {
      maxCount = options.maxCount;
    }
    if (options.getContainer) {
      getContainer = options.getContainer;
    }
    if (options.preCls) {
      preCls = options.preCls;
    }
    if (options.duration) {
      defaultDuration = options.duration;
    }
    if (options.top) {
      defaultTop = options.top;
    }
  },
  /**
   * 统一调用函数
   * @param {{duration:number, content:string | import("vue").VNode | (h)=>import("vue").VNode, onClose: () => void, type: 'loading'|'warning'|'error'|'success'|'info'}} args
   */
  show(args) {
    const duration = args.duration || defaultDuration;
    const iconType = {
      loading: "icon-loading",
      warn: "icon-warn",
      info: "icon-info",
      success: "icon-success",
      error: "icon-error",
    }[args.type];
    const target = args.key || key++;
    const closePromise = new Promise((resolve) => {
      const callback = () => {
        if (typeof args.onClose === "function") {
          args.onClose();
        }
        return resolve(true);
      };
      getMessageInstance((instance) => {
        instance.notice({
          key: target,
          duration,
          onClose: callback,
          content: (h) => {
            return (
              <div class="container">
                <i class={iconType}></i>
                <span>
                  {typeof args.content === "function"
                    ? args.content(h)
                    : args.content}
                </span>
              </div>
            );
          },
        });
      });
    });
    const result = () => {
      if (messageInstance) {
        messageInstance.removeNotice();
      }
    };
    result.then = (resolve, reject) => closePromise.then(resolve, reject);
    // result.promise = closePromise;
    // 返回一个promise
    return result;
  },
  destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  },
};

["loading", "warning", "error", "info", "success"].forEach((type) => {
  message[type] = (content, duration, onClose) => {
    // 可以是对象的形式传递参数
    if (
      Object.prototype.toString.call(content) === "[object Object]" &&
      !!content.content
    ) {
      return message.show({ ...content, type });
    }
    if (typeof duration === "function") {
      onClose = duration;
      duration = undefined;
    }
    return message.show({ content, duration, onClose, type });
  };
});
message.warn = message.warning;
export default message;
