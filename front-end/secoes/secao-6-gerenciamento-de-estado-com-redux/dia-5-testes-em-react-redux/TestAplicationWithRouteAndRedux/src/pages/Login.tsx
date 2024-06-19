import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreator } from "../redux/actions/index";


function Login() {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleDisabled = () => {
    if (userName) return false;
    return true;
  }

  return (
    <div>
      <form  onSubmit={(event) => event.preventDefault()}>
        <input 
        type="text"
        name="userName"
        value={userName}
        placeholder="Digite seu nome"
        onChange={(event) => handleChange(event)}
         />
         <Link to={'/profile'}>
           <button
           type="submit"
          disabled={handleDisabled()}
          onClick={() => dispatch(actionCreator(userName))}
           >
            Entrar
           </button>
         </Link>
      </form>
    </div>
  )
}

export default Login;