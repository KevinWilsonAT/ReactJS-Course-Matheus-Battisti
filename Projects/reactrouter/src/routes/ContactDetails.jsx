import { useParams, useNavigate } from 'react-router-dom'

const ContactDetails = () => {
    const { id } = useParams();

    // 6- redirect
    const navigate = useNavigate();

    const handleContact = () => {
        console.log("Contact sent");
        return navigate("/");
    };

    return (
        <div>
            <h1>Displaying contact info: {id}</h1>
            <button onClick={handleContact}></button>
        </div>
    )
}

export default ContactDetails