<template>
  <div class="add-todo">
    <input 
      v-model="newTodo"
      v-focus
      @keyup.enter="handleAdd"
      placeholder="새로운 할 일을 입력하세요..."
      class="todo-input"
    />
    <button @click="handleAdd" class="add-btn">추가</button>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data() {
    return {
      newTodo: ''
    };
  },
  methods: {
    handleAdd() {
      if (this.newTodo.trim()) {
        this.$emit('add-todo', this.newTodo.trim());
        this.newTodo = '';
      }
    }
  }
};
</script>

<style scoped>
.add-todo {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.todo-input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e1e8ed;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
}

.todo-input:focus {
  border-color: #3498db;
}

.add-btn {
  padding: 12px 24px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s;
}

.add-btn:hover {
  background: #2980b9;
}
</style>