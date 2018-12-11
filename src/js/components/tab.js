import React from 'react';
class Tab extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tabList: props.list
    }
  }
  render () {
    return (
      <ul>
          {this.state.tabList.map(item=>{return <li key={item.id} onClick={()=>this.click(item.id)}>{item.name}</li>})}
      </ul>
    )
  }
  click=(id)=> {
    console.log(id)
  }
}
export default Tab