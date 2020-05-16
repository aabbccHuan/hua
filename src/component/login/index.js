import React, { Component } from 'react';
import './index.less';
import {Link} from 'react-router-dom'
import Header from '../header'
class Login extends Component {
  state = {

  }
  render() {
    return (<div>
      <Link to="/home">login</Link>
    </div>)
  }
}

export default Login;
