<template>
  <div>{{ count }}-{{ msg }}</div>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    // this.$emit("custom");
  },
};
</script>
