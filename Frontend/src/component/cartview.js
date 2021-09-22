import React, { Component } from "react";
import axios from "axios";
import Book_remove from './book_remove';

class CartView extends React.Component 
  {
    constructor(props) {
      super(props);

  this.state = {message:[],empty:0}
    }
   componentDidMount(){
      axios({
        method: "POST",
        url: "/cartview",
        headers: {
          'Content-Type':'application/json'
    
        },
        data:this.state,
      })
      .then((result) => {
          if(result.data=='notlogged'){this.setState({logged:0})}
          else if(result.data=="no")
          {
            this.setState({empty:0,logged:1})
          }
          else{
         this.setState({
         message:result.data,
         logged:1,
         empty:1
        });}
    })
  }

render(){
  return(
    <div className="container">
      <div className="row">

         {this.state.logged && this.state.empty && this.state.message.map((item)=>{  return(<div className="card col-lg-4" style={{"width": "18rem",padding:"3%"}}>
         <Book_remove id={item.id} title={item.title} price={item.price} bookid={item.bookid}  />
   
         </div>
         
         )})}

         {!this.state.logged && <div><h1>Login to View Cart</h1><a href="/login"><button class="btn btn-primary">Login</button></a></div>}
         {!this.state.empty && this.state.logged && <div><h1>Your Cart is Empty!</h1></div>}
       
   </div>
   
   
    </div>
  )
}
}
    export default CartView;