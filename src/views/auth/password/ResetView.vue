<template >
  <div class="hold-transition login-page">
    <div class="login-box">
      <div class="login-logo">
        <a><b>Admin</b> Password Reset</a>
      </div>
      <!-- /.login-logo -->
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">You Reset your password? Here you can easily retrieve a new password.</p>

          <form @submit.prevent="adminResetPass">
            <div class="input-group mb-3">
              <input type="password" class="form-control" v-model="form.password" placeholder="Password">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
        
           <div class="input-group mb-3">
              <input type="password" class="form-control" v-model="form.password_confirmation" placeholder="Retype Password">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <span class="text-danger" v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</span>
        

            <div class="row">
              <div class="col-12">
                <button type="submit" class="btn btn-primary btn-block">Submit</button>
              </div>
              <!-- /.col -->
            </div>
          </form>

          <p class="mt-3 mb-1">
            <router-link :to="{ name: 'LoginView' }">Login</router-link>
          </p>
          <p class="mb-0">
            <router-link :to="{ name: 'RegisterView' }" class="text-center">Register a new membership</router-link>
          </p>
        </div>
        <!-- /.login-card-body -->
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      form: {
        password: null,
        password_confirmation:null,
        token:null

      },
      errors: {},
      msg:null
    }
  },
  created () {
      this.form.token=this.$route.query.token;
  },
  methods: {
    adminResetPass() {
        console.log(this.form)
      
      this.$store.dispatch("RESET", this.form)
        .then((response) => {
          this.msg=response.data
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error.response.data.errors)
          this.errors = error.response.data.errors
        })
    }
  },
}
</script>

<style>
</style>