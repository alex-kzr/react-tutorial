var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

// create component
// class TodoComponent extends React.Component{ // without create-react-class lib
var TodoComponent = createReactClass({
    getInitialState: function(){
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap']            
        };
    },
    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(
                <li>{item}</li>
            );
        });
        
        return(
            <div id='todo-list'>
                <p>The busiest people have the most leisure...</p>
                <ul>{todos}</ul>
            </div>
        );
    } // render
});

// put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));