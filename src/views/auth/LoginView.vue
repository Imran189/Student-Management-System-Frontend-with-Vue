<template >
    <div class="hold-transition login-page">
        <div class="login-box">
            <div class="login-logo">
                <a><b>Admin </b>Login</a>
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
                            <span class="text-danger" v-if="errors.email">{{errors.email[0]}}</span>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control" v-model="form.password" placeholder="Password">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                      <span class="text-danger" v-if="errors.password">{{errors.password[0]}}</span>
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

export default {
name:'LoginView',
data() {
    return {
        form:{
            email:null,
            password:null
        },
        errors:{},
    }
},
methods: {
    adminLogin() {
        this.$store.dispatch("LOGIN", this.form)
        .then((response)=>{
            this.$router.push({name:'HomeView'})
            console.log(response.data)
        }) 
        .catch((error)=>{
            console.log(error.response.data.errors)
             this.errors = error.response.data.errors
        })
    }
},
}
</script>
<style>
    
</style>