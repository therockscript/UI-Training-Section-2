import React from 'react';

class StateDemo extends React.Component {

    state = {
        counter: 10
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }    

    incrementCounter() {
        this.setState({
            counter: this.state.counter + 1
        })
    }


    render() {
        return <div>
            <h1>StateDemo component</h1>
            <h3>{this.state.counter}</h3>
            <button type="button"
                onClick={this.incrementCounter.bind(this)}
            >Increment</button>
        </div>
    }
}

export default StateDemo;