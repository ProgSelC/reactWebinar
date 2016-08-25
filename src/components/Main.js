require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import TodoComponent from 'components/TodoComponent';

class AppComponent extends React.Component {
    render() {
        return (
            <div className="index">
                <h1>Todo application</h1>
                <TodoComponent/>
            </div>
        );
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
