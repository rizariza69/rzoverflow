<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-success py-md-2 mb-3 ">
    <a href="/" class="navbar-brand">RZ-Overflow</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar7">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse justify-content-stretch" id="navbar7">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active" >
                    <router-link class="nav-link"  to="/myQuestion">MyQuestion</router-link>
            </li>

            <li class="nav-item active" >
                <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="#" @click="logout">Logout</a>
            </li>
        </ul>
    </div>
</nav>

</template>

<script>
import router from '../router.js'

export default {
    data:function (){
    return{
      token:localStorage.getItem("token")
    }
  },methods:{
    logout(){
      localStorage.removeItem('token')
      this.$router.push('/')
    },
  }
}
</script>

<style>
.abs-center-x {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

</style>
