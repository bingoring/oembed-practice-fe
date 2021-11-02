<template lang="">
    <div>
        <b-input v-model="id" placeholder="삭제할 사용자 인덱스를 입력해주세요."></b-input>
        
        <b-button @click="deleteUser">삭제</b-button>

    <div v-if="deleted" style="background: #208095;">
      <h2 style="margin-top: 2rem;">
        USER {{id}} DELETED!
        </h2>
      </div>
    </div>
    
</template>
<script>
export default {
  data() {
    return {
      id: "",

      deleted: false,
    };
  },
  methods: {
    deleteUser() {
      this.$axios
        .delete(`https://reqres.in/api/users/${this.id}`)
        .then((res) => {
          console.log(res);
          this.deleted = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="">
</style>