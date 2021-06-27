import axios from "axios";

const API= axios.create({
	baseURL :"https://tscdemo.araynatech.com/",
	headers :{
		"Access-Control-Allow-Origin": "*"
	}
});

export default API;