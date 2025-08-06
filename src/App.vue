<template>
  <div id="app">
    <div class="container">
      <div>
        <h1>App-Service</h1>
        <MyButton @click="sayHello">Click Me</MyButton>
        <MyCard>
          <p>This is inside MyCard</p>
          <input v-focus />
        </MyCard>
      </div>
      <div>
        <h1>Vue3 + Vite + vue2-datepicker</h1>
        <DatePicker v-model="selectedDate" />
        <p>선택된 날짜: {{ selectedDate }}</p>
      </div>
      <h1 class="title">📝 Vue2 TodoList</h1>
      
      <!-- 할 일 추가 컴포넌트 -->
      <TodoInput @add-todo="addTodo" />
      
      <!-- 필터 컴포넌트 -->
      <TodoFilter 
        :current-filter="currentFilter"
        @filter-change="handleFilterChange"
      />
      
      <!-- 할 일 목록 컴포넌트 -->
      <TodoList
        :todos="filteredTodos"
        :empty-message="getEmptyMessage()"
        @toggle-todo="toggleTodo"
        @delete-todo="removeTodo"
      />
      
      <!-- 통계 컴포넌트 -->
      <TodoStats
        :total-count="todos.length"
        :completed-count="completedCount"
        :remaining-count="remainingCount"
      />
    </div>
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue';
import TodoFilter from './components/TodoFilter.vue';
import TodoList from './components/TodoList.vue';
import TodoStats from './components/TodoStats.vue';
// import DatePicker from 'vue2-datepicker'
// import 'vue2-datepicker/index.css'

export default {
  name: 'App',
  components: {
    TodoInput,
    TodoFilter,
    TodoList,
    TodoStats,
    // DatePicker
  },
  data() {
    return {
      currentFilter: 'all',
      todos: [
        {
          id: 1,
          text: 'Vue2 프로젝트 설정하기',
          completed: true,
          createdAt: new Date('2024-01-15')
        },
        {
          id: 2,
          text: 'Webpack 설정 완료하기',
          completed: true,
          createdAt: new Date('2024-01-16')
        },
        {
          id: 3,
          text: 'TodoList 컴포넌트 만들기',
          completed: false,
          createdAt: new Date('2024-01-17')
        }
      ],
      selectedDate: null
    };
  },
  computed: {
    filteredTodos() {
      switch (this.currentFilter) {
        case 'active':
          return this.todos.filter(todo => !todo.completed);
        case 'completed':
          return this.todos.filter(todo => todo.completed);
        default:
          return this.todos;
      }
    },
    completedCount() {
      return this.todos.filter(todo => todo.completed).length;
    },
    remainingCount() {
      return this.todos.filter(todo => !todo.completed).length;
    }
  },
  methods: {
    addTodo(todoText) {
      const newTodo = {
        id: Date.now(),
        text: todoText,
        completed: false,
        createdAt: new Date()
      };
      this.todos.push(newTodo);
    },
    toggleTodo(id) {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo(id) {
      const index = this.todos.findIndex(todo => todo.id === id);
      if (index > -1) {
        this.todos.splice(index, 1);
      }
    },
    handleFilterChange(filterKey) {
      this.currentFilter = filterKey;
    },
    getEmptyMessage() {
      switch (this.currentFilter) {
        case 'active':
          return '진행중인 할 일이 없습니다! 🎉';
        case 'completed':
          return '완료된 할 일이 없습니다.';
        default:
          return '할 일을 추가해보세요!';
      }
    },
    sayHello() {
      console.log('jsdno0 debug1-1');
      this.$hello?.()
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  min-height: 100vh;
}

.title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 2.5rem;
}
</style>