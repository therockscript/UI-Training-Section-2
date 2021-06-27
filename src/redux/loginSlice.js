import {createSlice} from '@reduxjs/toolkit';
import loginAPI from '../api/login';

const LoginSlice = createSlice({
	name : "login",
	initialState :{
		username : "",
        password : "",
        fullname :"",
        loginError :""

	},
	reducers :{
		setUserName :(state, action) =>{
			state.username =action.payload;
		},
		setPassword :(state,action) =>{
			state.password =action.payload;
		},
		login:async(state, action)=>{
			const response =await loginAPI.login(state.username,state.password);
			   if(!response){
			   	state.loginError ="Invalid Username or Password";
			   	return;
			   }

			   if(response.status===200){
			   	state.fullname=response.data.user.fullname;
			   	action.payload.history.push("/login-success")
			   }

		}

	}
})

export default LoginSlice.reducer;