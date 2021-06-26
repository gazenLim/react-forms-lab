import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.handleLogin = this.handleLogin.bind(this)
    this.state = {
      username: '',
      password: ''
    };
  }


  handlePress  =(event)=>{
    this.setState({
      [event.target.name]: event.target.value
      
    })
    console.log(event.target.value)
  }


  handleLogin(event){
    event.preventDefault()
    console.log('hello')
    const username = this.state.username
    const password = this.state.password
    if(username !== "" && password !== ""){
      this.props.handleLogin({username, password})
      this.setState({
        username: '',
        password: ''
      })
    }

  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handlePress} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handlePress} value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
