import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        	/*'TODO (HelloWorld): Add a line such that "Hello World!" is displayed on your webpage!*/
        );
    }
}

export default HelloWorld;