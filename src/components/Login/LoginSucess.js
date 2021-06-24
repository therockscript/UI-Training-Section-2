import { useSelector } from "react-redux";


function LoginSuccess(props) {
    const fullname = useSelector(state => state.login.fullname);
    return <h1>
        Welcome {fullname}
    </h1>
}

export default LoginSuccess;