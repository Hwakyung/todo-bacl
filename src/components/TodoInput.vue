<template>
  <div class="todo-input">
    <div class="input-group">
      <input type="text" class="form-control" v-model='title' @keydown.enter="createTodo()">
      <span class="input=group-button">
        <button class="btn btn-primary" @click="createTodo()">🖱️</button>
      </span>

    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data: function(){
    return {
      title: '',
    }
  },
  methods: {
    createTodo(){
      this.$emit('createTodo',this.title)
      this.title = ''
    },
  },
}
</script>

<style>

</style>