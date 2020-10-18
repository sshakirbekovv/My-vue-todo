<template>
  <div id="menu">
  <div class="container">
    <div class="header">
      <a class="logo">{{ intro }}</a>
      <div class="header-right">
        <a class="active" href="" @click="$router.push({name: 'todo'})">{{ startlink }}</a>
        <a href="">{{ contactlink }}</a>
        <a href="">{{ aboutlink }}</a>
   </div>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      intro: 'Welcome to my App',
      startlink: 'Start',
      contactlink: 'Contact',
      aboutlink: 'About'
    }
  }
}
</script>

<style>
body{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 0;
  margin: 0;
}
.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 10px 10px;
}
.header a.logo {
  font-size: 25px;
  font-weight: bold;
}
.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}
.header a:hover {
  background-color: #ddd;
  color: black;
}
.header a.active {
  background-color:steelblue;
  color: white;
}
.header-right {
  float: right;
}
@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  .header-right {
    float: none;
  }
}
</style>
