import react from 'react';
import axios from 'axios';

class Upload extends react.Component {
constructor(props)
{
  super(props);
  this.state={title:"",price:""};
}

onUpload(event) {
    //when user creates acc
    this.onUpload = this.onUpload.bind(this);
    event.preventDefault();
    axios({
      method: "POST",
      url: "/upload",
      headers: {
        'Content-Type':'application/json'
  
      },
      data:this.state,
    })
    .then((result) => {
      this.setState({
       message:result.data,
       title:"",
       book:""
      });
  })
  }

render(){

    return (
        <div><h1>Upload your book</h1>
        <form>
        <div class="form-group">
         <label for="title">Title</label>
         <input onChange={(e) => this.setState({ title: e.target.value })} type="text" name="title"class="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Book Title"/>
       </div>
       <div class="form-group">
         <label for="price">Price</label>
         <input onChange={(e) => this.setState({price: e.target.value })} type="text" name="price"class="form-control" id="price" aria-describedby="emailHelp" placeholder="Enter Price"/>
       </div>

       <div class="form-group form-check">
         <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
         <label class="form-check-label" for="exampleCheck1">Check me out</label>
       </div>
       
       <button
  style={{ marginBottom: "4%" }}
  className="btn btn-warning"
  value="d"
  onClick={(e) => this.onUpload(e)}
>
  
Upload
</button>{this.state.message}</form></div>)
    }}
    export default Upload
