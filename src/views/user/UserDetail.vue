<template>
  <div>
    <b-card>
      <div class="content-detail-content">id: {{ id }}</div>
      <div class="content-detail-content">first name: {{ first_name }}</div>
      <div class="content-detail-content">last name: {{ last_name }}</div>

      <!-- <div class="content-detail-button">
        <b-button variant="primary" @click="updateData">수정</b-button>&nbsp;
        <b-button variant="success" @click="deleteData">삭제</b-button>
      </div> -->
    </b-card>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { fetchSingleUser } from "../../api/index";
export default {
  name: "UserDetail",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      id: (state) => state.singleUserData.id,
      first_name: (state) => state.singleUserData.first_name,
      last_name: (state) => state.singleUserData.last_name,
    }),
  },
  methods: {
    ...mapActions(["getUserDetail"]),
    // updateData() {
    //   this.$router.push({
    //     path: `/board/create/${this.contentId}`,
    //   });
    // },
  },
  async created() {
    await this.$store.dispatch(
      "GET_SINGLE_USER",
      this.$store.getters.getFetchedId
    );

    // try {
    //   let res = await fetchSingleUser(Number(this.$store.getters.getFetchedId));
    //   this.first_name = res.data.data.first_name;
    //   this.last_name = res.data.data.last_name;
    // } catch (err) {
    //   console.log(`error occured: ${err}`);
    // }
    // fetchSingleUser(Number(this.$store.getters.getFetchedId)).then((res) => {
    //   this.first_name = res.data.data.first_name;
    //   this.last_name = res.data.data.last_name;
    // });
  },
};
</script>
<style scoped>
.content-detail-content {
  border: 1px solid black;
  margin-top: 1rem;
  padding-top: 1rem;
  min-height: 60px;
}
</style>