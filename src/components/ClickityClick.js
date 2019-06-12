import React from 'react';

class ClickityClick extends React.Component {

// create constructor
    constructor() {
        super()
        // establish state
        this.state = {
            hasBeenClicked: false
            // state is default false
        };
    }

    handleClick = () => {
        this.setState({
            hasBeenClicked: true
            // change default state to true
        }, () => console.log(this.state.hasBeenClicked))
    }


// render and use functions
    render() {
        // return the functions in a div and button
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not '} been clicked!</p>
                <button onClick={this.handleClick}> Click Me! </button>
            </div>
            // if button object has been clicked the return will be 'not' else the return will return null
        );
    }

}


export default ClickityClick;
