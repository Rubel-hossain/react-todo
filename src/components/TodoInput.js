import React, { Component } from 'react'

export default class TodoInput extends Component {
   

  render() {

    const{ item, changeHandle, submitHandle, editable } = this.props;

    
    return (
      <div>
        <div className="card card-body my-3">
            <form onSubmit={submitHandle}>
                <div className="input-group">
                    <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-white">
                        <i className="fas fa-book"></i>
                    </div>
                    </div>
                    <input value={item} type="text" className="form-control" onChange={changeHandle} placeholder="Add Your Task Here" required/>
                </div>
                <button type="submit" className={editable ? "btn btn-block btn-success mt-3 font-weight-bold": "btn btn-block btn-primary mt-3 font-weight-bold"}>
                 {editable ? "Edit Item" : "Add Item"}
                </button>
            </form>
        </div>
      </div>
    )
  }
}
