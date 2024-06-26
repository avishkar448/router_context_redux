import React, { Component } from 'react'
import Button from './Button'
export class MyForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:"",
         email:"",
         phone:"",
         password:"",
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
    handlePhone=(event)=>{ 
        this.setState({ 
            phone:event.target.value
        })
    }
    handlePassword=(event)=>{ 
        this.setState({ 
            password:event.target.value
        })
    }

    handleSubmit=(event)=>{ 
        alert(`${this.state.username} ${this.state.email}`)
        event.preventDefault()
    }

  render() {
    return (
        <> 
            <form action="" onSubmit={this.handleSubmit}>
                <div>Registration Form</div>
                <div>
                    Username:
                    <input type="text" value={this.state.usename} onChange={this.handleUsername} /> <br /><br />
                    Email:
                    <input type="email" value={this.state.email} onChange={this.handleEmail}/><br /><br />
                    Phone:
                    <input type="number" value={this.state.phone} onChange={this.handlePhone} /> <br /><br />
                    Password:
                    <input type="password" value={this.state.password} onChange={this.handlePassword} /><br />
        <br />

                </div>
                <div>
                    <Button bg="green" onClick={this.handleSubmit}>Submit</Button>
                </div>
            </form>

            <div>
                <h2>Username:{this.state.username}</h2>
                <h2>Email:{this.state.email}</h2>
                <h2>Phone:{this.state.phone}</h2>
                <h2>Password:{this.state.password}</h2>
            </div>
        </>
    )
  }
}

export default MyForm
