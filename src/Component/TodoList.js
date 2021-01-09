import React, {Component, Fragment} from 'react';


import moment from 'moment';

const TodoList = ({todos})=>{
    return (
        <>
            <h3>Liste des TODOs</h3>

            {
                todos.map(todo =>{
                    return (
                        <Fragment key={todo.id}>
                            <div className="py-2 pr-2 pl-4 shadow rounded mt-3">
                                <div className="d-flex justify-content-between">
                                    <h5>{todo.name}</h5>
                                    <div>
                                        <span className="badge badge-secondary">{todo.state}</span>
                                    </div>
                                </div>
                                <span className="text-secondary " style={{fontSize:'12px'}}>{moment(todo.created_at).fromNow()}</span>
                                <p className="text-secondary">{todo.description}</p>
                            </div>
                        </Fragment>
                    )
                })
            }
        </>
    )
}

export default TodoList;
