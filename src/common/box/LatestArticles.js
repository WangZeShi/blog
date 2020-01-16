import React, { Component } from 'react'
import './boxstyle.less'
import {latestarticles} from '../../api/index'
import {Link} from "react-router-dom"

export class LatestArticles extends Component {

    constructor(props) {
        super(props);
        this.state={
            article:[]
        };
       
      }

    componentDidMount(){
        this.getlatestarticles()
        
    }
    getlatestarticles =() => {
        latestarticles().then(res=>{            
            // console.log(res.data)
           this.setState({
            article:res.data
           })
        //    console.log(this.state)
        })
  
     }

    render() {
        const {article} = this.state
        // console.log(article)
        return (
            <div className="box1">
                <h3>最新文章</h3>
                <ol>
                { 
                    article.map(function(val){ 
                        return <li><Link key={val.id} to={"/home"+val.url}>{val.title}</Link></li>
                    })
                }
                </ol>
            </div>
        )
    }
}

export default LatestArticles
