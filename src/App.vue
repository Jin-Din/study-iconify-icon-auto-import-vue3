<script setup lang="ts">
import Card from "./components/Card.vue";
</script>

<template>
  <div class="root">
    <Card title="用 i 标签">
      <!-- 用 i 标签 -->
      <i style="font-size: 32px; color: red"> <icon-carbon-asset-confirm /></i>
      <i class="icon-class"> <icon-carbon-asset-confirm /></i>
    </Card>
    <Card title="直接使用 SVG 图标">
      <!-- 直接使用 SVG 图标 -->
      <icon-svg-official width="64" height="64" color="green" />
      <icon-ep-location-filled width="64" height="64" color="yellow" />
    </Card>
    <Card title="使用 v-icon 标签">
      <!-- 使用 v-icon 标签 -->
      <v-icon size="64" color="pink">
        <icon-carbon-aperture />
      </v-icon>
    </Card>
    <Card title="自定义图标文件夹 使用 v-icon 标签">
      <!-- 自定义图标文件夹 使用 v-icon 标签 -->
      <v-icon> <icon-svg-official /> </v-icon>
      <v-icon size="32"> <icon-svg-account /> </v-icon>
      <v-icon size="32"> <icon-svg-location /> </v-icon>
      <v-icon size="32" color="red"> <icon-svg-menu-fold /> </v-icon>
      <v-icon size="128" color="blue">
        <icon-svg-official />
      </v-icon>
    </Card>

    <Card title=" 来自于 @iconify-json/xxx 的使用">
      <!-- 来自于 @iconify-json/xxx -->
      <v-icon size="32" color="red"> <icon-ep-location-filled /> </v-icon>
      <v-icon size="32" color="red"> <icon-typcn-anchor-outline /> </v-icon>
      <v-icon class="icon-class"> <icon-carbon-aperture /> </v-icon>

      <!-- <v-icon icon="carbon:aperture" size="32" color="blue"> </v-icon> -->
    </Card>
  </div>
</template>

<style scoped>
.root {
  /* margin: auto; */
  /* height: 540px; */
  display: flex;
  flex-wrap: wrap;
}

.icon-class {
  font-size: 64px;
  color: rgb(97, 28, 129);
}
</style>
