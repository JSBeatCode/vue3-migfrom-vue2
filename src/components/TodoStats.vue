<template>
  <div class="stats">
    <span>전체: {{ totalCount }}</span>
    <span>완료: {{ completedCount }}</span>
    <span>미완료: {{ remainingCount }}</span>
  </div>
</template>

<script>
export default {
  name: 'TodoStats',
  props: {
    totalCount: {
      type: Number,
      required: true
    },
    completedCount: {
      type: Number,
      required: true
    },
    remainingCount: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
.stats {
  display: flex;
  justify-content: space-around;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  font-size: 14px;
  color: #6c757d;
}

.stats span {
  font-weight: 600;
}
</style>