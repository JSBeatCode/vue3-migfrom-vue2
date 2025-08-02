<template>
  <div :class="['todo-item', { completed: todo.completed }]">
    <input 
      type="checkbox"
      :checked="todo.completed"
      @change="handleToggle"
      class="todo-checkbox"
    />
    <span class="todo-text">{{ $capitalize(todo.text) }}</span>
    <span class="todo-date">{{ $formatDate(todo.createdAt) }}</span>
    <button @click="handleDelete" class="delete-btn">🗑️</button>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleToggle() {
      this.$emit('toggle-todo', this.todo.id);
    },
    handleDelete() {
      this.$emit('delete-todo', this.todo.id);
    },
  }
};
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  margin-bottom: 8px;
  background: white;
  transition: all 0.3s;
}

.todo-item:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.todo-item.completed {
  opacity: 0.6;
  background: #f8f9fa;
}

.todo-checkbox {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.todo-text {
  flex: 1;
  font-size: 16px;
  color: #2c3e50;
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #7f8c8d;
}

.todo-date {
  font-size: 12px;
  color: #95a5a6;
  margin-left: auto;
}

.delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.delete-btn:hover {
  background: #ffebee;
}
</style>