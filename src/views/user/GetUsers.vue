<template>
  <div>
    <!-- hover -> 마우스 올라가면 회색으로 변함 -->
    <!-- <a href="javascript:;" @click="getList">GET 방식 데이터 접근</a> -->
    <b-table
      striped
      hover
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      :fields="fields"
      @row-clicked="rowClick"
    ></b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      align="center"
    ></b-pagination>
    <b-button variant="outline-primary" @click="registerUser"
      >회원가입</b-button
    >
  </div>
</template>

<script>
import { mapState } from "vuex";
//import { GET_SINGLE_USER, FETCH_SINGLE_USER_ID } from "../../store";
//import UserDetail from "./UserDetail";
export default {
  name: "BoardList",
  data() {
    return {
      currentPage: 1, // 현재 페이지
      perPage: 6, // 페이지당 보여줄 게시물 갯수
      // bootstrap 'b-table' 필드 설정
      fields: ["id", "first_name", "last_name", "email"],
    };
  },
  methods: {
    rowClick(items) {
      //console.log(items.id);
      this.$store.dispatch("FETCH_SINGLE_USER_ID", items.id);
      //this.$store.dispatch("GET_SINGLE_USER");

      this.$router.push({
        path: `/auth/userDetail/`,
      });
    },
    registerUser() {
      this.$router.push({
        path: `/auth/register`,
      });
    },
  },
  async created() {
    await this.$store.dispatch("FETCH_USERS");
    console.log(this.$store.getters.getAllUserData);

    /*
    const firstData = await this.$axios.get(
      `https://reqres.in/api/users?page=1`
    );
    this.items = firstData.data.data;

    let pageNum = 2;
    while (
      (await this.$axios.get(`https://reqres.in/api/users?page=${pageNum}`))
        .data.data[0]
    ) {
      var tmpData = await this.$axios.get(
        `https://reqres.in/api/users?page=${pageNum}`
      );

      pageNum++;

      tmpData.data.data.forEach((data) => {
        this.items.push(data);
      });
    }
    */
  },
  computed: {
    rows() {
      return this.$store.getters.getAllUserData.length;
    },
    ...mapState({
      items: (state) => state.allUserData,
    }),
  },
};

/*
[예제] map --------------------
const objArr = [{ a: "a" }, { b: "b" }];

  0: {a: "a"}
  1: {b: "b"}

const altered = objArr.map(item => {
  return {
    ...item, // 기존자료 모두 추가
    c: "c" // 신규추가
  };
});

  0: {a: "a", c: "c"}
  1: {b: "b", c: "c"}

[예제] filter--------------------
const onlyA = altered.filter(item => {
  return item.a === "a"; // 'a' 인 값만 리턴
});

  0: {a: "a", c: "c"}
*/
</script>