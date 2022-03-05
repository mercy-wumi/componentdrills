import React from 'react';

export default class Accordion extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            index: null
        }
    }
    
    state={
        index: null
    }
    onClick(value){
        this.setState({
            index: value
        })
    }
    render() {
      return <ul>
          {this.props.sections.map((section, index) =><li>
              
              {section.title}
              <p>
              {this.state.index===index?section.content:null}
              </p>
              <button onClick={e=>this.onClick(index)}>Click here</button>
          </li>)}
      </ul>
    }
}

