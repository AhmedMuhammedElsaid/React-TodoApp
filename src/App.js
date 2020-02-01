import React, { Component } from 'react';
import './index.css';
import ToDoItem from './Components/ToDoList/ToDoList';
import AddItem from './Components/AddItem/AddItem';

class App extends Component {
  state = {
    item: [
      { name: "Jon Doe", id: 100, age: 25 },
      { name: "Jon Doe", id: 99, age: 22 },
      { name: "Jon Doe", id: 98, age: 30 },
      { name: "Jon Doe", id: 80, age: 40 },
    ]
  }
  DelItem = (id) => {
    //   let {item} = this.state;
    // let i = item.findIndex(item => item.id===id);
    // item.splice(i,1);
    // this.setState({item})
    let item = this.state.item.filter(item => { return item.id !== id }
    );
    this.setState({ item })
  }
  addItem = (item) => {
    item.id = Math.random() * 10;
    let items = this.state.item;
    items.push(item);
    this.setState({ item: items })

  }

  render() {
    return (
      <div className=" container">
        <h1 className="text-center">Todo List</h1>
        <ToDoItem items={this.state.item} deletItem={this.DelItem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
