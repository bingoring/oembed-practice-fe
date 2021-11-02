<template lang="">
    <div>
        <b-input v-model="id" placeholder="삭제할 사용자 인덱스를 입력해주세요."></b-input>
        
        <b-button @click="modify">삭제</b-button>

    </div>
    
</template>
<script>
export default {
  data() {
    return {
      id: "",
    };
  },
  methods: {
    modify() {
      this.$axios
        .delete(`https://reqres.in/api/users/${this.id}`)
        .then((res) => {
          console.log(res);
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