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
                <TodoItem item={item} key={index} />
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


// create TodoItem component
var TodoItem = createReactClass({
    render: function(){
        return(
            <li>
                <div className="todo-item">
        <span className="item-name">{this.props.item}</span>
                </div>
            </li>
        );
    }
});

// put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));