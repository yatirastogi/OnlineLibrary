import React from 'react';
import react from 'react';
import axios from 'axios'
class Navigation extends react.Component{
constructor(props)
{
  super(props);
  this.state={name:""};
}
componentDidMount()
{
    
    axios({
      method: "POST",
      url: "/oo",
      headers: {
        'Content-Type':'application/json'
  
      },
      data:this.state,
    })
    .then((result) => {
      this.setState({
       name:result.data,
      });
  })
}
render(){
    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand">OnlineLibrary</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/create">Create</a>
            </li>
       
<li class="nav-item">
              <a class="nav-link " href="/viewcart">Cart</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/logout">Logout</a>
            </li>
 <li class="nav-item">
              <a class="nav-link " href="/upload">Upload</a>
            </li>
   <li class="nav-item">
              <a class="nav-link " href="/viewcart">{this.state.name}</a>
            </li>
          </ul>
      
        </div>
      </nav>
      </div>
    )
}
}

export default Navigation;