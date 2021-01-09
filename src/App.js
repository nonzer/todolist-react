


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/dropdown.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';

import BASE_URL from './Component/Consts.js';

import axios from 'axios';
import React, { Component} from 'react';
import Menu from './Component/Menu';
import TodoList from './Component/TodoList';
import AddTodo from './Component/AddTodo';

import Login from './Component/Login.js';
import Register from './Component/Register'
// import PersonList from './Component/PersonList';

class  App extends Component{

    constructor(props) {
        super(props);
        this.state ={
            isLoggedIn: false,
            user: {},
            username:'',
            todos:[]
        }

    }

    componentDidMount(){
        let _state = localStorage['appState'];

        if(_state){
            let state = JSON.parse(_state);
            this.setState({
                isLoggedIn: state.isLoggedIn,
                user: state.user,
                // username: state.user.username
            })
        }

        axios
            .get(BASE_URL+'/todo')
            .then(json=>{

                if(json.data.success){

                    this.setState({
                        todos: json.data.todos
                    })
                }else{
                    alert('Aucune reponse positive du serveur !');
                }
            }).catch(err =>{
            alert(`erreur lors du chargement des todo : ${err}`)
        })

        // console.log(_state);
    }

    // state = {
    //     isLoggedIn: false,
    //     user: {},
    //     username:'',
    //     todos:[]
    // }

    _addTodo = (form)=>{
        axios
            .post(BASE_URL+'/todo/store', form)
            .then(json =>{

                if(json.data.success){

                    this.setState({
                        todos: [...this.state.todos ,json.data.todo]
                    })
                    console.log(this.state.todos, json.data.todo);
                }else{
                    alert(' Le Todo n\'a pas ete ajoute !')
                }
            })
            .catch(err => {
                alert(`Echec de connexion au serveur : ${err}`);
            })

    }

    _loginUser = (email, password)=>{

        // $('#button')
        //     .attr('disabled', "disabled")
        //     .html(
        //         '<i className="fa fa-spinner fa-spin fa-1x fa-fw"></i><span className="r-only">Cahrgement...</span>'
        // );

        var formData = new FormData();
        formData.append('username', email);
        formData.append('password', password);

        // const baseUrl = "http://localhost:8000/api";
        const baseUrl = "http://localhost:8080";

        axios
            .post(baseUrl+"/login", formData)
            .then(json=>{

               alert('Serveur repondu');

               if(json.data.success){

                   let userData={
                       'id' : json.data.data.id,
                       'username' : json.data.data.username,
                       'password' : json.data.data.password,
                       'email' : json.data.data.email,
                       // 'auth_token' : json.data.data.auth_token,
                       'created_at' : json.data.data.created_at,
                       'updated_at' : json.data.data.updated_at,
                   }

                   let appState = {
                       isLoggedIn: true,
                       user: userData
                   };

                   localStorage['appState'] =  JSON.stringify(appState)

                   this.setState({
                       isLoggedIn: appState.isLoggedIn,
                       user: appState.user,
                       username: appState.user.username
                   })

               }else {
                   alert('le Login a echoue');
               }

                // document.getElementById("button")
                //    .removeAttribute('desabled')
                //    .html('Login');

            }).catch( error=>{
                alert(`Axios - Erreur catch : ${error}`);

                // document.getElementById("button")
                //         .removeAttribute('desabled')
                //         .html('Login');

            }

        )

    }

    _registerUser = (email, username, password)=>{

        var formData = new FormData();
        formData.append('email', email);
        formData.append('username', username);
        formData.append('password', password);

        const baseUrl = "http://localhost:8080";

        axios
            .post(baseUrl+"/register", formData)
            .then(json => {
                console.log(json);
                return json;
            })
            .then(json =>{
                if (json.data.success){
                    let userData = {
                        'username': json.data.data.username,
                        'email': json.data.data.email,
                        'password' : json.data.data.password,
                        // 'auth_token': json.data.data.auth_token,
                    }

                    let appState = {
                        isLoggedIn: true,
                        user: userData,
                    }

                    localStorage['appState'] = JSON.stringify(appState);
                    this.setState(appState);

                    if(appState.user)
                        console.log(json.data.message);

                }else{
                    console.log(' Echec de l\'Enregistrement de l\'Utilisateur');
                }
            })
            .catch(error => {

                console.log('Occurent error when register process : '+error);
        })
    }

    _logout = ()=>{
        let appState = {
            isLoggedIn: false,
            user: {}
        }

        localStorage['appState'] = JSON.stringify(appState);
        this.setState(appState);
    }

    render(){

        return (
            <>
                <Menu isLoggedIn={this.state.isLoggedIn} logout={this._logout} />
                {/*<PersonList/>*/}

                {/*<div className="container">*/}

                {/*    <div className="row mt-5">*/}
                {/*        <div className="col-md-6">*/}
                {/*            <Login loginUser={this._loginUser}/>*/}
                {/*        </div>*/}
                {/*        <div className="col-md-6">*/}
                {/*            <Register registerFunction={this._registerUser}/>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*</div>*/}
                <div className="container ">
                    <div className="row mb-5">
                        <div className="col-md-8">
                            <AddTodo addTodo={this._addTodo}/>
                        </div>
                        <div className="col-md-12 mt-5">
                            <TodoList todos={this.state.todos}/>
                        </div>

                    </div>
                    <p className="text-center">By nkd</p>
                </div>

            </>
        );
    }

}

export default App;
