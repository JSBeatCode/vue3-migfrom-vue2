<template>
  <div class="todo-list">
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @toggle-todo="handleToggle" @delete-todo="handleDelete" />
    <div v-if="todos.length === 0" class="empty-state">{{ emptyMessage }}</div>
  </div>
</template>
<script>
import TodoItem from './TodoItem.vue';
export default {
  name: 'TodoList',
  components: { TodoItem },
  props: {
    todos: { type: Array, required: true },
    emptyMessage: { type: String, default: '할 일을 추가해보세요!' }
  },
  methods: {
    handleToggle(todoId) {
      this.$emit('toggle-todo', todoId);
    },
    handleDelete(todoId) {
      this.$emit('delete-todo', todoId);
    }
  }
};
</script>
<style scoped>
.todo-list { margin-bottom: 20px; }
.empty-state { text-align: center; color: #888; padding: 24px; }
</style>
