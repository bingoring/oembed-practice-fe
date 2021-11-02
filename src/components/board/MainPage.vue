<template lang="">
    <div>
        <div>
            <a href="javascript:;" to="/auth/getUsers" @click="onclick1">사용자 조회</a>
        </div>
        <div>
            <a href="javascript:;" to="/auth/register" @click="onclick2">사용자 생성</a>
        </div>
            <a href="javascript:;" to="/auth/modifyUser" @click="onclick3">사용자 정보 수정</a>
        <div>
            <a href="javascript:;" to="/auth/deleteUser" @click="onclick4">사용자 삭제</a>
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
<style lang="">
</style>