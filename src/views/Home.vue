<template>
  <div class="home">
    <TodoList/>
  </div>
</template>

<script>
import router from '../router'
import TodoList from '../components/TodoList.vue'
export default {
  name: 'home',
  components: {
    TodoList,
  },
  methods: {
    checkLoggedIn(){
      this.$session.start()
      if(!this.$session.has('jwt')){
        //login page로 리다이렉트
        router.push('/login')
      }
    }
  },
  mounted: function(){
    this.checkLoggedIn()
  },
}
</script>

<style>

</style>