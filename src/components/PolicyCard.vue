<template>
  <div class="card">
    <div class="card-title">{{ title }}</div>
    <div v-if="source" class="card-subtitle">
      📖 {{ source }}
      <a v-if="url" :href="url" target="_blank" style="margin-left:6px;">查看原文 →</a>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PolicyCard',
  props: {
    title: String,
    source: String,
    url: String
  }
}
</script>
