import axios from 'axios'
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
        axios.post('http://127.0.0.1:8000/api/v1/login',formData)
       .then((response)=>{
           console.log(response.data)
       }) 
       .catch((error)=>{
           console.log(error.response.data.errors)
       })
        }
    },

    mutations:{

    }
}