import Vue from "vue";

const MapleNotification = {
  render(){}
};

MapleNotification.newInstance = (properties, callback) => {
  const { getContainer, style, classNames, ...props } = properties || {};
  const div = document.createElement("div");
  if (getContainer) {
    const root = getContainer();
    root.appendChild(div);
  } else {
    document.body.appendChild(div);
  }
  const V = Vue;
  return new V({
    el: div,
    mounted() {
      const self = this
      this.$nextTick(()=>{
        callback({

        })
      })
     },
    render() {
      const p = {};
      return <MapleNotification {...p} />;
    },
  });
};

export default MapleNotification;
