import React, { Component } from 'react'
import './boxstyle.less'
import {xinxi} from '../../api/index'

export class Information extends Component {
    constructor(props) {
        super(props);
        this.state={

        };
       
      }

    componentDidMount(){
        this.getxinxi()
        
    }
    getxinxi =() => {
        
        xinxi().then(res=>{
            
            // console.log(res.data)
           this.setState({
            name:res.data[24].value,
            job:res.data[25].value,
            mymotto:res.data[26].value,
            qqnet:res.data[28].value
           })
        //    console.log(this.state)
        })

        
        
     }
    render() {
        const {name,job,mymotto,qqnet} = this.state
        return (
            <div className="box1">
                <h3>博主信息</h3>
                <ol>
                    <li>姓名：{name}</li>
                    <li>职业：{job}</li>
                    <li>座右铭：{mymotto}</li>
                    <li>QQ群：{qqnet}</li>
                </ol>
            </div>
        )
    }
}

export default Information
