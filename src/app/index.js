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
                <p>{this.props.mssg}</p>
                <p><strong>Cheese name: </strong>{this.props.cheese.name}</p>
                <p><strong>Cheese smell factor: </strong>{this.props.cheese.smellFactor}</p>
                <p><strong>Cheese price: </strong>{this.props.cheese.price}</p>
            </div>
        );
    }
});


var myCheese = {name: 'Camembert', smellFactor: 'Extreme pong', price: '3.50'};

// put component into html page
ReactDOM.render(<TodoComponent mssg="I like cheese" cheese={myCheese} />, document.getElementById('todo-wrapper'));