import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from "react-icons/ai";

import "../styles/components/informationcontainer.sass";

const InformationContainer = () => {
    return <section id="information">
        <div className="info-card">
            <AiFillPhone id="phone-icon" />
            <div>
                <h3>Telefone</h3>
                <p>(99) 99999-9999</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id="email-icon" />
            <div>
                <h3>Email</h3>
                <p>email@email.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
                <h3>Localização</h3>
                <p>São Paulo - SP</p>
            </div>
        </div>
    </section>
};

export default InformationContainer;