<template>
  <div id="app">
    <div id="nav">
      <div v-if="isAuthenticated">
        <router-link to="/">Home</router-link> |
        <!--router : tool를 누르면 컴포넌트를 보여주는 역할 -->
        <a href="#" @click.prevent="logout">logout</a>
            <!-- prevent : 원래 a태그의 기능을 막음 -->
      </div>
      <div v-else="">
        <router-link to="/login">login</router-link> 
      </div>
      
      
  
    </div>
    <div class="container">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function(){
    return{
      isAuthenticated: this.$session.has('jwt')
      // view session의 기능 중
    }
  },
  methods: {
    logout: function(){
      this.$session.destroy()
      this.$router.push('/login')
    }
  },
  updated: function(){ 
    // 지금 사용자가 보고 있는 화면이 렌더링이 다시 되면 이 함수를 실행하게됨
    this.isAuthenticated = this.$session.has('jwt')

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
