import react from 'react';
import axios from 'axios';

class Logout extends react.Component {
constructor(props)
{
  super(props);
  this.state={message:""};
}
componentDidMount(){
axios({
        method: "POST",
         url: "/logout",
         headers: {
         'Content-Type':'application/json'
    
        },
       data:this.state,
   })
    .then((result) => {

       this.setState({
      message:"Logged Out"
        });
     })
    
}
render(){
return(<div>{this.state.message}

</div>

)
}
}
export default Logout 