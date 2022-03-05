import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
    }
    state={
        who: "world"
    }
    onClick(value){
        this.setState({
            who: value
        })
    }
    render() {
      return <div>
          <p>Hello, {this.state.who}</p>
          <button onClick={e=>this.onClick("World")}>World</button>
          <button onClick={e=>this.onClick("Friend")}>Friend</button>
          <button onClick={e=>this.onClick("React")}>React</button>
      </div>
    }
}

export default HelloWorld