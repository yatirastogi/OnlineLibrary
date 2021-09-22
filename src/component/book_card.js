
import React, { Component } from "react";

import axios from "axios";


class Book_card extends React.Component 
  {
    constructor(props) {
      super(props);

  this.state = {bookid:"",disp:"Add to Cart"}
    }



onAdd(event) {
//this.setState({bookid:event.target.parentElement.parentElement.children[2].innerHTML})
var c={bookid:event.target.parentElement.parentElement.children[2].innerHTML}
    this.onAdd= this.onAdd.bind(this);
    event.preventDefault();
    axios({
      method: "POST",
      url: "/addcart",
      headers: {
        'Content-Type':'application/json'
  
      },
      data:c,
    })
    .then((result) => {

if(result.data=="notlogged")
{alert("Login to add");console.log(result.data)}
else{


this.setState({disp:"Added"})
      console.log(result.data)
 c={bookid:""}
}
  })
  }
    render(){
    return(
   <div>
      
      <div className="card-body">
        <h5 className="card-title">{this.props.title}</h5>
        <p className="card-text"><b>Price: </b><span>&#8377;</span>{this.props.price} per day</p>
        <p id="book_id" style={{display:"none"}}>{this.props.bookid}</p>
     <center>

     <button
  style={{ marginBottom: "4%" }}
  className="btn btn-warning"
  value="d"
  onClick={(e) => {this.onAdd(e);
}}
>
  
 {this.state.disp}
</button>

</center>
  </div>
  </div>
  
  
  
    )
    }
  }
  


export default Book_card