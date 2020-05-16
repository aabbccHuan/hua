import React, { memo ,useEffect} from 'react'
import { renderRoutes } from 'react-router-config'
import { withRouter} from 'react-router-dom'
import Header from './header'

export default memo(withRouter(function AllComponent(props) {
    useEffect(() => {
        if(props.location.pathname === '/'){
            props.history.push('/home')
        }
    }, [props.history, props.location.pathname])
    return (
        <div>
            <Header />
            <div className="content">
                {
                renderRoutes(props.route.routes)
                }
            </div>
           
        </div>
    )
}))
