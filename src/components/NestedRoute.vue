<template>
  <div>
    Nested Route
    <div class="username">{{ $route.query.username }}</div>
  </div>
</template>

<script>
// import { bustCache } from "@/bust-cache.js";
export default {
  name: "NestedRoute",
  beforeRouteLeave(to, from, next) {
    // bustCache();
    next();
  },
};
</script>
