<template >
    <div class="hold-transition login-page">
        <div class="login-box">
            <div class="login-logo">
                <a href="../../index2.html"><b>Admin</b>LTE</a>
            </div>
            <!-- /.login-logo -->
            <div class="card">
                <div class="card-body login-card-body">
                    <p class="login-box-msg">Sign in to start your session</p>

                    <form @submit.prevent="adminLogin">
                        <div class="input-group mb-3">
                            <input type="email" class="form-control" v-model="form.email" placeholder="Email">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control" v-model="form.password" placeholder="Password">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-8">
                                <div class="icheck-primary">
                                    <input type="checkbox" id="remember">
                                    <label for="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                            <!-- /.col -->
                            <div class="col-4">
                                <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                            </div>
                            <!-- /.col -->
                        </div>
                    </form>


                    <p class="mb-1">
                         <router-link :to="{name:'ForgetView'}">I forgot my password</router-link>
                    </p>
                    <p class="mb-0">
                        <router-link :to="{name:'RegisterView'}" class="text-center">Register a new membership</router-link>
                    </p>
                </div>
              
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
name:'LoginView',
data() {
    return {
        form:{
            email:null,
            password:null
        }
    }
},
methods: {
    adminLogin() {
       axios.post('http://127.0.0.1:8000/api/v1/login',this.form)
       .then((response)=>{
           console.log(response.data)
       }) 
       .catch((error)=>{
           console.log(error.response.data.errors)
       })
    }
},
}
</script>
<style>
    
</style>