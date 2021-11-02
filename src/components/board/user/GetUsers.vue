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
export default {
  name: "BoardList",

  data() {
    return {
      currentPage: 1, // 현재 페이지
      perPage: 2, // 페이지당 보여줄 게시물 갯수
      // bootstrap 'b-table' 필드 설정
      fields: ["id", "first_name", "last_name", "email"],
      items: "",
    };
  },
  methods: {
    rowClick(items) {
      //console.log(items.id);
      this.$router.push({
        path: `/auth/userDetail/${items.id}`,
      });
    },
    registerUser() {
      this.$router.push({
        path: `/auth/register`,
      });
    },
  },
  created() {
    this.$axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        this.items = res.data.data;
        console.log(res);
      })
      .then((err) => {
        console.log(err);
      });
  },
  computed: {
    rows() {
      return this.items.length;
    },
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