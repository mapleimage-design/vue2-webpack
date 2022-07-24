let defaultDuration = 3;
let defaultTop;
let messageInstance;

/**
 * toast
 * @param {{duration:number, maxCount?: number}} options
 * @returns
 */
const message = (options) => {
  /**
   * @type {HTMLElement[]}
   */
  const instances = [];
  function info(string) {
    show("info", string);
  }
  function error(string) {
    show("error", string);
  }
  function warn(string) {
    show("warn", string);
  }
  function show(type, msg) {
    const div = document.createElement("div");
    div.classList.add("container");

    const icon = document.createElement("i");
    icon.textContent = type;
    const span = document.createElement("span");
    span.textContent = msg;

    div.appendChild(icon);
    div.appendChild(span);

    instances.push(div);
  }

  function showInDocument() {
    if (options?.maxCount) {
      //
    } else {
      for (let i = 0; i < instances.length; i++) {
        const instance = instances[i];
        document.body.appendChild(instance);

        const height = +getComputedStyle(instance)["height"].replace(/px/, "");

        const top = `${50 + height + 20 * i}px`;
        console.log(top, i);

        instance.style.top = top;
        const timeout = options?.duration || 5 * 1000;
        setTimeout(() => {
          instances.splice(i, 1);
          document.body.removeChild(instance);
        }, timeout);
      }
    }
  }

  return {
    info,
    error,
    warn,
  };
};

export default message;
