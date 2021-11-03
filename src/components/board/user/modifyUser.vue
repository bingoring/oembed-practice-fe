<template lang="">
    <div>
        <b-input v-model="id" placeholder="수정할 사용자 인덱스를 입력해주세요."></b-input>
        <b-input v-model="name" placeholder="수정할 변경할 이름을 입력해주세요."></b-input>
        <b-input v-model="job" placeholder="수정할 변경할 직업을 입력해주세요."></b-input>
        
        <b-button @click="modify">변경</b-button>

      <div v-if="modified">
        <b-table
        hover
        striped
        :fields="fields"
        :items="items">
        </b-table>
      </div>
    </div>
    
</template>
<script>
export default {
  data() {
    return {
      id: "",
      name: "",
      job: "",
      modified: false,
      fields: ["put/patch", "name", "job", "updatedAt"],
      items: "",
    };
  },
  methods: {
    async modify() {
      if (this.job) {
        let body = {
          name: this.name,
          job: this.job,
        };

        let res = await this.$axios.put(
          `https://reqres.in/api/users/${this.id}`,
          body
        );

        if (res) {
          this.items = [
            {
              name: res.data.name,
              job: res.data.job,
              updatedAt: res.data.updatedAt,
            },
          ];
          this.modified = true;
          console.log(res);
        } else {
          console.log(res);
        }
      } else {
        console.log("patch");
        let body = {
          name: this.name,
        };

        let res = this.$axios.patch("https://reqres.in/api/users", body);

        if (res) {
          this.items = [
            {
              name: res.data.name,
              job: res.data.job,
              updatedAt: res.data.updatedAt,
            },
          ];
          console.log(res);
        } else {
          console.log(res);
        }
      }
    },
  },
};
</script>
<style lang="">
</style>