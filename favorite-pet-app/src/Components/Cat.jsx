import React, {Component} from 'react';

class Cat extends Component {
    render(){
        return(
            <div>
                {/* Initial Sanity Check */}
                {/* <h1>"I am the Cat Component"</h1> */}
                <h2>You're a cat person!</h2>
                <img src="https://vignette.wikia.nocookie.net/heroes-and-villians/images/8/81/20180904_030553.png/revision/latest?cb=20180910205148" alt="Tom" id="TomPic"/>
                <p>The cat (Felis catus) is a small carnivorous mammal.It is the only domesticated species in the family Felidae and often referred to as the domestic cat to distinguish it from wild members of the family.The cat is either a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact. Domestic cats are valued by humans for companionship and for their ability to hunt pests such as rodents. About 60 cat breeds are recognized by various cat registries.</p>
            </div>
        )
    }
};
export default Cat;