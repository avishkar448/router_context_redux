import React, { Component } from 'react'
import axios from 'axios'

export class AxiosPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userID:' ',
         title:' ',
         body:' '
      }
    }
    
    changeHandler=(e)=>{ 
        this.setState({ 
            [e.target.name]:e.target.value
        })
    }

    submitHandler=(e)=>{ 
        e.preventDefault()
        console.log(this.state)

        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(Response=>{ 
            console.log(Response)
        })
        .catch(error=>{ 
            console.log("Somthing went wrong here")
        })
    }
  render() {
    const {userID,title,body}=this.state
    return (
      <>
        <h1>Post Form</h1>
        <form action="" onSubmit={this.submitHandler}>
            <div>
                <b>UserID:</b>
                <input type="text" name='userID' value={userID} onChange={this.changeHandler}/>
            </div> <br />
            <div>
                <b>Title:</b>
                <input type="text" name='title' value={title} onChange={this.changeHandler}/>
            </div> <br />
            <div>
                <b>Body:</b>
                <input type="text" name='body' value={body} onChange={this.changeHandler}/>
            </div> <br />

            <div>
                <button onSubmit={this.submitHandler} style={{backgroundColor:"red",color:"white"}}>Submit</button>
            </div>
        </form>
      </>
    )
  }
}

export default AxiosPost
