<script setup lang="ts">
import { VPHomeContent } from "vitepress/theme";
// @ts-expect-error no types
import { data } from "./styles.data";

function getDateTime(time: number) {
  return new Date(time).toISOString();
}
</script>

<template>
  <div class="VPHome">
    <VPHomeContent>
      <Content />
      <div class="item-list-warpper">
        <ul class="item-list">
          <li v-for="item of data" :key="item.id" class="item-entry">
            <a :href="item.dir">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </VPHomeContent>
  </div>
</template>

<style scoped>
.VPHome {
  padding: 0 20% 5em 20%;
}
</style>
