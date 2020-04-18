var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

// create component
// class TodoComponent extends React.Component{ // without create-react-class lib
var TodoComponent = createReactClass({
    render: function(){
        return(
            <div>
                <h1>Hellooooo</h1>
                <p>man</p>
            </div>
        );
    }
});

// put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));