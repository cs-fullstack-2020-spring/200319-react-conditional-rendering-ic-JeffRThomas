import React, {Component} from 'react';
import Cat from './Cat';
import Dog from './Dog';

class AppContainer extends Component {
    constructor(props){
        super(props);
        this.state={};
    };

    render(){
        return(
            <div>
                <h1>"I am the Container"</h1>
                <h2>These are my child components</h2>
                <Cat/>
                <Dog/>
            </div>
        )
    }
};

export default AppContainer;