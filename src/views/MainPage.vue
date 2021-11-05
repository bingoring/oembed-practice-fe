<template lang="">
    <div>
        <div class="container">
            <b-button variant="outline-primary" @click="onclick1">사용자 조회</b-button>
        </div>
        <div class="container">
            <b-button variant="outline-primary" @click="onclick2">사용자 생성</b-button>
        </div>
        <div class="container">
            <b-button variant="outline-primary" @click="onclick3">사용자 정보 수정</b-button>
        </div>
        <div class="container">
            <b-button variant="outline-primary" @click="onclick4">사용자 삭제</b-button>
        </div>

        <!-- <a href="javascript:;" to="/auth/modifyUser">사용자 정보 수정(부분)</a> -->
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onclick1() {
      this.$router.push({
        path: `/auth/getUsers`,
      });
    },
    onclick2() {
      this.$router.push({
        path: `/auth/register`,
      });
    },
    onclick3() {
      this.$router.push({
        path: `/auth/modifyUser`,
      });
    },
    onclick4() {
      this.$router.push({
        path: `/auth/deleteUser`,
      });
    },
  },
};
</script>
<style scoped>
.container {
  margin-top: 1rem;
}
</style>
