import React, { Component } from 'react';
import Cat from './Cat';
import Dog from './Dog';


class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLikesCats: false,
            userLikesDogs: false
        };
    };

    CatLover = (userChoice) => {
        userChoice.preventDefault();
        console.log("Cat Lover");
        this.setState(
            {
                userLikesCats: true,
                userLikesDogs: false
            }
        )
    };

    DogLover = (userChoice) => {
        userChoice.preventDefault();
        console.log("Dog Lover");
        this.setState(
            {
                userLikesCats: false,
                userLikesDogs: true,
            }
        )
    };

    render() {
        let FavPet;
        if (this.state.userLikesCats) {
            FavPet = <Cat/>
        } else if (this.state.userLikesDogs) {
            FavPet =<Dog/>
        }
        return (
            <div>
                {/* Initial Sanity Check
                <h1>"I am the Container"</h1>
                <h2>These are my child components</h2>
                <Cat />
                <Dog /> */}
                <h1>Favorite Pet App</h1>
                {FavPet}
                <button onClick={this.CatLover}>I Love Cats</button>
                <button onClick={this.DogLover}>I Love Dogs</button>
            </div>
        )
    }
};

export default AppContainer;