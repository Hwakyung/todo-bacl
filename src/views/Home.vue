<template>
  <div class="home">
    <TodoInput @createTodo="createTodo"/>
    <TodoList :todos="todos"/>
  </div>
</template>

<script>
import router from '../router'
import TodoList from '../components/TodoList.vue'
import axios from 'axios'
// import jwtDecode from 'jwt-decode'
import TodoInput from '../components/TodoInput.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    TodoList,
    TodoInput,
  },
  data: function(){
    return {
      todos: [],
    }
  },
  computed: {

    ...mapGetters([
      'isAuthenticated',
      'requestHeader',
      'userId',
    ])
  },
  methods: {
    checkLoggedIn(){
      // this.$session.start()
      if(!this.isAuthenticated){
        //login page로 리다이렉트
        router.push('/login')
      }
    },
    getTodos(){
      // this.$session.start()
      // const token = this.$session.get('jwt')
      // const decodedToken = jwtDecode(token)
      // const userID = decodedToken.user_id
      // const requestHeader = {
      //   headers : {
      //       Authorization : 'JWT ' + token
      //   }
        
      // }
      axios.get(`http://localhost:8000/api/v1/users/${this.userId}/`,this.requestHeader)
      .then((res)=> {
        console.log(res)
        this.todos = res.data.todo_set
      })
      .catch((e)=>{
        console.log(e)
      })
      
    },
    createTodo(title){
        // this.$session.start()
        // const token = this.$session.get('jwt')
        // const decodedToken = jwtDecode(token)
        // const userID = decodedToken.user_id
        // const requestHeader = {
        //   headers : {
        //       Authorization : 'JWT ' + token
        //   }
        // }
        
      const requestForm = new FormData()
      requestForm.append('user',this.userId)
      requestForm.append('title',title)
      axios.post(`http://localhost:8000/api/v1/todos/`,requestForm, this.requestHeader)
      .then((res)=> {
        console.log(res)
        this.todos.push(res.data)
      })
      .catch((e)=>{
        console.log(e)
      })
    },
  },
  mounted: function(){
    this.checkLoggedIn()
    console.log('ff')
    this.getTodos()
  },
}
</script>

<style>

</style>