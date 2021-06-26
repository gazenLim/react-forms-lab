import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  handlePress =(event)=>{
    this.setState({
      value: event.target.value
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handlePress(event)} value={this.state.value}/>
        <p>You press {this.props.maxChars - this.state.value.length} characters remaining. </p>
      </div>
    );
  }
}

export default TwitterMessage;
