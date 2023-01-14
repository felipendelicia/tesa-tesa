import Home from "../pages/Home"
import Products from "../pages/Products"

const routes = [
    {
        name:'inicio',
        path:'/',
        component:<Home/>
    },
    {
        name:'productos',
        path:'/buy',
        component:<Products/>
    }
]

export default routes