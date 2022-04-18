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
        GET_AUTH_STATE(state){
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
                    console.log(response.data)
                }) 
                .catch((error)=>{
                    reject(error)
                    console.log(error.response.data.errors)
                })
            })
        }
    },

    mutations:{
        SET_AUTH_TOKEN(){
            
        }
    }
}