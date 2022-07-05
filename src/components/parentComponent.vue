<template>
  <div>
    {{ msg }}
    <child-component @custom="onCustom" />
    <p v-if="emitted">Emitted!</p>
  </div>
</template>

<script>
import ChildComponent from "./childComponent.vue";

export default {
  name: "ParentComponent",
  components: { ChildComponent },
  props: {
    msg: {
      type: String,
    },
  },
  data() {
    return {
      emitted: false,
    };
  },
  methods: {
    onCustom() {
      this.emitted = true;
    },
  },
};
</script>
