<template>
  <div id="Basic">
 <div class="container">
        <div class="row">
          <div class="todo__title">
            <h1>Add New Todo</h1>
          </div>
        </div>
        <div class="row">
          <div class="container__form">
              <div class="container__form_item">
                <form class="form">
                  <input type="text" class="form__field" v-model="todoText" placeholder="Your Todo" />
                  <button type="button" class="btn btn--primary btn--inside uppercase" @click="submitTodoForm">Add Todo</button>
                </form>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="item-list">
              <div class="item-todo" v-for="(todo, index) in allTodos" :key="todo.id">
                <span>{{ index + 1 }}</span>
                <li>{{ todo.title }}</li><button @click="deleteTodoForm(todo.id)" class="btn_delete">Delete</button>
              </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Basic',
  data () {
    return {
      todoText: ''
    }
  },
  computed: {
    allTodos () {
      return this.$store.getters.allTodos
    }
  },
  methods: {
    ...mapMutations(['addActivity', 'deleteActivity']),
    submitTodoForm () {
      if (!this.todoText.trim()) {
        const Toast = this.$swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', this.$swal.stopTimer)
            toast.addEventListener('mouseleave', this.$swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'error',
          title: 'Fill the input'
        })
      } else {
        this.checkInput = false
        this.addActivity({
          title: this.todoText,
          id: Date.now(),
          completed: true
        })
        this.todoText = ''
        const Toast = this.$swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', this.$swal.stopTimer)
            toast.addEventListener('mouseleave', this.$swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'Todo success added'
        })
      }
    },
    deleteTodoForm (id) {
      this.deleteActivity(id)
    }
  }
}
</script>

<style scoped>
.todo__title {
  text-align: center;
}
a {
  color: inherit;
}
a:hover {
  color: #7f8ff4;
}
.container{
  max-width: 1200px;
  margin: 0px auto;
  padding: 0px 15px;
}
.container__form {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  -webkit-box-align: center;
          align-items: center;
  -webkit-box-pack: center;
          justify-content: center;
}

.uppercase {
  text-transform: uppercase;
}

.btn {
  display: inline-block;
  background: transparent;
  color: inherit;
  font: inherit;
  border: 0;
  outline: 0;
  padding: 0;
  -webkit-transition: all 200ms ease-in;
  transition: all 200ms ease-in;
  cursor: pointer;
}
.btn--primary {
  background: #7f8ff4;
  color: #fff;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 12px 36px;
}
.btn--primary:hover {
  background: #6c7ff2;
}
.btn--primary:active {
  background: #7f8ff4;
  box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);
}
.btn--inside {
  margin-left: -96px;
}

.form__field {
  width: 360px;
  background: #fff;
  color: #a3a3a3;
  font: inherit;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  border: 0;
  outline: 0;
  padding: 22px 18px;
}
.item-todo {
  width: 35rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid #788cd6;
  margin: 1rem 0;
  padding: 10px;
  border-radius: 10px;

}
.item-list {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.item-list li{
  list-style-type: none;
}
.btn_delete {
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  background: #ed3330;
  padding: 5px 10px;
  border-radius: 5px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
}
.btn_delete:hover {
  background: #434343;
  cursor: pointer;
  letter-spacing: 1px;
  -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
  -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
  box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
  transition: all 0.4s ease 0s;
}
@media (max-width: 1200px){
  .container{
    max-width: 970px;
  }
}
@media (max-width: 992px){
  .container{
    max-width: 750px;
  }
}
@media (max-width: 767px){
  .container{
    max-width: none;
  }
}
@media only screen and (max-width: 576px) {
  h1 {
    justify-content: center;
    font-size: 40px;
  }
  .btn--inside {
    position: relative;
    float: none;
    display: block;
    justify-content: center;
    margin: auto;
    left:10px;
  }
  .form__field{
    position: relative;
    width: 100%;
    right: 10px;
  }
  .item-todo{
    width: 90%;
  }
}
</style>
