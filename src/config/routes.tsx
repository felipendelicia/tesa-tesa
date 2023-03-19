import Products from "../pages/Products"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBagShopping, faMessage } from "@fortawesome/free-solid-svg-icons"
import Contact from "../pages/Contact"

const routes = [
    {
        name:'Productos',
        path:'/buy',
        component:<Products/>,
        icon: <FontAwesomeIcon icon={faBagShopping} />
    },
    {
        name:'Contacto',
        path:'/contact',
        component:<Contact/>,
        icon: <FontAwesomeIcon icon={faMessage} />
    }
]

export default routes