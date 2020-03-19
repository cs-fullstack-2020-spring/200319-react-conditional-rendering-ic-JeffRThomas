import React, {Component} from 'react';

class Cat extends Component {
    constructor(props){
        super(props);
        this.state={};
    };

    render(){
        return(
            <div>
                <h1>"I am the Cat Component"</h1>
            </div>
        )
    }
};

export default Cat;