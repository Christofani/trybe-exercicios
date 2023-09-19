import { useSelector } from "react-redux";
import { ReduxState } from "../types";
import { Link } from "react-router-dom";

function Login() {
  const state = useSelector((state: ReduxState) => state.userName)
  return (
    <div>
      {state ? (
        <h1>Boas vindas, {state}</h1>
      ) : (
        <h1>Você precisa realizar o login!</h1>
      )}
      <Link to={'/'}>Voltar</Link>
    </div>
  )
}

export default Login;