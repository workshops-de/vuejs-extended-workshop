<template>
  <label>
    {{ label }}
    <input
      v-bind="$attrs"
      v-on="listeners"
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    type() {
      return this.$attrs.type || 'text';
    },
    attrs() {
      const { type, ...attrs } = this.$attrs;
      return attrs;
    },
    listeners() {
      const { input, ...listeners } = this.$listeners;
      return listeners;
    },
  },
};
</script>
