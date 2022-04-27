<template >
  <div class="hold-transition login-page">
    <div class="login-box">
      <div class="login-logo">
        <a><b>Admin</b> Password Forget</a>
      </div>
      <!-- /.login-logo -->
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>

          <form @submit.prevent="adminForgotPass">
            <div class="input-group mb-3">
              <input type="email" class="form-control" v-model="form.email" placeholder="Email">
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
            <span class="text-info" v-if="msg">{{ msg.message }}</span>

            <div class="row">
              <div class="col-12">
                <button type="submit" class="btn btn-primary btn-block">Request new password</button>
              </div>
              <!-- /.col -->
            </div>
          </form>

          <p class="mt-3 mb-1">
            <router-link :to="{ name: 'LoginView' }"> Login</router-link>
          </p>
          <p class="mb-0">
            <router-link :to="{ name: 'RegisterView' }" class="text-center">Register  new membership</router-link>
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
        email: null,

      },
      errors: {},
      msg:null
    }
  },
  methods: {
    adminForgotPass() {
      
      this.$store.dispatch("FORGOT", this.form)
        .then((response) => {
          this.msg=response.data
          this.form.email=null
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