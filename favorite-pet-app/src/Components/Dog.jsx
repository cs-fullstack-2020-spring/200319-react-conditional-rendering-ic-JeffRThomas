import React, { Component } from 'react';

class Dog extends Component {
    render() {
        return (
            <div>
                {/* Initial Sanity Check */}
                {/* <h1>"I am the Dog Component"</h1> */}
                <h2>You're a dog person!</h2>
                <img src="https://i.pinimg.com/originals/58/48/f9/5848f97c35d1e1a3093b16afc7b15be5.png" alt="Spike" />
                <p>The domestic dog (Canis familiaris when considered a distinct species or Canis lupus familiaris when considered a subspecies of the wolf)is a member of the genus Canis (canines), which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.The dog and the extant gray wolf are sister taxa as modern wolves are not closely related to the wolves that were first domesticated,which implies that the direct ancestor of the dog is extinct.The dog was the first species to be domesticated, and has been selectively bred over millennia for various behaviors, sensory capabilities, and physical attributes</p>
            </div>
        )
    }
};

export default Dog;