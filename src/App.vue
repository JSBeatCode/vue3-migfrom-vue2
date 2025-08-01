<script setup>
import { ref, computed } from 'vue';
import TodoInput from './components/TodoInput.vue';
import TodoFilter from './components/TodoFilter.vue';
import TodoList from './components/TodoList.vue';
import TodoStats from './components/TodoStats.vue';

const currentFilter = ref('all');
const todos = ref([]);

const filteredTodos = computed(() => {
  if (currentFilter.value === 'all') return todos.value;
  if (currentFilter.value === 'active') return todos.value.filter(todo => !todo.completed);
  if (currentFilter.value === 'completed') return todos.value.filter(todo => todo.completed);
  return todos.value;
});

const completedCount = computed(() => todos.value.filter(todo => todo.completed).length);
const remainingCount = computed(() => todos.value.filter(todo => !todo.completed).length);

function addTodo(text) {
  todos.value.push({ id: Date.now(), text, completed: false, createdAt: new Date() });
}
function toggleTodo(id) {
  const todo = todos.value.find(t => t.id === id);
  if (todo) todo.completed = !todo.completed;
}
function removeTodo(id) {
  todos.value = todos.value.filter(t => t.id !== id);
}
function handleFilterChange(filter) {
  currentFilter.value = filter;
}
function getEmptyMessage() {
  if (currentFilter.value === 'all') return '할 일이 없습니다.';
  if (currentFilter.value === 'active') return '진행 중인 할 일이 없습니다.';
  if (currentFilter.value === 'completed') return '완료된 할 일이 없습니다.';
  return '';
}
</script>

<template>
  <div id="app">
    <div class="container">
      <h1 class="title">📝 Vue3 TodoList</h1>
      <TodoInput @add-todo="addTodo" />
      <TodoFilter :current-filter="currentFilter" @filter-change="handleFilterChange" />
      <TodoList :todos="filteredTodos" :empty-message="getEmptyMessage()" @toggle-todo="toggleTodo" @delete-todo="removeTodo" />
      <TodoStats :total-count="todos.length" :completed-count="completedCount" :remaining-count="remainingCount" />
    </div>
  </div>
</template>

<style scoped>
.container { max-width: 600px; margin: 40px auto; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); padding: 32px; }
.title { text-align: center; margin-bottom: 24px; }
</style>
