import React, { Component } from 'react';
import './App.css';
import TodoInput from "./components/TodoInput";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import uuid from "uuid";

class App extends Component {

  state = {
    items: [],
    id: uuid(),
    item: "",
    editable: false
  }
  changeHandle = (e)=>{
    
    this.setState({
      item: e.target.value
    });
 }

 submitHandle = (e)=>{

  e.preventDefault();

   const newItem = {
     id: this.state.id,
     title: this.state.item
   }

   const updateItem = [...this.state.items, newItem ];

   this.setState({
     items: updateItem,
     item: "",
     id: uuid(),
     editable: false
   });
 }

 clearList = () => {

   this.setState({
     items: []
   });

 }

 deleteHandle = (id)=>{

  const filterItems = this.state.items.filter(item=> item.id !== id);

  this.setState({
    items: filterItems
  });

 }

 editHandle  = (id)=>{

    const filterItems = this.state.items.filter(item=> item.id !== id);
    const singleItem = this.state.items.find(item=> item.id === id);

    this.setState({
      items: filterItems,
      item: singleItem.title,
      id: id,
      editable: true
    });
 }
  render() {

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-7 mx-auto text-center my-4">
              <h2>React Todo List Project</h2>
              <TodoInput 
               item={this.state.item}
               changeHandle={this.changeHandle}
               submitHandle={this.submitHandle}
               editable = {this.state.editable}
              />
            </div>
            <div className="col-7 mx-auto text-center my-4">
              <TodoList 
               items={this.state.items}
               clearList={this.clearList}
               deleteHandle={this.deleteHandle}
               editHandle = {this.editHandle}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
