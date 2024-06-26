import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:" ",
         comment:" ",
         graduation:"BE"
      }
    }

    handleuserName=(event)=>{ 
        this.setState({
            username:event.target.value
        })
    }

    handleComment=(event)=>{ 
        this.setState({ 
            comment:event.target.value
        })
    }
    
    handleGrade=(event)=>{ 
        this.setState({ 
            graduation:event.target.value
        })
    }

    handleSubmit=(event)=>{ 
        alert(`${this.state.username} ${this.state.comment} ${this.state.graduation}`)
        event.preventDefault()
    }
    
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} action="">
            <div>Form</div>
            <div>
            <label htmlFor="">Username::</label>
            <input type="text" value={this.state.username} onChange={this.handleuserName}/>
            </div>
            <div>
                <label htmlFor="">Comments::</label>    
                <textarea name="" id="" value={this.state.comment} onChange={this.handleComment}></textarea>
            </div>    
            <div>
                <label htmlFor="">Grade::</label>
                <select value={this.state.graduation} onChange={this.handleGrade}>
                    <option value="BE">BE</option>
                    <option value="MSC">MSC</option>
                    <option value="BSC">BSC</option>
                    <option value="ME">ME</option>
                </select>
            </div>

            <div>
                <button type='submit'>submit</button>
            </div>
        </form>
      </>
    )
  }
}

export default Form
