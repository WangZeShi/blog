/**
 * Created by webmxj@163.com 2018/5/28.
 *
 */
import React,{Component} from "react";
import bannerimg from "../../assets/images/bc59bbb81c99212a3366050346c45b2d.jpg"
import "./home.less"
import {xinxi} from '../../api/index'
import Recommend from './Recommend'
import Information from '../../common/box/Information'
import LastArticles from '../../common/box/LatestArticles'
import HotArticle from '../../common/box/HotArticle'
import FriendshipLink from '../../common/box/FriendshipLink'


var reg = /([^\s]+)\s.*/;
var reg1 = /([^\s]+)\s.*/
export default class Home extends Component{
   
    constructor(props) {
        super(props);
        this.state={
        arr:[]
        };
       
      }

    componentDidMount(){
        this.getxinxi()
        
    }
    getxinxi =() => {
        
        xinxi().then(res=>{
            
            // console.log(res.data)
           this.setState({
            //    arr:res.data[39].value.replace(reg,"$1"),
            motto1a: res.data[39].value.split("\n")[0],
            motto1b: res.data[39].value.split("\n")[1],     
            motto2a: res.data[42].value.split("\n")[0],
            motto2b: res.data[42].value.split("\n")[1],
            motto3a: res.data[43].value.split("\n")[0],
            motto3b: res.data[43].value.split("\n")[1],
           })
        //    console.log(this.state)
        })

        
        
     }
    
    render(){
      const { motto1a,motto1b,motto2a,motto2b,motto3a,motto3b } = this.state 

        return (
            <div id="Home">
                <div className="box-top"></div>
                <div className="banner-box">
                     <img src={bannerimg} />
                </div>
                <div className="wrap">
                    <ul className="motto">
                        <li>
                            <fieldset>
                                <legend>{motto1a}</legend>
                                <p>{motto1b}</p>
                            </fieldset>
                        </li>
                        <li>
                            <fieldset>
                                <legend>{motto2a}</legend>
                                <p>{motto2b}</p>
                            </fieldset>
                        </li>
                        <li>
                            <fieldset>
                                <legend>{motto3a}</legend>
                                <p>{motto3b}</p>
                            </fieldset>
                        </li>
                    </ul>
                    <Recommend className="wrap-left"/>
                    <div className="wrap-right">
                    <Information />
                    <LastArticles />
                    <HotArticle />
                    <FriendshipLink />
                    </div>
                </div>
            </div>
        )
    }
}