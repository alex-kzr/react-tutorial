var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

// create component
// class TodoComponent extends React.Component{ // without create-react-class lib
var TodoComponent = createReactClass({
    getInitialState: function(){
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap'],
            age: 30
        };
    },
    render: function(){
        var ager = setTimeout(function () {
            this.setState({
                age: 35
            });
        }.bind(this), 5000);
        
        return(
            <div id='todo-list'>
                <p>The busiest people have the most leisure...</p>
                <p>{this.state.age}</p>
                <ul>
                    <li>{this.state.todos[0]}</li>
                    <li>{this.state.todos[1]}</li>
                    <li>{this.state.todos[2]}</li>
                </ul>
            </div>
        );
    } // render
});

// put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));