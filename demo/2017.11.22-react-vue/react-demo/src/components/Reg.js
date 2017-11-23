import { Button } from 'react-weui';

import React from 'react'

class Reg extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {}
    this.onReg = this.onReg.bind(this)
  }

  onReg () {
    console.log( this.props.reg() )
  }

  render () {
    return (
      <div>
        <Button type="primary" onClick={this.onReg}>注册</Button>
      </div>
    )
  }
}

export default Reg