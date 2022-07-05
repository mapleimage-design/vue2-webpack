<template>
  <button @click="fetchResults" id="btn">{{ value }}</button>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      value: null,
    };
  },

  methods: {
    async fetchResults() {
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/posts"
      );
      this.value = response.data;
    },
  },
};
</script>
