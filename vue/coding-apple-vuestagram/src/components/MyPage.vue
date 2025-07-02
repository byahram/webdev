<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input @input="search($event.target.value)" placeholder="?" />
    <div class="post-header" v-for="(a, i) in follower" :key="i">
      <div class="profile" :style="`background-image:url(${a.image})`"></div>
      <span class="profile-name">{{ a.name }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, reactive, toRefs, watch } from "vue";
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "mypage",
  props: {
    one: Number,
  },
  // json 데이터 axios로 가져오면 json->object 변환 자동으로 해줌
  // Composition API 써서 개발하려면 setup() 안에 코드
  // setup() 안에서 데이터도 생성, 조작할 수 있고 methods, computed, watch 만들 수 있고, hook도 걸 수 있고
  // 모든 데이터를 reference data type으로 감싸야 실시간 반영 가능
  setup(props) {
    // 데이터는 ref()에 담고 return {} 해줘야 위에서 사용 가능
    let followerOriginal = ref([]);
    let follower = ref([]); // array, object 외의 나머지 자료형 집어 넣음
    let follower_test = reactive({ name: "kim " }); // 보통 array, object 집어 넣음
    console.log(follower_test);

    // Composition API에서 props 사용법
    let { one } = toRefs(props);
    console.log(one.value);

    // Composition API에서 watch 사용법
    watch(one, () => {});

    // Composition API에서 computed 사용법
    // let re = computed(one, () => { return follower.value.length; });
    // console.log(re.value);

    // Composition API에서 vuex store 사용법
    // let store = useStore();
    // console.log(store.state.name);

    // s라고 입력하면 follower라는 데이터를 조작
    function search(검색어) {
      let newFollower = followerOriginal.value.filter((a) => {
        return a.name.indexOf(검색어) != -1;
      });
      follower.value = [...newFollower];
    }

    // Composition API에서 Lifecycle Hook 쓰려면 On라이프사이클함수명(()=>{실행할 코드})
    onMounted(() => {
      // ajax로 팔로워 데이터 가져와서 ref([])에 꽂아넣음
      axios.get("/follower.json").then((a) => {
        //   console.log(a.data);
        follower.value = a.data;
        followerOriginal.value = [...a.data];
      });
    });

    return { follower, search };
  },
  mounted() {
    // 장착되고나서 실행할 코드
  },
};
</script>

<!-- scoped 있으면 다른 vue파일로 전염 안됨 -->
<style scoped></style>
