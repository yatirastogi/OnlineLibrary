import React, { Component } from "react";
import Book_card from './book_card';
import axios from "axios";


class Home extends React.Component 
  {
    constructor(props) {
      super(props);

  this.
  state = {message:[],city:[""],statename:"",district:"",statesIn:[]}
    }
   componentDidMount(){
      axios({
        method: "POST",
        url: "/viewall",
        headers: {
          'Content-Type':'application/json',
    
        },
        data:this.state,
      })
      .then((result) => {
       // console.log(result.data)
        
        this.setState({
         message:result.data,
        });
    })

    //to get cities of state

  var states = '{"country": "India"}';

  axios({
    method: "POST",
    url: "https://countriesnow.space/api/v0.1/countries/states",
    headers: {
      'Content-Type':'application/json',
      

    },
    data:states
  })
  .then((result) => {
    //console.log();
    this.setState({statesIn:result.data.data.states})
    
   
})

  



}


filterByCity(){

  axios({
    method: "POST",
    url: "/viewallofstate",
    headers: {
      'Content-Type':'application/json',

    },
    data:this.state,
  })
  .then((result) => {
   
    this.setState({message:result.data});
    console.log(this.state.message);
})



}
cityview()
{
  this.cityview = this.cityview.bind(this);
  
  axios({
    method: "POST",
    url: "/view",
    headers: {
      'Content-Type':'application/json',

    },
    data:this.state,
  })
  .then((result) => {
   
    this.setState({message:result.data});
    console.log(this.state.message);
    
}) 
//this.viewbooksofcity();
  
  
}

cityname(event) {
  //when user creates acc
  this.cityname = this.cityname.bind(this);
  event.preventDefault();
  var data = {"country": "India","state":event.target.value};
      axios({
        method: "POST",
        url: "https://countriesnow.space/api/v0.1/countries/state/cities",
        headers: {
          'Content-Type':'application/json',
          
    
        },
        data:data
      })
      .then((result) => {

        //console.log(result.data);
        this.setState({city:result.data.data,statename:event.target.value});
        this.filterByCity();
       
    })
}
cityname2(event) {
  //when user creates acc
  this.cityname = this.cityname.bind(this);
  event.preventDefault();
  console.log("ee")
      axios({
        method: "GET",
        url: "/try",
        headers: {
          'Content-Type':'application/json',
          
    
        },
       
      })
      .then((result) => {

        console.log(result.data);
        this.setState({district:event.target.value});
        this.cityview();
       
    })
}

render(){
  return(

    <div className="container">
      <br/><br/>
          <h4>Filter by state and district</h4>
          <br/><br/>
      <div class="row">
    
      <div class="col-lg-6">
      <select onChange={(e)=>this.cityname(e)}>
      {
       this.state.statesIn.map((items)=>{
         return(<option className="dropdown-item">{items.name}</option>)
       })}
        </select>
</div>
<div class="col-lg-6">
        <select  onChange={(e)=>this.cityname2(e)}>
      {
       this.state.city.map((items)=>{
         return(<option className="dropdown-item">{items}</option>)
       })}
        </select>
</div>
</div>
<br/><br/>

      <div className="row">
        
         {this.state.message.map((item)=>{ return(<div className="card col-lg-4" style={{"width": "18rem",padding:"3%"}}>
         <Book_card id={item.id} title={item.title} price={item.price} bookid={item.bookid}  />
   
         </div>
         
         )})}
       
   </div>
   
   
    </div>
      
  )
}
}
    export default Home;