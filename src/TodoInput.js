import React from 'react'

export default function TodoInput() {
    return (
        <div>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-3">
                        <label>Enter Todo:</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="col-md-3">
                        <label>Priority:</label>
                        <select className="form-control">
                        <option value="">select priority</option>
                        <option value="hight">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <br/>
                        <input type="buttton" className="form-control btn btn-info" value="Add"/>
                    </div>
                </div> 
            </div>
        </div>
    )
}
