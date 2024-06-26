import React, { Component } from 'react'
import axios from 'axios'

export class AxiosExample extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post:[],
         errorMsg:" "
      }
    }

    

    componentDidMount(){ 
        axios.get('https://jsonplaceholder.typicode.com/users')

        .then(Response =>{ 
            this.setState({post:Response.data})
        })
        .catch(error =>{ 
            this.setState({errorMsg:"Somthing went wrong!!!"})
        })
    }
    
  render() {
    const {post,errorMsg}=this.state
    return (
      <div>
        <h1>The List </h1>
        {post.length ? post.map(p => <h3 key={p.id}>{p.name}</h3>):null }

        {errorMsg ? <h1>{errorMsg}</h1>:null}
      </div>
    )
  }
}

export default AxiosExample
