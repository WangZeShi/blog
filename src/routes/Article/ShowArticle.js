import React, { Component } from 'react'
import { showarticle } from '../../api';
import { Avatar } from 'antd';
import "./showarticle.less"
import Information from '../../common/box/Information';
import HotArticle from '../../common/box/HotArticle';
import LatestArticles from '../../common/box/LatestArticles';
import FRriendshipLink from '../../common/box/FriendshipLink';



export class ShowArticle extends Component {

    constructor(props) {
        super(props);
        this.state={
        arr:[],
        id:props.location.pathname.replace(/[^0-9]/ig,"")
        };
      }
    
    componentDidMount(){
        this.showarticle()
        
    }
    showarticle =() => {

        showarticle(this.state.id).then(res=>{
            
            // console.log(res)
           this.setState({
               arr:res.data[0]
           })
        })

        
        
     }

    render() {
        const {arr} = this.state
        return (
            <div>
                <div className="showarticle">
                    <div className="showarticle-top">夫唯不争故天下莫能与之争</div>
                    <div className="showarticle-wrap">
                        <div className="showarticle-left">
                            <h1>{arr.title}</h1>
                            <div className="date_hits">
                                <span><i>发布时间：{arr.create_time}</i></span>
                                <span><i>热度：{arr.hits}</i></span>
                                <span><i>评论数：</i></span>
                            </div>
                            <div className="showarticle-content">
                                <div dangerouslySetInnerHTML={{__html:"<div>"+arr.content+"</div>"}} />
                                <div className="keyWords"><p>{arr.keywords}</p></div>
                            </div>
                            
                        </div>
                        <div className="showarticle-right">
                            <Information />
                            <HotArticle />
                            <LatestArticles />
                            <FRriendshipLink />
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
    
}
export default ShowArticle
