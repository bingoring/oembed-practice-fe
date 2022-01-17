<template lang="">
    <div>
        <div class="container">
            <b-button variant="outline-primary" @click="onclick1">임베드 데이터 조회</b-button>
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
        path: `/embed/urlInput`,
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
