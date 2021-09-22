import react from 'react';
import axios from 'axios';

class Create extends react.Component {
constructor(props)
{
  super(props);
  this.state={name:"",Account_State:"",message:"",email:"",password:"",c:[{Name:"None",Circle:"None"}]};
}

onCreate(event) {
    //when user creates acc
    this.onCreate = this.onCreate.bind(this);
    event.preventDefault();
   if(this.state.password==this.state.repassword)
   {

    axios({
      method: "POST",
      url: "/createsub",
      headers: {
        'Content-Type':'application/json'
  
      },
      data:this.state,
    })
    .then((result) => {
      //console.log(result.data)
      if(result.data){
      this.setState({
       message:result.data,
      });
    }
   
  })
  
  }
  else{
    alert("The re entered password doesn't match with the password")
  }
}


  onPin(event) {
    //when user creates acc
    this.onPin = this.onPin.bind(this);
    event.preventDefault();
axios.get("https://api.postalpincode.in/pincode/"+event.target.value).then((response)=>{
  const a=response.data;

  const b=a[0]['PostOffice']
  
   if(b!=null){
     this.setState({c:b,Account_State:b[0].Circle,district:b[0].District});
//  b.map(function(val){console.log("hello"+val.Name)})
   }
  console.log(this.state)
})
  }

render(){

    return (
        <div><h1>Welcome to Create Account Page</h1>
        <form>
        <div class="form-group">
         <label for="exampleInputName">Name</label>
         <input required onChange={(e) => this.setState({ name: e.target.value })} type="text" name="name"class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter Name"/>
       </div>
       <div class="form-group">
         <label for="exampleInputEmail1">Email address</label>
         <input required onChange={(e) => this.setState({ email: e.target.value })} type="email" name="email"class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
       </div>
       <div class="form-group">
         <label for="exampleInputPassword1">Password</label>
         <input required onChange={(e) => this.setState({ password: e.target.value })}type="password" name="password"class="form-control" id="exampleInputPassword1" placeholder="Password"/>
       </div>
       <div class="form-group">
         <label for="exampleInputPassword1">Re-enter Password</label>
         <input required onChange={(e) => this.setState({ repassword: e.target.value })}type="password" name="password"class="form-control" id="exampleInputPassword1" placeholder="Password"/>
       </div>
       <div class="form-group">
         <label for="exampleInputPin">Pincode</label>
         <input required onChange={(e) => this.onPin(e)} type="text" name="pin"class="form-control" id="exampleInputPin" placeholder="Pincode"/>
       </div>

 
       <div class="row">
        
       <div class="col-lg-6">
       <div class="form-group">
         <label for="exampleInputState">State</label>
         <input value={this.state.c[0].Circle} onChange={(e) => this.setState({ Account_State: this.state.c[0].Circle })}type="text" name="state"class="form-control" id="exampleInputState" placeholder="State"/>
      
      </div>
      </div>
      
      <div class="col-lg-6">
       <div class="form-group">
         <label for="exampleInputDist">District</label>
         <input value={this.state.c[0].District} type="text" name="district"class="form-control" id="exampleInputDist" placeholder="District"/>
      
      </div>
       </div>
</div>
  

       <button
  style={{ marginBottom: "4%" }}
  className="btn btn-warning"
  value="d"
  onClick={(e) => this.onCreate(e)}
>
  
  Create
</button><br/><b>{this.state.message}</b></form></div>)
    }}
    export default Create
