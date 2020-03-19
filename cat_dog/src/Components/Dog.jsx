import React, {Component} from 'react';

class Dog extends Component {
    constructor(props){
        super(props);
        this.state={};
    };

    render(){
        return(
            <div>
                <h1>"I am the Dog Component"</h1>
            </div>
        )
    }
};

export default Dog;