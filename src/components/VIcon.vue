<template>
  <i class="v-icon" :style="iconStyle">
    <slot>
      <!-- <component :is="componentIcon" /> -->
    </slot>
  </i>
</template>
<script setup lang="ts">
import { computed } from "vue";

interface IProps {
  color?: string;
  size?: number | string;
}

const props = withDefaults(defineProps<IProps>(), {
  // size: 20, //默认大小
  // color: "red", //默认颜色
});

const iconStyle = computed(() => {
  let fontSize = props.size;
  const { size, color } = props;
  if (typeof size == "number") fontSize = `${size}px`;
  else {
    fontSize = ["px", "rem", "em"].some((item) => size?.toLocaleLowerCase().endsWith(item)) ? size : `${size}px`;
  }
  return {
    fontSize,
    color: props.color,
  };
});
</script>
<style scoped>
.v-icon {
  display: inline-block;
  /* width: 1em;
  height: 1em;
  font-size: 1em; */
}

.v-icon > svg {
  width: 100%;
  height: 100%;
}
</style>
