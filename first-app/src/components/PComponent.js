import React, { Component } from 'react'
import RegComp from './RegComp'
// import PureComp from './PureComp'
// import MemoComp from './MemoComp'

export class PComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Rohit Sharma"
      }
    }

    componentDidMount(){ 
        setInterval(()=>{ 
            this.setState({
                name:"Hardik Pandya"
            })
        },5000)
    }
    
  render() {
    return (
      <div>
        <h3>This is Parent Component</h3>
         <RegComp name={this.state.name}/>
        {/* <PureComp name={this.state.name}/> */}
        {/* <MemoComp name={this.state.name}/> */}
      </div>
    )
  }
}

export default PComponent
