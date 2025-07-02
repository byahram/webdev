import { createApp } from "vue";
import App from "./App.vue";
import mitt from "mitt"; // mitt 라이브러리 셋팅

// mitt 라이브러리 셋팅
let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;

import store from "./store.js";
import './registerServiceWorker'

app.use(store).mount("#app");

// 자주 쓰는 라이브러리는 여기에 등록하면 편해짐
// app.config.globalProperties.axios = axios;
// 그러면 이제 vue 파일에서 import axios할 필요 없이 this.axios로 사용 가능
