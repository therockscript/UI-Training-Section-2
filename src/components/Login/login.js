import FormGroup from '../HospitalManagement/FormGroup';
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom';

function Login(){

    const dispatch=useDispatch();
    const history=useHistory();
    const username=useSelector(state=>state.login.username);
    const password=useSelector(state=>state.login.password);
    const loginError=useSelector(state=>state.login.loginError);

    function onFormUpdate(event){
    	const name = event.target.name;
    	const value =event.target.value;
   

          switch(name){
          	case "username":
          	 dispatch({
          	 	     type:"login/setUserName",
          	 	     payload: value
          	 })
          	   break;

          	case "password":
          	 dispatch({
          	 	     type:"login/setPassword",
          	 	     payload: value
          	 })
          	   break;   
          }

    }

    function onLogin(event){
    	event.preventDefault();
    	event.stopPropagation();

    	dispatch({
    		type: "login/login",
    		payload: {
    			history:history
    		}
    	})

    }

  return <form className="col-md-4" onSubmit={onLogin}>
          <FormGroup
          label="Username:"
          type="text"
          name="username"
          value={username}
          disabled={false}
          onInputChange={onFormUpdate}/>

          <FormGroup
          label="Password:"
          type="password"
          name="password"
          value={password}
          disabled={false}
          onInputChange={onFormUpdate}/>

          <button type="submit">Login</button>
          </form>
}
export default Login