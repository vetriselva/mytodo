import React from 'react'

export default function Todo(props) {
    function updateStatus(e, id) {
        let status = e.target.value;
        props.updateStatus(id,status);
    }
    function remove(id) {
        props.remove(id);
    }
    return (
        <div className="p-2 bg-light border">
            <div className="card">
                <div class="card-body">
                    <div className="col-lg-6">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6">
                                <label>Todo:</label>
                                {props.todo.name}
                                </div>
                                <div className="col-md-2">
                                    <label>Priority:</label>
                                    {props.todo.priority == 'high' ? 
                                        <span className="badge bg-danger"> High </span>: 
                                        <span className="badge bg-warning"> Low </span>}
                                </div>
                                <div className="col-md-4">
                                    <label>Status:</label>
                                    <select onChange={(e) => updateStatus(e,props.todo.id)} value={props.todo.status} className="form-control">
                                        <option value="start">Start</option>
                                        <option value="inprocess">Inprocess</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-3">
                                    <br/>
                                    <input type="button" onClick={() => remove(props.todo.id)} className="form-control btn btn-info btn-sm" value="remove"/>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        
    )
}
