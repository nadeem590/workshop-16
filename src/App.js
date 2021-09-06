import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      FullName:"",
      Email:"",
      MobileNo:"",
      Password:"",
      ConfirmPassword:""
    }
    this.handleName=this.handleName.bind(this);
    this.handleEmail=this.handleEmail.bind(this);
    this.handleMobile=this.handleMobile.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.handleConfirmPassword=this.handleConfirmPassword.bind(this);

    
    this.Handle=this.Handle.bind(this);
  }
  handleName(e){
    this.setState({
      FullName:e.target.value,
    })
  }
  handleEmail(e){
    this.setState({
        Email:e.target.value
    })
}
handleMobile(e){
    this.setState({
        MobileNo:e.target.value
    })
}
handlePassword(e){
    this.setState({
        Password:e.target.value
    })
}
handleConfirmPassword(e){
        this.setState({
          ConfirmPassword:e.target.value
        })
}

  Handle(e){
    e.preventDefault();
    console.log(this.state);
    const register={
      FullName:this.state.FullName,
      Email:this.state.Email,
      MobileNo:this.state.MobileNo,
      Password:this.state.Password,
      ConfirmPassword:this.state.ConfirmPassword
    }
    
    axios.post("http://localhost:5000/loginapi",register)
  .then(res=>console.log(res.data))
  }
  render() {
      
    return (
        <div>
                <form onSubmit={this.Handle}>
                    <tr>Full Name</tr>
                    <input type="text" required="true" name="FullName"  value={this.state.FullName} onChange={this.handleName}/>
                    <tr> Email</tr>
                    <input type="email" name="Email"  value={this.state.Email} onChange={this.handleEmail}/>
                    <tr> MobileNo</tr>
                    <input type="number" name="Mobile No" minLength="10"  value={this.state.MobileNo} onChange={this.handleMobile}/>
                    <tr> Password</tr>
                    <input type="password" name="Password"  value={this.state.Password} onChange={this.handlePassword}/>
                    <tr> ConfirmPassword</tr>
                    <input type="password" name="Confirm Password"  value={this.state.ConfirmPassword} onChange={this.handleConfirmPassword}/>
                     <br/>
                <button type="submit">Submit</button>
                </form>
            </div>
    );
  }
}

export default App;