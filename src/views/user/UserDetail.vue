<template>
  <div>
    <b-card>
      <div class="content-detail-content">이름: {{ name }}</div>
      <div class="content-detail-content">직업: {{ job }}</div>

      <div class="content-detail-button">
        <b-button variant="primary" @click="updateData">수정</b-button>&nbsp;
        <b-button variant="success" @click="deleteData">삭제</b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "BoardDetail",
  data() {
    //console.log(this.$route.params);
    const userId = Number(this.$route.params.userId);
    return {
      userId: userId,
      name: "",
      job: "",
    };
  },
  methods: {
    updateData() {
      this.$router.push({
        path: `/board/create/${this.contentId}`,
      });
    },
  },
  created() {
    console.log(this.$route.params.userId);
    this.$axios
      .get(`https://reqres.in/api/users/${this.$route.params.userId}`)
      .then((res) => {
        this.name = res.data.data.name;
        this.job = res.data.data.job;
        console.log(res);
      })
      .then((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped>
.content-detail-content-info {
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
}

.content-detail-content-info-left {
  width: 720px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.content-detail-content-info-right {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.content-detail-content {
  border: 1px solid black;
  margin-top: 1rem;
  padding-top: 1rem;
  min-height: 60px;
}

.content-detail-button {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 2rem;
}

.content-detail-comment {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 2rem;
}
</style>