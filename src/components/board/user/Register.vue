<template>
  <div>
    <b-input
      v-model="name"
      placeholder="생성할 사용자의 이름을 입력해주세요."
    ></b-input>
    <b-input
      v-model="job"
      placeholder="생성할 사용자의 직업을 입력해주세요."
    ></b-input>

    <b-button @click="updateMode ? updateContent() : uploadContent()"
      >저장</b-button
    >&nbsp;
    <b-button @click="cancle">취소</b-button>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: "",
      job: "",
      updateObject: null,
      updateMode: this.$route.params.userId > 0 ? true : false,
    };
  },
  created() {},
  methods: {
    uploadContent() {
      // 저장
      let body = {
        name: this.name,
        job: this.job,
      };
      this.$axios
        .post("https://reqres.in/api/users", body)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      this.$router.push({
        path: "/auth/getUsers",
      });
    },
    updateContent() {
      // 수정
      this.updateObject.title = this.subject;
      this.updateObject.context = this.context;
      this.$router.push({
        path: "/auth/getUsers",
      });
    },
    cancle() {
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>

<style>
</style>