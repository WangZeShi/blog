import React, { Component } from 'react'
import './boxstyle.less'
import {hotarticle} from "../../api/index"
import {Link} from "react-router-dom"

export class HotArticle extends Component {

    constructor(props) {
        super(props);
        this.state={
            article:[]
        };
       
      }

    componentDidMount(){
        this.gethotarticle()
        
    }
    gethotarticle =() => {
        hotarticle().then(res=>{            
            console.log(res)
           this.setState({
            article:res.data
           })
        //    console.log(this.state)
        })
  
     }


    render() {
        const {article} = this.state

        return (
            <div className="box1">
                <h3>最近热文</h3>
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

export default HotArticle
