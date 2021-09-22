import react from 'react';
import axios from 'axios';

class Login extends react.Component {
constructor(props)
{
  super(props);
  this.state={message:"",email:"",password:""};
}

onSubmit(event) {
    //when user creates acc
    this.onSubmit = this.onSubmit.bind(this);
    event.preventDefault();
    axios({
      method: "POST",
      url: "/login",
      headers: {
        'Content-Type':'application/json'
  
      },
      data:this.state,
    })
    .then((result) => {
     
      window.location.reload(true);
      if(result.data=="wrong"){
      this.setState({
       message:"User Not Found!",
      });
    }
    else
    this.setState({
      message:"Logged In",
     });
  })
  
}

render(){

    return (
        <div><h1>Welcome to Login Page</h1>
        <form>
       <div class="form-group">
         <label for="exampleInputEmail1">Email address</label>
         <input onChange={(e) => this.setState({ email: e.target.value })} type="email" name="email"class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
       </div>
       <div class="form-group">
         <label for="exampleInputPassword1">Password</label>
         <input onChange={(e) => this.setState({ password: e.target.value })}type="password" name="password"class="form-control" id="exampleInputPassword1" placeholder="Password"/>
       </div>
       <div class="form-group form-check">
         <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
         <label class="form-check-label" for="exampleCheck1">Check me out</label>
       </div>
       
     <button
       style={{ marginBottom: "4%" }}
       className="btn btn-primary"
       value="Login"
       onClick={(e) => this.onSubmit(e)}
     >
       
       Login
     </button>{this.state.message}</form></div>)
    }}
    export default Login
