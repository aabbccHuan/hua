import React, { Component } from 'react'
import './index.less'
import {Link} from 'react-router-dom'
export default class Header extends Component {
    state = {

    }
    render() {
        return (
            <div className="header">
                <ul>
                    <li><Link to="/login">学习视频</Link></li>
                    <li><Link to="/home">学习作品</Link></li>
                    <li><Link to="/login">艺术动态</Link></li>
                    <li><Link to="/home">校园动态</Link></li>
                </ul>
                <div></div>
            </div>
        )
    }
}
