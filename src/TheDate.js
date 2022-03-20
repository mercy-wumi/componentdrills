import React from 'react';

class TheDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      showDate: false
    }
    this.handleShowDate = this.handleShowDate.bind(this)
  }
  handleShowDate = () => {
    this.setState({
      showDate: true
    })
  }

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20%', textAlign: 'center', padding: '0px 20px' }}>
        <p>{this.state.showDate ? this.state.date.toString() : ''}</p>
        <button onClick={this.handleShowDate}>Show Date</button>
      </div>
    )
  }
}

export default TheDate