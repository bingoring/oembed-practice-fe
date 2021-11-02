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
    modify() {
      let resForItem;
      if (this.job) {
        console.log("");
        let body = {
          name: this.name,
          job: this.job,
        };
        this.$axios
          .put(`https://reqres.in/api/users/${this.id}`, body)
          .then((res) => {
            resForItem = res.data;

            this.modified = true;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log("patch");
        let body = {
          name: this.name,
        };
        this.$axios
          .patch("https://reqres.in/api/users", body)
          .then((res) => {
            resForItem = res.data;
            //console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      this.items = [
        {
          name: resForItem.name,
          job: resForItem.job,
          updatedAt: resForItem.updatedAt,
        },
      ];
    },
  },
};
</script>
<style lang="">
</style>