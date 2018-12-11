
import React,{ Component } from 'react'
class MyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
 
    };
  }
  render() {
    return (
      <div style={{width:"100%",height:document.documentElement.clientHeight,fontSize:"12px",backgroundColor:"#0ff",textAlign:"center",lineHeight:"100px"}} onClick={()=>this.click()}>
        这是MyScreen界面
      </div>
    )
  }
  click=()=>{
    alert("点击到了！！！！");
  };
 
}
export default MyScreen