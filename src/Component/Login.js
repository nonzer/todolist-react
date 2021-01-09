import React from 'react';



const Login = ({loginUser})=>{
    let _email, _password;

   let handleLogin = (e)=>{

        e.preventDefault();
        loginUser(_email.value, _password.value);
    }

    return(
        <>
            <form id="form-login" onSubmit={handleLogin} className="col-md-12 " method="POST">
                <h3>Formulaire de login</h3>

               <div className="form-group">
                   <label htmlFor="">Email </label>
                   <input type="text" name="email" ref={input =>(_email=input) } placeholder="Entrer votre Email" className="form-control"/>
               </div>

               <div className="form-group">
                   <label htmlFor="">Mot de passe </label>
                   <input type="password" name="password" ref={input =>( _password=input) } placeholder="Entrer votre password" className="form-control"/>
               </div>

               <button id="button" className="btn btn-primary" type="submit">
                 Login
               </button>

            </form>
        </>
    )
}

export default Login;