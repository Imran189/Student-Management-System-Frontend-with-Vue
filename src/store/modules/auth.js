import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1';
export const auth={
    state:{
        auth_status:false,
        auth_token:null,
        auth_info:{
            name:null,
            email:null,
            phone:null,
            image:null
        }
    },

    getters:{
        GET_AUTH_STATUS(state){
            return state.auth_status
        },
        GET_AUTH_TOKEN(state){
            return state.auth_token
        },
        GET_AUTH_INFO(state){
            return state.auth_info
        }
    },

    actions:{
        LOGIN(context,formData){
            return new Promise((resolve,reject)=>{
                axios.post('/login',formData)
                .then((response)=>{
                    resolve(response)
                    context.commit('SET_AUTH_TOKEN', response.data.access_token)
                    context.commit('SET_AUTH_INFO', response.data.user)
                    console.log(response.data)
                }) 
                .catch((error)=>{
                    reject(error)
                    console.log(error.response.data.errors)
                })
            })
        },
        REGISTRATION(context,regData){
            return new Promise((resolve,reject)=>{
                axios.post('/register',regData)
                .then((response)=>{
                    resolve(response)
                    context.commit('SET_AUTH_TOKEN', response.data.access_token)
                    context.commit('SET_AUTH_INFO', response.data.user)
                    console.log(response.data)
                }) 
                .catch((error)=>{
                    reject(error)
                    console.log(error.response.data.errors)
                })
            })
        },
       

        LOGOUT(context){
            axios.defaults.headers.common['Authorization'] ='Bearer '+context.state.auth_token;
            return new Promise((resolve,reject)=>{
                axios.post('/logout')
                .then((response)=>{
                    resolve(response)
                    context.commit('SET_AUTH_LOGOUT')
                    console.log(response.data)
                }) 
                .catch((error)=>{
                    reject(error)
                    console.log(error.response.data.errors)
                })
            })
        },
        FORGOT(context,formData){
            return new Promise((resolve,reject)=>{
                axios.post('/forgot',formData)
                .then((response)=>{
                    resolve(response)
                    console.log(response.data)
                }) 
                .catch((error)=>{
                    reject(error)
                    console.log(error.response.data.errors)
                })
            })
        },
        
        RESET(context,payload){
            return new Promise((resolve,reject)=>{
                axios.post('/reset',payload)
                .then((response)=>{
                    resolve(response)
                    //console.log(response.data)
                }) 
                .catch((error)=>{
                    reject(error)
                   // console.log(error.response.data.errors)
                })
            })
        }
    },

    mutations:{
        SET_AUTH_TOKEN(state,token){
            state.auth_token = token;
            state.auth_status = true
        },
        SET_AUTH_INFO(state,info){
            state.auth_info.name = info.name;
            state.auth_info.email = info.email;
            state.auth_info.phone = info.phone;
            state.auth_info.image = info.image;
           
        },
        SET_AUTH_LOGOUT(state){
            state.auth_token = null;
            state.auth_status = false;
            state.auth_info={
                name:null,
                email:null,
                phone:null,
                image:null
            }
        }
    }
}