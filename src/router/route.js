import AllComponent from '../component'
import LearnVideo from '../component/learnVideo'
import Login from '../component/login'
const route = [
    // {
    //     path:'/',
    //     component:AllComponent,
    //     routes:[
    //         {
    //             path:'/login',
    //             component:Login    
    //         },
    //         {
    //             path:'/home',
    //             component:LearnVideo    
    //         }
    //     ]
    // },
    {
        path:'/login',
        component:Login    
    },
    {
        path:'/home',
        component:LearnVideo    
    }
    
]
export default route;