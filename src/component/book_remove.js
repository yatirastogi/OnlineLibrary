
import React, { Component } from "react";

import axios from "axios";


class Book_remove extends React.Component 
  {
    constructor(props) {
      super(props);

  this.state = {bookid:"",disp:"Remove From Cart"}
    }



onRem(event) {
//this.setState({bookid:event.target.parentElement.parentElement.children[2].innerHTML})
var c={bookid:event.target.parentElement.parentElement.children[2].innerHTML}
    this.onRem= this.onRem.bind(this);
    event.preventDefault();
    axios({
      method: "POST",
      url: "/delcart",
      headers: {
        'Content-Type':'application/json'
  
      },
      data:c,
    })
    .then((result) => {

      this.setState({disp:"Removed"});
      console.log(result.data);
 c={bookid:""}
  })
  }
    render(){
    return(
   <div>
      
      <div className="card-body">
        <h5 className="card-title">{this.props.title}</h5>
        <p className="card-text"><b>Price: </b><span>&#8377;</span>{this.props.price} per day</p>
        <p id="book_id" style={{display:"block"}}>{this.props.bookid}</p>
     <center>

     <button
  style={{ marginBottom: "4%" }}
  className="btn btn-warning"
  value="d"
  onClick={(e) => {this.onRem(e);
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
  


export default Book_remove