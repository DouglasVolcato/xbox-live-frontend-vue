<template>
  <div v-html="content" />
</template>

<script setup>
const props = defineProps({
  content: String,
});
</script>
