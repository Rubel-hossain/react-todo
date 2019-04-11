import React, { Component } from 'react';
import TodoItem from "./TodoItem";

export default class TodoList extends Component {

  render() {
    const {items, clearList, deleteHandle, editHandle} = this.props;
    return (
      <div className="todo-wrapper">
       {items.map(item=>{
          return (
            <TodoItem key={item.id} 
                      item={item}
                      deleteHandle={()=>deleteHandle(item.id)}
                      editHandle={()=>editHandle(item.id)}
             />
          );
       })}

      {(items.length > 0 ) ?
          
          <div className="clear-area">
              <button onClick={clearList} className="btn btn-block text-white bg-danger">Clear List</button>
            </div>
            
            : ""
      }
      </div>
    );
  }
}
