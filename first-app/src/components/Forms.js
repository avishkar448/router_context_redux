import React, { Component } from 'react'

export class Forms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x:[
            {id:"1",name:"Avishkar"},
            {id:"2",name:"Ashok"},
            {id:"3",name:"Abhay"}
         ]
      }
    }
    
  render() {
    const {x}=this.state
    return (
      <div>
        <h2>List: </h2>
        {x.length ? x.map(q => <h4 key={q.id}>{q.name}</h4>):null}
      </div>
    )
  }
}

export default Forms
