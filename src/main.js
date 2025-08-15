import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

import sharedLib from 'shared-lib'

import { app } from './app-instance';

// const app = createApp(App)
app.use(sharedLib);

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

console.log('jsdno0 debug1-1', app.config.globalProperties);
// 언어 변경
app.config.globalProperties.$setLocale('ko')

// 메시지 존재 확인
console.log('ko 메시지 있음?', app.config.globalProperties.$hasLocaleMessage('ko')) // true

// 메시지 머지 (추가)
app.config.globalProperties.$mergeLocaleMessage('ko', {
  goodbye: '안녕히 가세요'
})

app.component('DatePicker', DatePicker);


app.mount('#app')
