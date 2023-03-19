import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const socialmedia = [
    {
        name:'instagram',
        path:'https://www.instagram.com/',
        icon: <FontAwesomeIcon icon={faInstagram} />
    },
    {
        name:'facebook',
        path:'https://es-la.facebook.com/',
        icon: <FontAwesomeIcon icon={faFacebook} />
    },
    
]

export default socialmedia