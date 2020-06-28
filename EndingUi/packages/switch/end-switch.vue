<template lang="pug">
.end-switch
  .wrapper
    span
      slot
    div(
      :class="[{closed: !checked}, 'switch-box']"
      @click="handleChange(value)")
      span(:class="{closed: !checked}")
    input(
      type="checkbox"
      @change="handleChange"
      :true-value="activeValue"
      :false-value="inactiveValue"
      :disabled="disabled"
      :value="value")
</template>

<script>
 export default {
  name: "EndSwitch",
  data() {
    return {}
  },
  props: {
    value: {
    type: [Boolean, String, Number],
    default: false
    },
    activeValue: {
    type: [Boolean, String, Number],
    default: true
    },
    inactiveValue: {
    type: [Boolean, String, Number],
    default: false
    },
    disabled: {
    type: Boolean,
    default: false
    }
  },
  computed: {
    checked() {
    return this.value === this.activeValue;
    }
  },
  methods: {
    handleChange(value) {
    this.$emit('input', !this.checked ? this.activeValue : this.inactiveValue);
    }
  }
 }
</script>