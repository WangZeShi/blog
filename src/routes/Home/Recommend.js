import React, { Component } from 'react'
import {article} from "../../api/index"
import { List, Avatar, Icon } from 'antd';  
import {Link} from 'react-router-dom'
import "./Recommend.less"



export class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state={
        recommend:''
        }; 
      }

      componentDidMount(){
        this.getarticle() 
    }

    getarticle =() => {
        
        article().then(res=>{
           const arr1 = [];
           for(let i in res.data){
               if(res.data[i].is_recommend == 1){
                   arr1.push(res.data[i])
               }
           }
           this.setState({
            recommend:arr1
           })
        //    console.log(this.state.recommend)
        })
    }
    show(id,url){
      //  console.log(id,url)
       
    }    
    render() {
        const {recommend} = this.state
        const IconText = ({ type, text }) => (
            <span>
              <Icon type={type} style={{ marginRight: 8 }} />
              {text}
            </span>
          );
        return (
            <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        // console.log(page);
      },
      pageSize: 5,
    }}
    dataSource={recommend}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          <IconText type="star-o" text={item.hits} key="list-vertical-star-o" />,
          <IconText type="like-o" text="156" key="list-vertical-like-o" />,
          <IconText type="message" text="" key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src={"http://blog.dzxunxi.top/"+item.image_url }
          />
        }
      >
        <List.Item.Meta  onClick={()=>{
          this.show(item.id,item.url)} 
        }
          avatar={<Avatar src={item.avatar} />}
          title={<Link key={item.id} to={"/home"+item.url}>{item.title}</Link>}
          description={item.description}
          
        />
        {}
      </List.Item>
    )}
  />
        )
    }

}
// function showArticle(a) {
//   console.log(a)
// } 



export default Recommend
