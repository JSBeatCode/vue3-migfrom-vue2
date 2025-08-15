import { createElementBlock, openBlock, Fragment, createCommentVNode, createElementVNode, renderSlot } from 'vue';
import axios from 'axios';
import { createI18n } from 'vue-i18n';

var script$1 = {
  name: 'MyButton',
  emits: ['click'],
  methods: {
    onClick(event) {
      console.log('📦 MyButton 내부 클릭됨'); // 이건 shared-lib에서의 로그
      this.$emit('click', event); // 이걸 부모에게 전달해야 해
    }
  }
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [createCommentVNode(" 반드시 button 태그에 @click=\"onClick\"처럼 직접 바인딩해보자 "), createElementVNode("button", {
    class: "my-button",
    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
  }, [renderSlot(_ctx.$slots, "default")])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = "\n.my-button[data-v-5abd212e] {\r\n  padding: 10px 16px;\r\n  background-color: #42b983;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 4px;\n}\r\n";
styleInject(css_248z$1);

script$1.render = render$1;
script$1.__scopeId = "data-v-5abd212e";
script$1.__file = "src/components/MyButton.vue";

const _hoisted_1 = {
  class: "my-card"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, [renderSlot(_ctx.$slots, "default")]);
}

var css_248z = "\n.my-card[data-v-06f91f0c] {\r\n  border: 1px solid #ccc;\r\n  padding: 16px;\r\n  border-radius: 4px;\n}\r\n";
styleInject(css_248z);

const script = {};
script.render = render;
script.__scopeId = "data-v-06f91f0c";
script.__file = "src/components/MyCard.vue";

var vFocus = {
  mounted(el) {
    el.focus();
  }
};

async function send(url, data = {}, config = {}) {
  try {
    const response = await axios.post(url, data, config);
    return response.data;
  } catch (error) {
    console.error('[shared-lib:send]', error);
    throw error;
  }
}

// 기본 메시지 예시
const messages = {
  en: {
    welcome: 'Welcome!'
  },
  ko: {
    welcome: '환영합니다!'
  }
};
const i18n = createI18n({
  legacy: false,
  // Composition API 모드
  locale: 'en',
  fallbackLocale: 'en',
  messages
});

var plugin = {
  install(app) {
    // 전역 컴포넌트 등록
    app.component('MyButton', script$1);
    app.component('MyCard', script);

    // 전역 디렉티브 등록
    app.directive('focus', vFocus);
    app.config.globalProperties.$hello = () => window.alert('Hello from shared-lib!');

    // 전역 메서드 등록
    app.config.globalProperties.$send = send;

    // i18n 플러그인 등록
    app.use(i18n);

    // i18n 헬퍼 함수 전역 등록
    app.config.globalProperties.$setLocale = locale => {
      i18n.global.locale.value = locale;
    };
    app.config.globalProperties.$hasLocaleMessage = locale => {
      return Object.prototype.hasOwnProperty.call(i18n.global.messages.value, locale);
    };
    app.config.globalProperties.$mergeLocaleMessage = (locale, message) => {
      i18n.global.mergeLocaleMessage(locale, message);
    };
  }
};

export { script$1 as MyButton, script as MyCard, plugin as default, send };
//# sourceMappingURL=shared-lib.esm.js.map
