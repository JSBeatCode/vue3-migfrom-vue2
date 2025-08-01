<template>
  <div :class="['todo-item', { completed: todo.completed }]">
    <input type="checkbox" :checked="todo.completed" @change="handleToggle" class="todo-checkbox" />
    <span class="todo-text">{{ todo.text }}</span>
    <span class="todo-date">{{ formatDate(todo.createdAt) }}</span>
    <button @click="handleDelete" class="delete-btn">🗑️</button>
  </div>
</template>
<script>
export default {
  name: 'TodoItem',
  props: { todo: { type: Object, required: true } },
  methods: {
    handleToggle() {
      this.$emit('toggle-todo', this.todo.id);
    },
    handleDelete() {
      this.$emit('delete-todo', this.todo.id);
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString('ko-KR');
    }
  }
};
</script>
<style scoped>
.todo-item { display: flex; align-items: center; gap: 12px; padding: 16px; border: 1px solid #e1e8ed; border-radius: 8px; margin-bottom: 8px; background: white; transition: all 0.3s; }
.todo-item.completed { text-decoration: line-through; color: #aaa; }
.todo-item:hover { box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
.todo-checkbox { accent-color: #007bff; }
.delete-btn { background: none; border: none; cursor: pointer; font-size: 18px; color: #dc3545; }
.todo-date { font-size: 12px; color: #888; margin-left: auto; }
</style>
