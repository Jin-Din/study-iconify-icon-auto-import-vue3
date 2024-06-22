<template>
  <div class="card">
    <div class="title">
      <slot name="title">{{ props.title }}</slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, withDefaults } from "vue";
interface IProps {
  title?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  title: "",
});
</script>

<style lang="scss" scoped>
.card {
  .title {
    font-size: 1.2rem;
    font-weight: bold;
    padding: 1rem;
  }
}
</style>
