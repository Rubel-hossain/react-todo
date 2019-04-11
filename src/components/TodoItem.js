import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    const {item, deleteHandle, editHandle} = this.props;
    return (
      
      <div>
          <div className="single-todo d-flex justify-content-between border py-2 mb-3">
             <div className="todo-text p-2">
                <h5 className="mb-0">{item.title}</h5>
             </div>
             <div className="todo-action pt-1">
               <button onClick={editHandle} className="btn btn-outline-info mr-1">Edit</button>
               <button onClick={deleteHandle} className="btn btn-outline-danger mr-2">Delete</button>
             </div>
          </div>
      </div>
    )
  }
}
