import React, { Component } from 'react'
import './boxstyle.less'

export class FRriendshipLink extends Component {
    render() {
        return (
            <div className="box1">
                <h3>友情链接</h3>
                <ul className="links">
                    <li><a href="#">两只老虎</a></li>
                    <li><a href="#">跑得快</a></li>
                    <li><a href="#">两头笑笑</a></li>
                    <li><a href="#">笑的欢</a></li>
                    <li><a href="#">三只小猪</a></li>
                    <li><a href="#">盖房子</a></li>
                </ul>
            </div>
        )
    }
}

export default FRriendshipLink
