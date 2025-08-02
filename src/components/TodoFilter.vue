<template>
  <div class="filters">
    <button 
      v-for="filter in filters"
      :key="filter.key"
      @click="handleFilterChange(filter.key)"
      :class="['filter-btn', { active: currentFilter === filter.key }]"
    >
      {{ filter.label }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'TodoFilter',
  props: {
    currentFilter: {
      type: String,
      default: 'all'
    }
  },
  data() {
    return {
      filters: [
        { key: 'all', label: '전체' },
        { key: 'active', label: '진행중' },
        { key: 'completed', label: '완료' }
      ]
    };
  },
  methods: {
    handleFilterChange(filterKey) {
      this.$emit('filter-change', filterKey);
    }
  }
};
</script>

<style scoped>
.filters {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  justify-content: center;
}

.filter-btn {
  padding: 8px 16px;
  border: 2px solid #e1e8ed;
  background: white;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

.filter-btn:hover {
  border-color: #3498db;
}

.filter-btn.active {
  background: #3498db;
  color: white;
  border-color: #3498db;
}
</style>