<template>
  <div class="policy-item">
    <div class="policy-label">{{ label }}</div>
    <div class="policy-content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: 'PolicyItem',
  props: {
    label: String,
    content: String
  }
}
</script>
