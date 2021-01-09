import React from 'react';


import {Link, Router } from 'react-router-dom';

let Register = ({registerFunction})=>{
    let _email, _password, _name;

    const handleRegister = (e)=>{
        console.log('register function called !!');
        e.preventDefault();
        registerFunction(_email.value, _name.value, _password.value)
    }

    return (
        <>

            <form onSubmit={handleRegister} method='POST'>
                <h3>Register Form</h3>

                <div className="form-group">
                    <label htmlFor="">Nom d'utilisateur</label>

                    <input type="text" className="form-control"
                           ref={i =>_name=i} autoComplete='off'
                           name='name'
                           placeholder="nom" />
                </div>


                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="text" className="form-control"
                           ref={i =>_email=i} autoComplete='off'
                           name='email'
                           placeholder="email" />
                </div>

                <div className="form-group">
                    <label htmlFor="">Mot de passe</label>
                    <input type="password" className="form-control"
                           ref={i =>_password=i}
                           autoComplete='off' name='password'
                           placeholder="password" />
                </div>

                <button  className="btn btn-primary" type="submit">
                    Register
                </button>

                {/*<Router>*/}
                {/*    <Link to="/login">Login</Link>*/}
                {/*</Router>*/}
            </form>

        </>
    )
}

export default Register;