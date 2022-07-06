<template>
  <div>
    <p>
      {{ $t("key1") }}
    </p>
    <p>
      {{ $t("a") }}
    </p>
    <p>
      {{ $t("b") }}
    </p>
    <button @click="change('cn')">change to cn</button>
    <button @click="change('fr')">change to fr</button>
    <button @click="change('en')">reset</button>
  </div>
</template>

<script>
export default {
  methods: {
    change(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>
