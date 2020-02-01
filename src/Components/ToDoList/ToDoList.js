import React from 'react';

const ToDoItem = (props) => {
    const { items, deletItem } = props;
    let length = items.length;
    const itemsList = length ? (items.map(item => {
        return (
            <div key={item.id}>
                <span className="name"> {item.name} </span>
                <span className="age">  {item.age} </span>
                <span className="action icon" onClick={() => deletItem(item.id)}>&times;</span>
            </div>
        )
    })) : (<p>There Is no Item to show :( </p>)

    return (

        <div className="ListItems">
            <div className="list--Items">
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
            {itemsList}
        </div>
    )
}
export default ToDoItem