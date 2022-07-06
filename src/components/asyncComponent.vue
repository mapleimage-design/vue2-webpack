<template>
  <button @click="fetchResults" id="btn">{{ value }}</button>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      value: "",
    };
  },

  methods: {
    async fetchResults() {
      const response = await axios.get("mock/service");
      this.value = response.data;
    },
  },
};
</script>
