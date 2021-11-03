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

    <div v-if="registered">
      <b-table
        striped
        hover
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        :fields="fields"
        @row-clicked="rowClick"
      ></b-table>
    </div>
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

      registered: false,
      items: "",
      fields: ["id", "name", "job"],
    };
  },
  created() {},
  methods: {
    async uploadContent() {
      // 저장
      let body = {
        name: this.name,
        job: this.job,
      };

      let res = await this.$axios.post("https://reqres.in/api/users", body);

      if (res) {
        let item = [
          {
            id: res.data.id,
            name: res.data.name,
            job: res.data.job,
          },
        ];
        this.registered = true;
        this.items = item;
        console.log(this.items);
      } else {
        console.log("err");
      }

      //this.$router.push({
      // path: "/auth/getUsers",
      //});
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