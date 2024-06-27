import React, { Component } from 'react'

export class ReactLifecycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    
    static getDerivedStateFromProps(nextProps,nextState){ 
        console.log('getDerivedStateFromProps: Synchronizing state with props');
        if(nextProps.reset){
            return {count: 0}
        }
        return null;
    }

    componentDidMount(){ 
        console.log('Component did mount')
    }

    shouldComponentUpdate(nextProps,nextState){ 
        return nextState.count !== this.state.count
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('Component did update',snapshot.prevCount)
    }

    componentWillUnmount(){ 
        console.log('Component will unmount')
    }

    getSnapshotBeforeUpdate(prevProps,prevState){ 
        console.log("Capture Snapshot")
        return{
          prevCount:prevState.count
        }
    }

    handleIncrement=()=>{ 
        this.setState({ 
            count:this.state.count+ 1
        })
    }

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    )
  }
}

export default ReactLifecycle
