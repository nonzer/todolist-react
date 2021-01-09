



import React, {Component} from 'react';
import axios from 'axios';
import BASE_URL from './Consts';

class AddTodo extends Component{

    constructor(props) {
        super(props);

        this.state={

        }
    }

    handleSubmit = (e)=>{

        e.preventDefault();
        let form = new FormData(e.target);
        if(form.get('name') !== ''){
            this.props.addTodo(form)
            // form.set('name','');
        }

    }
    render(){
        return (
            <>
                <div className="">
                    <form action=""  onSubmit={this.handleSubmit} className="mt-5">
                        <h3>Ajouter un TODO</h3>
                        <hr/>
                        <div className="form-group">
                            <label htmlFor="name"> Nom </label>
                            <input type="text" name="name" className="form-control" />
                        </div>
                        {/*<div className="form-group">*/}
                        {/*    <label htmlFor="description"> Description </label>*/}
                        {/*    <textarea name="description" className="form-control" >*/}

                        {/*    </textarea>*/}
                        {/*</div>*/}
                        <button className="btn btn-success">Ajouter</button>
                    </form>
                </div>
            </>
        )
    }
}

export default AddTodo;