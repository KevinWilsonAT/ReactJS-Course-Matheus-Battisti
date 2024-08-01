
import { useLocation } from 'react-router-dom'
import Message from '../layout/Message'

//import styles from './Projects.module.css'

function Projects(){

    const location = useLocation()
    let message


    if (location.state) {
        message = location.state.msg
    }

    return (
        <div>
            <h1>My Projects</h1>
            {message && <Message type="success" msg={message} />}
        </div>
    )
}

export default Projects