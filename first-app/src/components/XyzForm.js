import React, { Component } from 'react'

export class XyzForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:" ",
         age:" ",
         phone:" "
      }
    }

    handleName=(event)=>{ 
        this.setState({
            name:event.target.value
        })
    }
    handleAge=(event)=>{ 
        this.setState({
            age:event.target.value
        })
    }
    handlePhone=(event)=>{ 
        this.setState({
            phone:event.target.value
        })
    }

    handleSubmit=(event)=>{ 
        alert(`${this.state.name} ${this.state.phone}`)
        event.preventDefault()
    } 

  render() {
    return (
      <>
        <form action="" onSubmit={this.handleSubmit}>
            <div>
                <h1>Registration form</h1>
            </div>
            <div>
                <b>Name</b>:
                <input type="text" value={this.state.name} onChange={this.handleName}/><br /><br />
            </div>
            <div>
                <b>Age</b>:
                <input type="text" value={this.state.age} onChange={this.handleAge}/><br /><br />
            </div>
            <div>
                <b>Phone</b>:
                <input type="text" value={this.state.phone} onChange={this.handlePhone}/><br /><br />
            </div>
            <div>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        </form>
      </>
    )
  }
}

export default XyzForm
