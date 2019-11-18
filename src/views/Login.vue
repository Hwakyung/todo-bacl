<template>
<div class="login">
  <h1>로그인페이지입니다.</h1>
  <LoginForm/>
</div>
  
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
export default {
  name:'Login',
  components: {
    
    LoginForm
  },
}
</script>

<style>

</style>