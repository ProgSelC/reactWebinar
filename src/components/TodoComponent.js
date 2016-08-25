'use strict';

import React from 'react';

require('styles//Todo.css');

class TodoComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    title: 'Выучить React.js',
                    status: false
                },
                {
                    title: 'Прочитать книгу по ES6',
                    status: true
                },
                {
                    title: 'Просмотреть видео по WebPack',
                    status: false
                }
            ],
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
            title: this.state.current,
            status: false
        };
        this.setState({
            data: this.state.data.concat(current),
            current: ''
        });
        //React.findDOMNode(this.refs.item).focus();
    };

    render() {
        const tasks = this.state.data.map((item) => {
            const itemClass = item.status === true ? 'done' : null;

            return (
                <li className={ itemClass }>{ item.title }</li>
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
