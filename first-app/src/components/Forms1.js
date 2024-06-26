import React, { Component } from 'react'

export class Forms1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:"",
         email:""
      }
    }
    handleUsername=(event)=>{ 
        this.setState({ 
            username:event.target.value
        })
    }

    handleEmail=(event)=>{
        this.setState({ 
            email:event.target.value
        })
    }

    handleSubmit=(event)=>{ 
        alert(`${this.state.username} and ${this.state.email}`)
        event.preventDefault()
    }
  render() {
    return (
      <>
        <form action="" onSubmit={this.handleSubmit}>
            <h2>Form</h2>
            <div>
                Name:
                <input type="text" onChange={this.handleUsername} />
            </div><br />
            <div>
                Email:
                <input type="email" onChange={this.handleEmail} />
            </div><br />
            <div>
                <button type='submit'>Submit</button>
            </div>

        </form>
      </>
    )
  }
}

export default Forms1
