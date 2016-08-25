'use strict';

import React from 'react';

require('styles//Todo.css');

class TodoComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            current: ''
        }
    }

    readValue = (event) => {
        this.setState({
           current: event.target.value
        });
    };

    addTask = (event) => {
        event.preventDefault();
        const current = {
            id: this.state.data.length !== 0 ? this.state.data[this.state.data.length - 1].id + 1 : 0,
            title: this.state.current,
            status: false
        };

        const dublicated = this.state.data.some((element) => {
            return element.title === current.title;
        });

        if (dublicated) {
            return;
        }

        this.setState({
            data: this.state.data.concat(current),
            current: ''
        });
    };

    changeTask = (id) => {
        this.setState({
           data: this.state.data.map((element) => {
               const item = element;
               if(item.id === id) {
                   item.status = !item.status;
               }
               return item;
           })
        });
    };

    render() {
        const tasks = this.state.data.map((item) => {
            const itemClass = item.status === true ? 'done' : null;

            return (
                <li key={ item.id } className={ itemClass } onClick={ this.changeTask.bind(null, item.id) }>{ item.title }</li>
            )
        });

        return (
            <div className="todo-component">
                <input className="val" type="text" placeholder=" Добавьте новую задачу..." onChange={ this.readValue } value={ this.state.current }/>
                <input className="add" type='submit' value='Добавить' onClick={ this.addTask }/>
                <ul className="tasks">
                    { tasks }
                </ul>
            </div>
        );
    }
}

TodoComponent.displayName = 'TodoComponent';

// Uncomment properties you need
// TodoComponent.propTypes = {};
// TodoComponent.defaultProps = {};

export default TodoComponent;
