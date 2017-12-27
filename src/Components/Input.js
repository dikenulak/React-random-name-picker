import React, { Component } from 'react';

class Input extends Component {
    nameValue(e){
        if(e.keyCode === 13){
            this.props.getInputName(this.refs.inputName.value);
            this.refs.inputName.value = "";
        }
    }

    render() {
        return (
            <input type="text" name="person-name" ref="inputName" onKeyDown={this.nameValue.bind(this)} placeholder="Enter your name...."/>
        );
    }
}

export default Input;
