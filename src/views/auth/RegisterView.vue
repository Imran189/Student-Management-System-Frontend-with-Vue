<template>
  <div class="hold-transition register-page">
    <div class="register-box">
      <div class="register-logo">
        <router-link :to="{name:'HomeView'}" href="#"><b>Admin</b>LTE</router-link>
      </div>

      <div class="card">
        <div class="card-body register-card-body">
          <p class="login-box-msg">Register a new membership</p>

          <form @submit.prevent="adminRegister">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Full name" v-model="form.name" />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-user"></span>
                </div>
              </div>
            </div>
            <span class="text-danger" v-if="errors.name">{{errors.name[0]}}</span>
            <div class="input-group mb-3">
              <input type="email" class="form-control" placeholder="Email" v-model="form.email" />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <span class="text-danger" v-if="errors.email">{{errors.email[0]}}</span>

            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Phone" v-model="form.phone" />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-phone"></span>
                </div>
              </div>
            </div>
            <span class="text-danger" v-if="errors.phone">{{errors.phone[0]}}</span>

            <div class="input-group mb-3">
              <input type="file" class="form-control" />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-image"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="form.password"
              />
            <span class="text-danger" v-if="errors.password">{{errors.password[0]}}</span>
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control"
                placeholder="Retype password"
                v-model="form.password_confirmation"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="icheck-primary">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="terms"
                    value="agree"
                  />
                  <label for="agreeTerms">
                    I agree to the <a href="#">terms</a>
                  </label>
                </div>
              </div>
              <!-- /.col -->
              <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">
                  Register
                </button>
              </div>
              <!-- /.col -->
            </div>
          </form>

          <router-link :to="{name:'LoginView'}"  class="text-center">I already have a membership</router-link>
          
        </div>
        <!-- /.form-box -->
      </div>
      <!-- /.card -->
    </div>
  </div>
</template>
<script>
export default {
    name:'RegisterView',
    data() {
      return {
        form:{
          name:null,
          email:null,
          phone:null,
          password:null,
          password_confirmation:null
        },
        errors:{},
      }
    },
    methods: {
      adminRegister() {
         this.$store.dispatch("REGISTRATION", this.form)
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
};
</script>
<style ></style>
