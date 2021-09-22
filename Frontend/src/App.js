import logo from './logo.svg';
import './App.css';
import react from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import Login from './component/Login';
import Create from './component/Create';
import Logout from './component/Logout';
import Home from './component/Home';
import Upload from './component/Upload';
import CartView from './component/cartview';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
class App extends react.Component {
constructor(props)
{
  super(props);
  this.state={name:"",ok:0,email:"",password:""};
}

render() {
  return (
     <Router>
       <Navigation/>
          <Switch>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/create' component={Create}></Route>
            <Route exact path='/logout' component={Logout}></Route>
            <Route exact path='/home' component={Home}></Route>
     <Route exact path='/viewcart' component={CartView}></Route>
     <Route exact path='/upload' component={Upload}></Route>
          </Switch>
        
     </Router>
 );
}

// componentDidMount()
// {
//   axios.get(`/try`)
//   .then(res => {
//     console.log(res.data);
//   })
  
//   this.setState({ok:this.state.ok+2})
// }
// onSumit(event) {
//   //when user creates acc
//   this.onSumit = this.onSumit.bind(this);
//   event.preventDefault();
//   axios({
//     method: "POST",
//     url: "/oo",
//     headers: {
//       'Content-Type':'application/json'

//     },
//     data:this.state,
//   })
//   .then((result) => {
//     console.log(result.data)

//     this.setState({
//      ok:5,
//     });
// })

// }


// onSubmit(event) {
//   //when user creates acc
//   this.onSubmit = this.onSubmit.bind(this);
//   event.preventDefault();
//   axios({
//     method: "POST",
//     url: "/login",
//     headers: {
//       'Content-Type':'application/json'

//     },
//     data:this.state,
//   })
//   .then((result) => {
//     console.log(result.data)
//     window.location.reload(true);
//     this.setState({
//      ok:3,
//     });
// })

// }

// onLogout(event) {
//   //when user creates acc
//   this.onLogout = this.onLogout.bind(this);
//   event.preventDefault();
//   axios({
//     method: "POST",
//     url: "/logout",
//     headers: {
//       'Content-Type':'application/json'

//     },
//     data:this.state,
//   })
//   .then((result) => {
//     console.log(result.data)

//     this.setState({
//      ok:0,
//     });
// })

// }

// onCreate(event) {
//   //when user creates acc
//   this.onCreate = this.onCreate.bind(this);
//   event.preventDefault();
//   axios({
//     method: "POST",
//     url: "/createsub",
//     headers: {
//       'Content-Type':'application/json'

//     },
//     data:this.state,
//   })
//   .then((result) => {
//     console.log(result.data)

//     this.setState({
//      ok:0,
//     });
// })

// }












// render(){

//   return (
//     <div className="App"><Navigation/>
//     {this.state.ok}
   
//    <h1>Welcome to Login Page</h1>
//    <form>
//    <div class="form-group">
//     <label for="exampleInputEmail1">Name</label>
//     <input onChange={(e) => this.setState({ name: e.target.value })} type="text" name="name"class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
//   </div>
//   <div class="form-group">
//     <label for="exampleInputEmail1">Email address</label>
//     <input onChange={(e) => this.setState({ email: e.target.value })} type="email" name="email"class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
//   </div>
//   <div class="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input onChange={(e) => this.setState({ password: e.target.value })}type="password" name="password"class="form-control" id="exampleInputPassword1" placeholder="Password"/>
//   </div>
//   <div class="form-group form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
  
// <button
//   style={{ marginBottom: "4%" }}
//   className="btn btn-primary"
//   value="Login"
//   onClick={(e) => this.onSubmit(e)}
// >
  
//   Login
// </button>
// <button
//   style={{ marginBottom: "4%" }}
//   className="btn btn-primary"
//   value="d"
//   onClick={(e) => this.onSumit(e)}
// >
  
//   try
// </button>
// <button
//   style={{ marginBottom: "4%" }}
//   className="btn btn-primary"
//   value="d"
//   onClick={(e) => this.onLogout(e)}
// >
  
//   Logout
// </button>
// <button
//   style={{ marginBottom: "4%" }}
//   className="btn btn-warning"
//   value="d"
//   onClick={(e) => this.onCreate(e)}
// >
  
//   Create
// </button>
// </form>
   
//     </div>
//   );
// }}
}
export default App;
