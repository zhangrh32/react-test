import React, { Component } from 'react';
import Tab from '../components/tab'
import image1 from '../../images/img1.jpg';
class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      data: '这是我的第一个demo，试着点我一下',
      num: 1,
      tabList: [{
        id: '1',
        name: '首页'
      }, {
        id: '2',
        name: '列表'
      }, {
        id: '3',
        name: '详情'
      },{
        id: '4',
        name: '我的'
      }]
    }
  }
  render () {
    return (
      <div>
        <header className="header">Demo1</header>
        <div className="center">
          <p style={{padding: '20px'}} onClick={()=>this.clickMe()}>{ this.state.data }</p>
          <div>
            <img className="demo_img" src={ image1 }/>
          </div>
        </div>
        <footer className="footer">
          <Tab list={this.state.tabList} />
        </footer>
      </div>
    )
  }
  componentWillMount=()=>{
    console.log(1);
  };
  componentDidMount=()=>{
    console.log(2);
  };
  componentWillReceiveProps=()=>{
    console.log(3);
  };
  shouldComponentUpdate=()=>{
    console.log(4);
    return true;
  };
  componentWillUpdate=()=>{
    console.log(5);
  };
  componentDidUpdate=()=>{
    console.log(6);
  };
  componentWillUnmount=()=>{
    console.log(7);
  };

  clickMe=()=>{
    let n = this.state.num
    n++
    this.setState({
      data: '刚入门，react小白，不要见怪。点击次数：' + this.state.num,
      num: n
    })
  }
}
export default Home