import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

const app = createApp(App)

// vue2 API 허용 및 경고 설정
app.config.compatConfig = {
  MODE: 3 // WARN 모드: 비호환 API는 경고
}

app.config.globalProperties.$capitalize = function (value) {
  if (!value) return '';
  return value.toString().charAt(0).toUpperCase() + value.slice(1);
};

app.config.globalProperties.$formatDate = function(date) {
    return new Date(date).toLocaleDateString('ko-KR');
};

app.component('DatePicker', DatePicker);

app.mount('#app')
